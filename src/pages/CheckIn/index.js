import React, { useState, useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Alert, ActivityIndicator } from 'react-native';
import { formatRelative, parseISO, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {
  Container,
  CheckinButton,
  CheckinButtonText,
  List,
  ListWrapper,
} from './styles';

import api from '~/services/api';

import Checkin from '~/components/Checkin';

import { useAuth } from '~/contexts/auth';

const CheckIn = () => {
  const [checkins, setCheckins] = useState([]);
  const [loading, setloading] = useState(true);

  const flatListRef = useRef(null);
  const isFocused = useIsFocused();
  const { student } = useAuth();

  async function loadCheckins() {
    try {
      const response = await api.get(`students/${student.id}/checkins`);

      setCheckins(response.data);

      setloading(false);
    } catch (err) {
      Alert.alert('Erro', 'Erro na conexao!');
    }
  }

  const handleCheckin = async () => {
    try {
      const response = await api.post(`students/${student.id}/checkins`);

      const newCheckin = response.data;

      if (!newCheckin.error) {
        setCheckins([...checkins, newCheckin]);
      } else {
        const latestCheckins = response.data.checkins;

        const nextCheckinAvailable = formatRelative(
          addDays(parseISO(latestCheckins[4].createdAt), 7),
          new Date(),
          { locale: pt }
        );

        Alert.alert(
          'Quantidade máxima de checkins atingida',
          `Próximo checkin disponível: ${nextCheckinAvailable}`
        );
      }
    } catch (err) {
      Alert.alert('Erro', String(err));
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadCheckins();
    }
  }, [isFocused]);

  return (
    <Container>
      <CheckinButton onPress={handleCheckin}>
        <CheckinButtonText>Novo check-in</CheckinButtonText>
      </CheckinButton>

      <ListWrapper>
        <List
          inverted
          ref={flatListRef}
          onContentSizeChange={() =>
            setTimeout(() => {
              flatListRef.current.scrollToEnd();
            }, 500)
          }
          data={checkins}
          keyExtractor={(item) => item.id} // id ja esta em string
          renderItem={({ item, index }) => (
            <Checkin number={index + 1} date={item.date} />
          )}
          ListFooterComponent={() => (loading ? <ActivityIndicator /> : null)}
        />
      </ListWrapper>
    </Container>
  );
};

export default CheckIn;

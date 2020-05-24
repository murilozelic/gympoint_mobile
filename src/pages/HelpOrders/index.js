import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import HelpOrder from '~/components/HelpOrder';

import api from '~/services/api';

import { useAuth } from '~/contexts/auth';

import {
  Container,
  HelpOrderButton,
  HelpOrderButtonText,
  List,
  ListWrapper,
} from './styles';

const HelpOrders = () => {
  const { student } = useAuth();
  const HelpOrderFlatListRef = useRef(null);
  const [helpOrders, setHelpOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const handleNewHelpOrder = () => {
    try {
      navigation.navigate('NewHelpOrder');
    } catch (err) {}
  };

  function handleHelpOrderDetails(item) {
    navigation.navigate('HelpOrderDetails', { item });
  }

  async function loadHelpOrders() {
    setLoading(true);

    try {
      const response = await api.get(`students/${student.id}/help-orders`);

      if (!response.data.error) {
        setHelpOrders(response.data);
      } else {
        setHelpOrders([]);
      }
      setLoading(false);
    } catch (err) {
      Alert.alert('Erro', err);
    }
  }

  useEffect(() => {
    if (isFocused) {
      loadHelpOrders();
    }
  }, [isFocused]);

  return (
    <Container>
      <HelpOrderButton onPress={handleNewHelpOrder}>
        <HelpOrderButtonText>Novo pedido de auxílio</HelpOrderButtonText>
      </HelpOrderButton>

      <ListWrapper>
        <List
          ref={HelpOrderFlatListRef}
          onContentSizeChange={() =>
            HelpOrderFlatListRef.current.scrollToEnd({ animated: false })
          }
          inverted
          data={helpOrders}
          keyExtractor={(item) => item._id} // id ja esta em string
          renderItem={({ item }) => (
            <HelpOrder
              onPress={() => handleHelpOrderDetails(item)}
              date={item.createdAt}
              answered={!!item.answer}
              question={item.question}
            />
          )}
          ListFooterComponent={() => (loading ? <ActivityIndicator /> : null)}
        />
      </ListWrapper>
    </Container>
  );
};

export default HelpOrders;

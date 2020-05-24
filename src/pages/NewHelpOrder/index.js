import React, { useRef } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '~/components/Input';

import api from '~/services/api';

import { useAuth } from '~/contexts/auth';

import {
  Container,
  SubmitButton,
  SubmitButtonText,
  HelpOrderForm,
} from './styles';

const NewHelpOrder = () => {
  const formRef = useRef(null);
  const { student } = useAuth();
  const navigation = useNavigation();

  const handleSubmit = async ({ question }, { reset }) => {
    try {
      if (question) {
        const response = await api.post(`students/${student.id}/help-orders`, {
          question,
        });

        const { _id } = response.data;

        if (_id) {
          navigation.navigate('HelpOrders');
        }
      }
    } catch (err) {
      Alert.alert('Erro', String(err));
    }

    reset();
    // { email: 'test@example.com', password: '123456' }
  };

  return (
    <Container>
      <HelpOrderForm ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="question"
          placeholder="Inclua seu pedido de auxílio"
          multiline
          style={{
            marginBottom: 15,
            paddingHorizontal: 12,
            paddingVertical: 12,
            borderRadius: 4,
            borderWidth: 2,
            borderColor: '#ddd',
            fontSize: 15,
            color: '#444',
            height: 200,
            textAlignVertical: 'top',
            backgroundColor: '#FFF',
          }}
        />
        <SubmitButton onPress={() => formRef.current.submitForm()}>
          <SubmitButtonText>Enviar pedido</SubmitButtonText>
        </SubmitButton>
      </HelpOrderForm>
    </Container>
  );
};

export default NewHelpOrder;

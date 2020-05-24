import React, { useRef } from 'react';
import { Image, Text, View } from 'react-native';

import { Form } from '@unform/mobile';
import Input from '~/components/Input';

import logo from '~/assets/images/gympoint.png';

import { Container, SubmitButton, SubmitButtonText } from './styles';

import { useAuth } from '~/contexts/auth';

export default function SignIn() {
  const formRef = useRef(null);
  const { signIn } = useAuth();

  function handleSubmit({ studentId }, { reset }) {
    if (studentId) {
      signIn(studentId);
    }

    reset();
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <Container>
      <Image
        source={logo}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
      />
      <Text
        style={{
          marginBottom: 20,
          fontSize: 28,
          fontWeight: 'bold',
          color: '#ee4e64',
        }}
      >
        GYMPOINT
      </Text>
      <View style={{ alignSelf: 'stretch' }}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="studentId" placeholder="Informe seu ID de cadastro" />
          <SubmitButton onPress={() => formRef.current.submitForm()}>
            <SubmitButtonText>Entrar no sistema</SubmitButtonText>
          </SubmitButton>
        </Form>
      </View>
    </Container>
  );
}

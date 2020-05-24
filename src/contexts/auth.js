import React, { useEffect, createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import api from '~/services/api';

const AuthContext = createContext({
  signed: false,
  loading: true,
  student: null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedStudent() {
      const storagedStudent = await AsyncStorage.getItem('@RNAuth:student');

      if (storagedStudent) {
        setStudent(JSON.parse(storagedStudent));
      }

      setLoading(false);
    }

    loadStoragedStudent();
  }, []);

  async function signIn(id) {
    const response = await api.get(`student/${id}`);

    const foundStudentId = response.data.id;

    if (foundStudentId) {
      setStudent(response.data);

      await AsyncStorage.setItem(
        '@RNAuth:student',
        JSON.stringify(response.data)
      );
    } else {
      Alert.alert('Falha de login', 'Cadastro não encontrado');
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setStudent(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!student, loading, student, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

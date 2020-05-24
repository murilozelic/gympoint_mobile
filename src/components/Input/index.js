import React, { useRef, useEffect } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { useField } from '@unform/core';

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const styles = StyleSheet.create({
    label: {
      fontWeight: 'bold',
      marginBottom: 5,
    },

    input: {
      marginBottom: 15,
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#ddd',
      fontSize: 15,
      color: '#444',
    },
  });

  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      getValue(ref) {
        return ref.value;
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={styles.input}
        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
    </>
  );
}

export default Input;

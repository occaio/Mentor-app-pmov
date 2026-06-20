// components/CustomInput.tsx
import { Ionicons } from '@expo/vector-icons'; // Expo já vem com o Vector Icons
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';

interface CustomInputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({ label, isPassword, ...rest }) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={secureText}
          placeholderTextColor={Colors.gray}
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.icon}>
            <Ionicons 
              name={secureText ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={Colors.gray} 
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '600',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FAFA', // Um tom levemente diferente para o fundo do input
    borderWidth: 1,
    borderColor: '#E2EAEA',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    color: Colors.text,
    fontSize: 15,
  },
  icon: {
    padding: 4,
  },
});
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { Colors } from '../constants/colors';

export default function CodeScreen() {
  const router = useRouter();
  const [code, setCode] = useState('');

  const handleConfirmCode = () => {
    if (code.length < 5) {
      Alert.alert("Erro", "Por favor, preencha o código de 5 dígitos.");
      return;
    }
    // Avança para redefinição de senha
    router.push('/auth/redefinirSenha');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <View style={styles.logoContainer}>
                  <Image 
                source={require('../assets/img/mentor.png')} 
                style={styles.logo} 
                resizeMode="contain"
                />
                </View>

        <View style={styles.card}>
          <Text style={styles.title}>Enviamos um código para seu e-mail!</Text>
          <Text style={styles.subtitle}>Insira nos campos abaixo o código de verificação</Text>

          <View style={styles.codeInputsContainer}>
            {[0, 1, 2, 3, 4].map((index) => (
              <View key={index} style={[styles.codeBox, code.length > index && styles.codeBoxActive]}>
                <Text style={styles.codeBoxText}>{code[index] || ''}</Text>
              </View>
            ))}
          </View>

          <TextInput
            style={styles.hiddenInput}
            keyboardType="number-pad"
            maxLength={5}
            value={code}
            onChangeText={setCode}
            caretHidden
          />

          <CustomButton title="Confirmar" variant="primary" onPress={handleConfirmCode} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: Colors.background, justifyContent: 'flex-end' },
  logoContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 24 },
  logo: { width: 100, height: 100 },
  card: { backgroundColor: Colors.card, borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingHorizontal: 24, paddingTop: 28, paddingBottom: 40 },
  title: { fontSize: 20, fontWeight: 'bold', color: Colors.text, marginBottom: 8 },
  subtitle: { fontSize: 13, color: Colors.gray, marginBottom: 24 },
  codeInputsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  codeBox: { width: 48, height: 48, borderRadius: 8, backgroundColor: Colors.secondary, opacity: 0.6, justifyContent: 'center', alignItems: 'center' },
  codeBoxActive: { opacity: 1 },
  codeBoxText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  hiddenInput: { position: 'absolute', bottom: 120, left: 24, right: 24, height: 48, opacity: 0 } 
});
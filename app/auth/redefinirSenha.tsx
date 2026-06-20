import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { Colors } from '../constants/colors';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (!password || !confirmPassword) {
      Alert.alert("Erro", "Preencha ambos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    Alert.alert("Sucesso", "Senha redefinida com sucesso!", [
      { text: "Ir para Login", onPress: () => router.replace('/auth/login') }
    ]);
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
          <Text style={styles.title}>Digite a sua nova senha</Text>
          <Text style={styles.subtitle}>Insira nos campos abaixo o código de verificação</Text>

          <CustomInput 
            label="Nova Senha" 
            placeholder="••••••••••••" 
            isPassword={true} 
            value={password}
            onChangeText={setPassword}
          />
          
          <CustomInput 
            label="Confirmar Senha" 
            placeholder="••••••••••••" 
            isPassword={true} 
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <CustomButton title="Confirmar" variant="primary" onPress={handleReset} style={styles.buttonSpacing} />
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
  buttonSpacing: { marginTop: 16 }
});
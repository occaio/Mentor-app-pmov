import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { Colors } from '../constants/colors';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleConfirm = () => {
    if (!email.trim()) {
      Alert.alert("Erro", "Por favor, digite o seu e-mail.");
      return;
    }
    // Avança para a Tela de Código
    router.push('/auth/codigo');
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
          <Text style={styles.title}>Esqueceu a senha?</Text>
          <Text style={styles.subtitle}>Confirme seu Email</Text>

          <CustomInput 
            label="Email" 
            placeholder="seu@email.com" 
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <CustomButton title="Confirmar" variant="primary" onPress={handleConfirm} style={styles.buttonSpacing} />
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
  title: { fontSize: 24, fontWeight: 'bold', color: Colors.text, marginBottom: 8 },
  subtitle: { fontSize: 14, color: Colors.gray, marginBottom: 24 },
  buttonSpacing: { marginTop: 16 }
});
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { Colors } from '../constants/colors';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validação obrigatória de preenchimento dos campos
    if (!email.trim() || !password.trim()) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    // Se preenchido, avança para a Home 
    router.replace('/tabs/home');
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.container} 
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
                  <Image 
                source={require('../assets/img/mentor.png')} 
                style={styles.logo} 
                resizeMode="contain"
                />
                </View>

        <View style={styles.card}>
          <Text style={styles.title}>Entrar</Text>

          <CustomInput 
            label="Email" 
            placeholder="seu@email.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput 
            label="Senha" 
            placeholder="••••••••••••" 
            isPassword={true}
            value={password}
            onChangeText={setPassword}
          />

          {/* Link Esqueceu a Senha */}
          <TouchableOpacity 
            style={styles.forgotPasswordContainer}
            onPress={() => router.push('/auth/esqueciSenha')}
          >
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          {/* Botão Entrar */}
          <CustomButton 
            title="Entrar" 
            variant="primary" 
            onPress={handleLogin}
            style={styles.buttonSpacing}
          />

          {/* Link Cadastre-se */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerLabel}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => router.push('/auth/criarConta')}>
              <Text style={styles.registerLink}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    justifyContent: 'flex-end', 
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  logo: {
    width: 120,
    height: 120,
  },
  card: {
    backgroundColor: Colors.card,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 24,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  buttonSpacing: {
    marginTop: 8,
    marginBottom: 24,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerLabel: {
    color: Colors.text,
    fontSize: 14,
  },
  registerLink: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { Colors } from '../constants/colors';

export default function RegisterScreen() {
  const router = useRouter();
  
  // Estados do formulário
  const [role, setRole] = useState<'aluno' | 'professor'>('aluno'); // Controle do seletor
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false); // Simulação do Checkbox

  const handleRegister = () => {
    // Validações Básicas de Cadastro
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!agreeTerms) {
      Alert.alert("Termos de Uso", "Você precisa aceitar os Termos de Uso e Política de Privacidade para continuar.");
      return;
    }

    // Sucesso no cadastro > Volta para o Login
    Alert.alert("Sucesso", "Conta criada com sucesso!", [
      { text: "OK", onPress: () => router.replace('/auth/login') }
    ]);
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
          <Text style={styles.title}>Criar Conta</Text>

          {/* Seletor Aluno / Professor */}
          <View style={styles.selectorContainer}>
            <TouchableOpacity 
              style={[styles.selectorButton, role === 'aluno' && styles.selectorActive]} 
              onPress={() => setRole('aluno')}
            >
              <Text style={[styles.selectorText, role === 'aluno' && styles.selectorTextActive]}>
                Sou Aluno
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.selectorButton, role === 'professor' && styles.selectorActive]} 
              onPress={() => setRole('professor')}
            >
              <Text style={[styles.selectorText, role === 'professor' && styles.selectorTextActive]}>
                Sou Professor
              </Text>
            </TouchableOpacity>
          </View>

          {/* Inputs */}
          <CustomInput 
            label="Nome Completo" 
            placeholder="Seu nome"
            value={name}
            onChangeText={setName}
          />

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

          {/* Checkbox de Termos de Uso */}
          <TouchableOpacity 
            style={styles.checkboxContainer} 
            activeOpacity={0.8}
            onPress={() => setAgreeTerms(!agreeTerms)}
          >
            <View style={[styles.checkbox, agreeTerms && styles.checkboxChecked]}>
              {agreeTerms && <View style={styles.checkboxInner} />}
            </View>
            <Text style={styles.checkboxLabel}>
              Concordo com os <Text style={styles.linkBold}>Termos de Uso</Text> e <Text style={styles.linkBold}>Política de Privacidade</Text>.
            </Text>
          </TouchableOpacity>

          {/* Botão de Criar Conta */}
          <CustomButton 
            title="Criar Conta" 
            variant="primary" 
            onPress={handleRegister}
            style={styles.buttonSpacing}
          />

          {/* Link para voltar ao Login */}
          <View style={styles.loginLinkContainer}>
            <Text style={styles.loginLinkLabel}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => router.replace('/auth/login')}>
              <Text style={styles.loginLink}>Faça login</Text>
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
    paddingVertical: 24,
  },
  logo: {
    width: 100,
    height: 100,
  },
  card: {
    backgroundColor: Colors.card,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  selectorContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  selectorButton: {
    flex: 1,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2EAEA',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FAFA',
  },
  selectorActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  selectorText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.gray,
  },
  selectorTextActive: {
    color: '#FFFFFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    gap: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    borderColor: Colors.primary,
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: Colors.primary,
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.text,
  },
  linkBold: {
    color: Colors.primary,
    fontWeight: '600',
  },
  buttonSpacing: {
    marginTop: 16,
    marginBottom: 20,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLinkLabel: {
    color: Colors.text,
    fontSize: 14,
  },
  loginLink: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
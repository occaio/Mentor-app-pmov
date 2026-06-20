// app/(tabs)/home.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Header Fiel ao Figma */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mentor</Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop' }} 
          style={styles.avatar} 
        />
      </View>

      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Barra de Busca */}
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Buscar cursos, mentores ou tópicos..."
            placeholderTextColor={Colors.gray}
          />
        </View>

        {/* 3. Saudação */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Olá, Fulaninho! 👋</Text>
          <Text style={styles.subtitleText}>Continue sua jornada de aprendizado</Text>
        </View>

        {/* 4. Cards de Estatísticas (Métricas do Figma) */}
        <View style={styles.statsContainer}>
          
          {/* Card 1: Cursos Ativos */}
          <View style={styles.statCard}>
            <View style={[styles.iconContainer, { backgroundColor: Colors.primary }]}>
              <Ionicons name="book-outline" size={22} color="#FFF" />
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Cursos Ativos</Text>
            </View>
          </View>

          {/* Card 2: Horas Estudadas */}
          <View style={styles.statCard}>
            <View style={[styles.iconContainer, { backgroundColor: Colors.secondary }]}>
              <Ionicons name="time-outline" size={22} color="#FFF" />
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statNumber}>47</Text>
              <Text style={styles.statLabel}>Horas Estudadas</Text>
            </View>
          </View>

          {/* Card 3: Conquistas */}
          <View style={styles.statCard}>
            <View style={[styles.iconContainer, { backgroundColor: '#24D0C0' }]}>
              <Ionicons name="trophy-outline" size={22} color="#FFF" />
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Conquistas</Text>
            </View>
          </View>

        </View>

        {/* 5. Seção Continue Aprendendo */}
        <View style={styles.continueSection}>
          <Text style={styles.sectionTitle}>Continue Aprendendo</Text>
          {/* Card de placeholder para o conteúdo do curso */}
          <View style={styles.coursePlaceholderCard} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF', // O topo do Figma é branco puro
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    backgroundColor: '#F2F9F9', // Um tom bem suave de fundo para contrastar os cards brancos
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFF',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
    fontStyle: 'italic', // Detalhe da tipografia do logo Mentor
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: Colors.secondary,
  },
  searchContainer: {
    marginTop: 16,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFF',
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 16,
    fontSize: 14,
    color: Colors.text,
    borderWidth: 1,
    borderColor: '#E2EAEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  welcomeContainer: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 13,
    color: Colors.gray,
  },
  statsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: '#EFF6F6',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statInfo: {
    justifyContent: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.gray,
    marginTop: 2,
  },
  continueSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 12,
  },
  coursePlaceholderCard: {
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EFF6F6',
  },
});
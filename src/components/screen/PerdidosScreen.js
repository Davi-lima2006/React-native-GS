import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PerdidosScreen() {
  const navigation = useNavigation();

  const [animaisPerdidos] = useState([
    { nome: 'Bolt', local: 'Praia Central', data: '30/05/2025' },
    { nome: 'Luna', local: 'Rua das Palmeiras', data: '28/05/2025' },
    { nome: 'Rex', local: 'Av. Brasil', data: '27/05/2025' },
    { nome: 'Mel', local: 'Av. Atlântica', data: '26/05/2025' },
    { nome: 'Thor', local: 'Praça das Águas', data: '25/05/2025' },
    { nome: 'Pipoca', local: 'Rua das Flores', data: '24/05/2025' },
  ]);

  const [animalSelecionado, setAnimalSelecionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const voltar = () => {
    navigation.goBack();
  };

  const abrirModal = (animal) => {
    setAnimalSelecionado(animal);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setAnimalSelecionado(null);
  };

  return (
    <ImageBackground
      source={require('../../../assets/image.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <SafeAreaView style={styles.safe}>
        <TouchableOpacity style={styles.backButton} onPress={voltar} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={20} color="#fff" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Animais Perdidos 🐾</Text>
        <Text style={styles.subtitle}>Ajude a encontrar esses amigos</Text>

        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          {animaisPerdidos.map((animal, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => abrirModal(animal)}
              activeOpacity={0.8}
            >
              <Text style={styles.animalName}>{animal.nome}</Text>
              <Text style={styles.animalInfo}>Local: {animal.local}</Text>
              <Text style={styles.animalInfo}>Data: {animal.data}</Text>
              <View style={styles.buttonWrapper}>
                <Text style={styles.viewDetails}>Ver detalhes</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Modal
          transparent
          visible={modalVisible}
          animationType="fade"
          onRequestClose={fecharModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>🐶 {animalSelecionado?.nome}</Text>
              <View style={styles.modalLine} />
              <Text style={styles.modalInfo}>
                Foi visto pela região de <Text style={{ fontWeight: '700' }}>{animalSelecionado?.local}</Text>.
              </Text>
              <Text style={styles.modalInfo}>Perdido em: {animalSelecionado?.data}</Text>
              <Text style={styles.modalInfo}>Contato: (99) 99999-9999</Text>

              <Pressable style={styles.secondaryButton} onPress={fecharModal}>
                <Text style={styles.secondaryButtonText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 20, 40, 0.5)', 
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 25,
  },
  backText: {
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: '#EAEFF3',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#C8D6E5',
    marginBottom: 20,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#ffffffee',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5,
  },
  animalName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0E2F44',
    marginBottom: 6,
  },
  animalInfo: {
    fontSize: 14,
    color: '#4B6584',
    marginBottom: 2,
  },
  buttonWrapper: {
    marginTop: 10,
    backgroundColor: '#0E6BA8',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  viewDetails: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  modalBox: {
    backgroundColor: '#F9FAFB',
    padding: 24,
    borderRadius: 20,
    width: '100%',
    maxWidth: 400,
    elevation: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0E2F44',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalLine: {
    height: 1,
    backgroundColor: '#CCD1D9',
    marginVertical: 10,
  },
  modalInfo: {
    fontSize: 14,
    color: '#4B6584',
    marginBottom: 10,
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: '#0E6BA8',
    paddingVertical: 12,
    borderRadius: 14,
    marginTop: 10,
  },
  secondaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});

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
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AdocaoScreen() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

  const animais = [
    { nome: 'Nina', idade: '2 anos', raca: 'Vira-lata', local: 'Abrigo Esperança', foto: 'https://placedog.net/400/300?id=1' },
    { nome: 'Tobias', idade: '1 ano', raca: 'Poodle', local: 'Lar dos Peludos', foto: 'https://placedog.net/400/300?id=2' },
    { nome: 'Lola', idade: '3 anos', raca: 'Beagle', local: 'Cãotinho Feliz', foto: 'https://placedog.net/400/300?id=3' },
    { nome: 'Max', idade: '4 anos', raca: 'Labrador', local: 'Amor Animal', foto: 'https://placedog.net/400/300?id=4' },
    { nome: 'Bela', idade: '6 meses', raca: 'SRD', local: 'Patinhas do Bem', foto: 'https://placedog.net/400/300?id=5' },
  ];

  const abrirDetalhes = (animal) => {
    setAnimalSelecionado(animal);
    setModalVisible(true);
  };

  const fecharDetalhes = () => {
    setModalVisible(false);
    setAnimalSelecionado(null);
  };

  const solicitarAdocao = () => {
    alert('Solicitação enviada com sucesso.');
    fecharDetalhes();
  };

  return (
    <ImageBackground
      source={require('../../../assets/image.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Adoção de Animais</Text>
        </View>

        <Text style={styles.subtitle}>Encontre um novo companheiro para sua família</Text>

        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          {animais.map((animal, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => abrirDetalhes(animal)} activeOpacity={0.8}>
              <Image source={{ uri: animal.foto }} style={styles.animalImage} />
              <View style={styles.cardContent}>
                <Text style={styles.animalName}>{animal.nome}</Text>
                <Text style={styles.animalInfo}>Raça: {animal.raca}</Text>
                <Text style={styles.animalInfo}>Idade: {animal.idade}</Text>
                <Text style={styles.animalInfo}>Local: {animal.local}</Text>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.viewDetails}>Visualizar</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Modal
          transparent
          visible={modalVisible}
          animationType="slide"
          onRequestClose={fecharDetalhes}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>{animalSelecionado?.nome}</Text>
              <Image source={{ uri: animalSelecionado?.foto }} style={styles.modalImage} />
              <View style={styles.modalLine} />
              <Text style={styles.modalInfo}>Local: {animalSelecionado?.local}</Text>
              <Text style={styles.modalInfo}>Idade: {animalSelecionado?.idade}</Text>
              <Text style={styles.modalInfo}>Raça: {animalSelecionado?.raca}</Text>
              <Text style={styles.modalInfo}>
                Entre em contato com o abrigo para iniciar a adoção.
              </Text>
              <Text style={[styles.modalInfo, { fontWeight: 'bold' }]}>
                Contato: (99) 99999-8888
              </Text>

              <Pressable style={styles.primaryButton} onPress={solicitarAdocao}>
                <Text style={styles.primaryButtonText}>Solicitar Adoção</Text>
              </Pressable>

              <Pressable style={styles.secondaryButton} onPress={fecharDetalhes}>
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
    backgroundColor: 'rgba(0,0,0,0.4)', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10, 
  },
  backText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    flex: 1,
    fontSize: 24,       
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    marginLeft: -20,    
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ddd',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffffee',
    borderRadius: 16,
    padding: 10,      
    marginBottom: 12,  
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  animalImage: {
    width: 90,       
    height: 72,
    borderRadius: 12,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  animalName: {
    fontSize: 18,       
    fontWeight: '700',
    color: '#0E2F44',
    marginBottom: 4,
  },
  animalInfo: {
    fontSize: 13,       
    color: '#4B6584',
    marginBottom: 2,
  },
  buttonWrapper: {
    marginTop: 6,
    backgroundColor: '#0E6BA8',
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
  },
  viewDetails: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalBox: {
    backgroundColor: '#F9FAFB',
    padding: 24,
    borderRadius: 20,
    width: '100%',
    maxWidth: 400,
    elevation: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0E2F44',
    marginBottom: 12,
  },
  modalImage: {
    width: 280,
    height: 180,
    borderRadius: 16,
    marginBottom: 16,
  },
  modalLine: {
    height: 1,
    backgroundColor: '#CCD1D9',
    alignSelf: 'stretch',
    marginBottom: 16,
  },
  modalInfo: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: '#1B9C85',
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 20,
    width: '100%',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: '#dcdde1',
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 12,
    width: '100%',
  },
  secondaryButtonText: {
    color: '#2f3640',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  },
});

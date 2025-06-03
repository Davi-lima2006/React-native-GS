import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ImageBackground, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const { cpf = '', email = '', senha = '' } = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      source={require('../../../assets/image.png')}
      style={styles.background}
      imageStyle={{ opacity: 0.68 }}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3498db" />
          <Text style={[styles.backText, { color: '#3498db' }]}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.appName}>FindMyPet</Text>
          <Text style={styles.subTitle}>
            Juntos pelo <Text style={styles.subHighlight}>cuidado</Text> e <Text style={styles.subHighlight}>amor</Text> aos animais
          </Text>
        </View>

        <View style={styles.grid}>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: '#e57373' }]}
            onPress={() => navigation.navigate('Reports')}
          >
            <MaterialIcons name="report" size={42} color="#fff" />
            <Text style={styles.cardText}>Reports</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: '#7e57c2' }]}
            onPress={() => navigation.navigate('Perdidos')}
          >
            <Ionicons name="paw" size={42} color="#fff" />
            <Text style={styles.cardText}>Perdidos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: '#81c784' }]}
            onPress={() => navigation.navigate('Adocao')}
          >
            <FontAwesome5 name="hand-holding-heart" size={38} color="#fff" />
            <Text style={styles.cardText}>Adoção</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: '#64b5f6' }]}
            onPress={() => navigation.navigate('Perfil', { cpf, email, senha })}
          >
            <Ionicons name="person" size={42} color="#fff" />
            <Text style={styles.cardText}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: '#ffb74d' }]}
            onPress={() => navigation.navigate('Alert')}
          >
            <Ionicons name="alert-circle" size={42} color="#fff" />
            <Text style={styles.cardText}>Alertas</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.faleConoscoButton}
          onPress={() => setModalVisible(true)}
          activeOpacity={0.8}
        >
          <Ionicons name="help-circle-outline" size={22} color="#6C63FF" />
          <Text style={styles.faleConoscoText}>Fale Conosco</Text>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Fale Conosco</Text>
              <Text style={styles.modalMessage}>
                Se você está enfrentando algum problema, envie um email para:{'\n\n'}
                <Text style={styles.email}>suporte@findmypet.com</Text>
              </Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    marginLeft: 6,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#6C63FF',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  subTitle: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff',
    marginTop: 6,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
    fontWeight: '500',
  },
  subHighlight: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  card: {
    width: 140,
    height: 140,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Botão branco com texto e ícone roxos
  faleConoscoButton: {
    position: 'absolute',
    top: 60,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 8,
    zIndex: 20,
  },
  faleConoscoText: {
    color: '#6C63FF',
    marginLeft: 8,
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 0.3,
  },

  // Modal
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#3498db',
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
    color: '#333',
  },
  email: {
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  closeButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    paddingVertical: 10,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});

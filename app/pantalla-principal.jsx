import React, { useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function PantallaPrincipal() {
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true); 
  

  const alternarVista = () => {
    setMostrarBienvenida(!mostrarBienvenida); 
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}> 
      {/* Pantalla de bienvenida */}
      {mostrarBienvenida ? (
        
        <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f7' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text variant="displayMedium" style={{ paddingTop: 100, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}> ¡Bienvenido! </Text>
            <Text variant="titleMedium" style={{ color: '#6e6e6e', textAlign: 'center', marginBottom: 20 }}> ¡Nos alegra tenerte aquí! </Text>
            <IconButton icon="account-circle" size={160} iconColor="#2979FF" style={{ marginBottom: 30, alignSelf: 'center' }} />
            <Button
              mode="contained"
              onPress={alternarVista} 
              style={{ width: '80%', borderRadius: 25, backgroundColor: '#2979FF', paddingVertical: 5, alignSelf: 'center' }}
              labelStyle={{ fontSize: 16 }}
            >
              Ir a Home
            </Button>
          </View>
        </ScrollView>
      ) : (
        
        <View style={{ flex: 1 }}>
          {/* Título superior de la pantalla Home */}
          <Text variant="headlineLarge" style={{ padding: 20, fontWeight: 'bold', paddingTop: 60 }}>Home</Text>

          <ScrollView style={{ flex: 1, backgroundColor: 'white' }}> 
            <View style={{ padding: 20 }}>
              {/* Selector de pestañas superior (Inicio / Buscar) */}
              <View style={{ flexDirection: 'row', marginBottom: 20, alignSelf: 'flex-start' }}>
                <Button mode="contained" onPress={() => console.log('Inicio')} style={{ marginRight: 10, borderRadius: 8, backgroundColor: '#5976b0ff' }} >Inicio</Button>
                <Button mode="outlined" onPress={() => console.log('Buscar')} style={{ borderRadius: 8, borderColor: '#ccc' }} labelStyle={{ color: 'black' }}>Buscar</Button>
              </View>

              {/* Ilustración central */}
              <View style={{ alignItems: 'center', marginBottom: 30 }}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/1200x/ad/c8/ca/adc8cae4d517d9edd02091c4b134986a.jpg' }} 
                  style={{ width: 160, height: 160, borderRadius: 80, marginBottom: 20 }} 
                />
              </View>

              {/* Tarjeta de contenido 1 */}
              <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 }}>
                <Text variant="titleLarge" style={{ fontWeight: 'bold', marginBottom: 5 }}>Prueba</Text>
                <Text variant="bodyMedium" style={{ color: '#6e6e6e', marginBottom: 10 }}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa error .</Text>
                <Button mode="text" onPress={() => console.log('Ver más Card 1')} labelStyle={{ color: '#007AFF', alignSelf: 'flex-end' }}>Ver más</Button>
              </View>

              {/* Tarjeta de contenido 2 */}
              <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 }}>
                <Text variant="titleLarge" style={{ fontWeight: 'bold', marginBottom: 5 }}>Taller</Text>
                <Text variant="bodyMedium" style={{ color: '#6e6e6e', marginBottom: 10 }}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa error.</Text>
                <Button mode="text" onPress={() => console.log('Ver más Card 2')} labelStyle={{ color: '#007AFF', alignSelf: 'flex-end' }}>Ver más</Button>
              </View>

            </View>
          </ScrollView>

          {/* Barra de navegación inferior estática */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 60,
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0',
            paddingBottom: 7, 
          }}>
            <MaterialCommunityIcons name="home" size={28} color="#007AFF" />
            <MaterialCommunityIcons name="magnify" size={28} color="#6e6e6e" />
            <MaterialCommunityIcons name="bell-outline" size={28} color="#6e6e6e" />
            <MaterialCommunityIcons name="account-outline" size={28} color="#6e6e6e" />
          </View>
        </View>
      )}
    </View>
  );
}

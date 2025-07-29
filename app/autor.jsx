
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack } from 'expo-router';

export default function Autor() {
  return (
    <>
      <Stack.Screen options={{ title: "Autor" }} />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#f9f8ff' }}>

        {/* Avatar */}
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/2e/cb/9b/2ecb9bfa5df975d6c159b33edafea528.jpg' }} // Puedes cambiar esta URL por tu foto
          style={{
            width: 160,
            height: 160,
            borderRadius: 80,
            marginBottom: 20,
          }}
        />

        {/* Información */}
        <Text variant="titleLarge" style={{ marginBottom: 10, textAlign: 'center' }}>Samuel Giron Heredia.</Text>
        <Text style={{ marginBottom: 5, textAlign: 'center' }}>Cedula 1077997617</Text>
        <Text style={{ marginBottom: 5, textAlign: 'center' }}>Estudiante de Ingeniería de Sistemas</Text>
        <Text style={{ marginBottom: 5, textAlign: 'center' }}>Teléfono: 3136223388</Text>
        <Text style={{ marginBottom: 5, textAlign: 'center' }}>Correo: samuelgironheredia05@gmail.com</Text>

      </View>
    </>
  );
}

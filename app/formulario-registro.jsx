import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';


export default function FormularioRegistro() {
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  

  const handleRegistro = () => {

    console.log('Registrarse presionado');
    console.log('Nombre:', nombre);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    console.log('Confirmar Contraseña:', confirmPassword);
    
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 20 }}>
        {/* Título del formulario */}
        <Text variant="headlineLarge" style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 30, marginTop: 40 }}>Registro</Text>

        {/* Campo de Nombre */}
        <TextInput
          style={{ marginHorizontal: 0, marginBottom: 15, backgroundColor: 'white' }}
          mode="outlined"
          label="Nombre"
          value={nombre}
          onChangeText={text => setNombre(text)}
        />

        {/* Campo de Correo electrónico */}
        <TextInput
          style={{ marginHorizontal: 0, marginBottom: 15, backgroundColor: 'white' }}
          mode="outlined"
          label="Correo electrónico"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Campo de Contraseña */}
        <TextInput
          style={{ marginHorizontal: 0, marginBottom: 15, backgroundColor: 'white' }}
          mode="outlined"
          label="Contraseña"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        {/* Campo de Confirmar contraseña */}
        <TextInput
          style={{ marginHorizontal: 0, marginBottom: 30, backgroundColor: 'white' }}
          mode="outlined"
          label="Confirmar contraseña"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
        />

        {/* Botón de Registrarse */}
        <Button
          mode="contained"
          onPress={handleRegistro}
          style={{
            backgroundColor: '#4267B2', 
            borderRadius: 10, 
            paddingVertical: 8, 
            width: '100%', 
            alignSelf: 'center', 
          }}
          labelStyle={{ fontSize: 18 }}
        >
          Registrarse
        </Button>
      </View>
    </ScrollView>
  );
}

import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function Configuracion() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

        <Text variant="headlineLarge" style={{ paddingHorizontal: 60, paddingTop: 120, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>INICIAR SESION</Text>
        <TextInput label="Correo electrónico" mode="outlined" style={{ marginBottom: 10 }} />
        <TextInput label="Contraseña" mode="outlined" secureTextEntry style={{ marginBottom: 10 }} />
        <Button  onPress={() => router.push("formulario-registro")} theme={{ colors: { primary: 'red' } }} style={{ padding: 2 }}>¿Olvidaste tu contraseña?</Button >

        <Button mode="contained" onPress={() => {}} style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10, padding: 5, backgroundColor: '#1e01faff' }}>
          Iniciar sesión
        </Button>

        <Text style={{ textAlign: 'center', marginTop: 10 }}>_____________________   o   ___________________</Text>
        <Button icon="google" mode="contained" onPress={() => console.log('Pressed')} style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10, padding: 5, backgroundColor: '#50b379ff' }}>
            Iniciar sesión con Google
          </Button>

          <Button icon="apple" mode="contained" onPress={() => console.log('Pressed')} style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10, padding: 5, backgroundColor: '#303536ff' }}>
            Iniciar sesión con Apple
          </Button>
      </View>
    </ScrollView>
  );
}


            



   

import { ScrollView, View } from 'react-native'; 
import { Text, Button} from 'react-native-paper';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export default function DetalleElemento() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 20 }}>
        {/* El Botón de retroceso ha sido eliminado según tu solicitud */}

        {/* Contenedor del icono grande */}
        <View style={{
          backgroundColor: '#4267B2',
          borderRadius: 20,
          width: 180,
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 40, 
          marginBottom: 30,
        }}>
          <AntDesign name="picture" size={100} color="white" />
        </View>

        {/* Título del elemento */}
        <Text variant="displaySmall" style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>Elemento uno</Text>

        {/* Precio del elemento */}
        <Text variant="headlineMedium" style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>$29,99</Text>

        {/* Descripción del elemento */}
        <Text variant="bodyLarge" style={{ color: '#6e6e6e', textAlign: 'center', marginBottom: 40 }}>
          loasa pasd apskmaa paknsda pasknknfeal faosnf,lakjnsof aoansf lasjnof aslm error 
        </Text>

        {/* Botón de acción */}
        <Button
          mode="contained"
          onPress={() => console.log('Acción pressed')}
          style={{
            backgroundColor: '#4267B2',
            borderRadius: 10,
            paddingVertical: 8,
            width: '80%',
            alignSelf: 'center',
          }}
          labelStyle={{ fontSize: 18 }}
        >
          Acción
        </Button>
      </View>
    </ScrollView>
  );
}

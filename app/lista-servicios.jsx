
import { ScrollView, View } from 'react-native';
import { Text, List } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ListaServicios() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f7' }}>
      <View style={{ padding: 20, paddingTop: 60 }}>
        {/* Iconos superiores */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <MaterialCommunityIcons name="home-outline" size={28} color="black" />
          <MaterialCommunityIcons name="cog-outline" size={28} color="black" />
        </View>

        {/* Título de la pantalla */}
        <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 20 }}>Lista de servicios</Text>

        {/* Sección de la lista de servicios */}
        <List.Section style={{ backgroundColor: 'white', borderRadius: 10, overflow: 'hidden' }}>
          {/* Servicio de Notificación Telefonica */}
          <List.Item
            title="Servicio de Notificación Telefonica"
            description="Abrir servicios telefónicos para alertas de dispositivos para mejor la notificación en tiempo real de"
            left={props => <List.Icon {...props} icon="phone-outline" color="#8BC34A" />} 
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Notificación Telefonica')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Protección inteligente */}
          <List.Item
            title="Protección inteligente"
            description="Aplicación de alarma para el hogar, protegiendo la seguridad de tu hogar"
            left={props => <List.Icon {...props} icon="shield-outline" color="#64B5F6" />} 
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Protección inteligente')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Compras */}
          <List.Item
            title="Compras"
            description="Encuentra rápidamente productos y marcas, descubre mas produas intigentes"
            left={props => <List.Icon {...props} icon="cart-outline" color="#FFB300" />} 
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Compras')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Maestro de Iluminación */}
          <List.Item
            title="Maestro de Iluminación"
            description="Proporcione soluciones de iluminación personalizadas a basadas en IA"
            left={props => <List.Icon {...props} icon="lightbulb-outline" color="#9C27B0" />} 
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Maestro de Iluminación')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Asistente de voz de terceros */}
          <List.Item
            title="Asistente de voz de terceros"
            description="Utiliza altavoces inteligentes,"
            left={props => <List.Icon {...props} icon="home-account" color="#42A5F5" />} 
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Asistente de voz de terceros')}
          />
        </List.Section>
      </View>
    </ScrollView>
  );
}

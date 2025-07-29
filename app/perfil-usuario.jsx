
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Text, Button, Avatar, List } from 'react-native-paper'; 
import { useRouter } from 'expo-router';


export default function PerfilUsuario() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f7' }}>
      <View style={{ padding: 20, paddingTop: 60 }}>
        

        {/* Sección del perfil (avatar, nombre, email) */}
        <View style={{ alignItems: 'center', marginBottom: 30, marginTop: 20 }}>
          <Avatar.Icon size={120} icon="account" style={{ backgroundColor: '#e0e0e0', marginBottom: 10 }} />
          <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 5 }}>John Doe</Text>
          <Text variant="bodyMedium" style={{ color: '#6e6e6e' }}>johndoe@email.com</Text>
        </View>

        {/* Sección de la lista de opciones */}
        <List.Section style={{ backgroundColor: 'white', borderRadius: 10, overflow: 'hidden' }}>
          {/* Opción Editar perfil */}
          <List.Item
            title="Editar perfil"
            left={props => <List.Icon {...props} icon="file-document-edit-outline" />} 
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Editar perfil')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Opción Notificaciones */}
          <List.Item
            title="Notificaciones"
            left={props => <List.Icon {...props} icon="bell-outline" />} 
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Notificaciones')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Opción Configuración */}
          <List.Item
            title="Configuración"
            left={props => <List.Icon {...props} icon="cog-outline" />} 
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Configuración')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Opción Ayuda */}
          <List.Item
            title="Ayuda"
            left={props => <List.Icon {...props} icon="help-circle-outline" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Ayuda')}
          />
        </List.Section>

        {/* Botón de Cerrar sesión */}
        <Button
          mode="text"
          onPress={() => console.log('Cerrar sesión')}
          labelStyle={{ color: '#007AFF', fontSize: 18, fontWeight: 'bold' }}
          style={{ marginTop: 30, alignSelf: 'center' }}
        >
          Cerrar sesión
        </Button>
      </View>
    </ScrollView>
  );
}

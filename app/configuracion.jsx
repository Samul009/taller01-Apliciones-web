import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, List, Switch, Button } from 'react-native-paper'; 

export default function Configuracion() {
  
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);

  const toggleNotifications = () => setIsNotificationsEnabled(!isNotificationsEnabled);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f7' }}> 
      <View style={{ padding: 20, paddingTop: 60 }}>
        {/* Título de la pantalla */}
        <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 20 }}>Configuración</Text>

        {/* Sección de la lista de opciones */}
        <List.Section style={{ backgroundColor: 'white', borderRadius: 10, overflow: 'hidden' }}>
          {/* Opción Cuenta */}
          <List.Item
            title="Cuenta"
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Cuenta')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Opción Notificaciones con Switch */}
          <List.Item
            title="Notificaciones"
            right={() => (
              <Switch
                value={isNotificationsEnabled}
                onValueChange={toggleNotifications}
                color="#007AFF" 
              />
            )}
            onPress={toggleNotifications} 
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Opción Privacidad */}
          <List.Item
            title="Privacidad"
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Privacidad')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Opción Seguridad */}
          <List.Item
            title="Seguridad"
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Navegar a Seguridad')}
            style={{ borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}
          />

          {/* Opción Ayuda */}
          <List.Item
            title="Ayuda"
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

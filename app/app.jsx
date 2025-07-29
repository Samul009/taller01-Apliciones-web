import { View } from 'react-native';
import { ScrollView } from 'react-native';

import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

import { useState } from 'react';
import { router, Stack } from 'expo-router';
import { List } from 'react-native-paper';

export default function App() {


  return (
    <>
      <Stack.Screen options={{
        title: 'Pantallas',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f9f8ff',
        },
      }} />

      <ScrollView style={{ backgroundColor: "#f9f8ff" }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

          {/* inicio de sesión */}
          <List.Item
            style={{ backgroundColor: '#ffffffff', marginBottom: 10, borderRadius: 10 }}
            title="Inicio de sesion"
            left={props => <List.Icon {...props} icon="lock" color='#a3215bff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("inicio-sesion")}
          />

    

          {/* Pantalla principal */}
          <List.Item
            style={{ backgroundColor: '#ffffffff', marginBottom: 10, borderRadius: 10 }}
            title="Pantalla principal"
            left={props => <List.Icon {...props} icon="home" color='#5780e9ff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("pantalla-principal")}
          />

                

          {/* Lista de elementos */}
          <List.Item
            style={{ backgroundColor: '#ffffffff', marginBottom: 10, borderRadius: 10 }}
            title="Lista de elementos"
            left={props => <List.Icon {...props} icon="format-list-bulleted" color="#c49528ff" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-elementos")}
          />

          {/* Detalle de elemento */}
          <List.Item
            style={{ backgroundColor: '#ffffffff', marginBottom: 10, borderRadius: 10 }}
            title="Detalle de elemento"
            left={props => <List.Icon {...props} icon="information-outline" color='#f20404ff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("detalle-elemento")}
          />


          {/* Formulario de registro */}
          <List.Item
            style={{ backgroundColor: '#ffffffff', marginBottom: 10, borderRadius: 10 }}
            title="Formulario de registro"
            left={props => <List.Icon {...props} icon="view-list" color='#5737caff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("formulario-registro")}
          />

                  

          {/* configuración */}
          <List.Item
            style={{ backgroundColor: '#ffffffff', marginBottom: 10, borderRadius: 10 }}
            title="Configuración"
            left={props => <List.Icon {...props} icon="cog" color='#70696cff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("configuracion")}
          />

                    

          {/* perfil de usuario */}
          <List.Item
            style={{ backgroundColor: '#ffffffff', marginBottom: 10, borderRadius: 10 }}
            title="Perfil de usuario"
            left={props => <List.Icon {...props} icon="account" color='#1d01d6ff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("perfil-usuario")}
          />



          {/* lista de servicios */}
          <List.Item
            style={{ backgroundColor: '#ffffffff', marginBottom: 10, borderRadius: 10 }}
            title="Lista de servicios"
            left={props => <List.Icon {...props} icon="format-list-bulleted" color='#70696cff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-servicios")}
          />

          {/* Autor */}
          <List.Item
            style={{ backgroundColor: '#ffffffff', marginBottom: 10, borderRadius: 10 }}
            title="Autor"
            description="Información del desarrollador"
            left={props => <List.Icon {...props} icon="account-circle" color='#2979FF' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("autor")}
          />
        </View>

        
      </ScrollView>
    </>
  );

}

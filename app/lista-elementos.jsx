
import { ScrollView } from 'react-native';
import { List, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';

export default function Configuracion() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
          
          <TextInput
            style={{ margin: 13, backgroundColor: 'white' }}
            mode="outlined"
            label="Buscar elemento"
            placeholder="Buscar..."
            autoCapitalize="none"
            onChangeText={text => console.log(text)}
            left={<TextInput.Icon icon="magnify" color="#6e696b" />}
          />

          
          <List.Section>
            <List.Item title="Item 1" description="Descripción del elemento 1"
                left={props => <List.Icon {...props} icon="image" color="#c49528ff" />}
                right={() => ( 
                    <Button mode="contained" onPress={() => console.log('Acción pressed for Item 1')} style={{ borderRadius: 5, backgroundColor: '#007AFF', paddingHorizontal: 8, paddingBottom: 1 }} labelStyle={{ fontSize: 13 }}>
                    Entrar
                    </Button>
                )}
                onPress={() => router.push("lista-elementos")}
              />


              <List.Item icon="folder" title="Item 2" description="Descripción del elemento 2"
                left={props => <List.Icon {...props} icon="image" color="#c49528ff" />}
                right={() => ( 
                    <Button mode="contained" onPress={() => console.log('Acción pressed for Item 1')} style={{ borderRadius: 5, backgroundColor: '#007AFF', paddingHorizontal: 8, paddingBottom: 1 }} labelStyle={{ fontSize: 13 }}>
                    Entrar
                    </Button>
                )}
                onPress={() => router.push("lista-elementos")}
              />

              <List.Item icon="folder" title="Item 3" description="Descripción del elemento 3"
                left={props => <List.Icon {...props} icon="image" color="#c49528ff" />}
                right={() => ( 
                    <Button mode="contained" onPress={() => console.log('Acción pressed for Item 3')} style={{ borderRadius: 5, backgroundColor: '#007AFF', paddingHorizontal: 8, paddingBottom: 1 }} labelStyle={{ fontSize: 13 }}>
                    Entrar
                    </Button>
                )}
                onPress={() => router.push("lista-elementos")}
              />

              <List.Item icon="folder" title="Item 4" description="Descripción del elemento 4"
                left={props => <List.Icon {...props} icon="image" color="#c49528ff" />}
                right={() => ( 
                    <Button mode="contained" onPress={() => console.log('Acción pressed for Item 4')} style={{ borderRadius: 5, backgroundColor: '#007AFF', paddingHorizontal: 8, paddingBottom: 1 }} labelStyle={{ fontSize: 13 }}>
                    Entrar
                    </Button>
                )}
                onPress={() => router.push("lista-elementos")}
              />
                
              <List.Item icon="folder" title="Item 5" description="Descripción del elemento 5"
                left={props => <List.Icon {...props} icon="image" color="#c49528ff" />}
                right={() => ( 
                    <Button mode="contained" onPress={() => console.log('Acción pressed for Item 5')} style={{ borderRadius: 5, backgroundColor: '#007AFF', paddingHorizontal: 8, paddingBottom: 1 }} labelStyle={{ fontSize: 13 }}>
                    Entrar
                    </Button>
                )}
                onPress={() => router.push("lista-elementos")}
              /> 

        </List.Section>

      </View>
    </ScrollView>
  );
}

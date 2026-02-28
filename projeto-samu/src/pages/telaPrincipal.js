import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../../components/styles';


export default function TelaPrincipal() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState('');

  function adicionarItem() {
    if (novoItem.trim() === '') return;

    const novoObjeto = {
      id: Date.now().toString(),
      nome: novoItem,
      faltoso: false,
    };

    setLista([...lista, novoObjeto]);
    setNovoItem('');
  }

  function alterarItem(id) {
    const novaLista = lista.map((item) =>
      item.id === id ? { ...item, faltoso: !item.faltoso } : item
    );

    setLista(novaLista);
  }

  function removerItem(id) {
    const novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista);
  }

  

  return (
    <View style={styles.container}>
      <Text>Tela Principal</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => alterarItem(item.id)}>
              <Text style={item.faltoso && styles.faltoso}>{item.nome}</Text>
            </TouchableOpacity>

            <Button
              style={styles.botao}
              title="Remover"
              onPress={() => removerItem(item.id)}
            />
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        value={novoItem}
        onChangeText={setNovoItem}
        placeholder="Digite aqui o novo item"
      />

      <Button
        style={styles.botao}
        title="Inserir novo item"
        onPress={adicionarItem}
      />


    </View>
  );
}

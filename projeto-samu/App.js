import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import styles from './components/styles';
import Login from './src/pages/Login';

export default function App() {
  const [logado, setLogado] = useState(false);
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState('');
  const [itemSelecionado, setItemSelecionado] = useState(null);

  function entrar() {
    setLogado(true);
  }

  function adicionarItem() {
    if (novoItem.trim() === '') return;

    const novoObjeto = {
      id: Date.now().toString(),
      nome: novoItem,
    };

    setLista([...lista, novoObjeto]);
    setNovoItem('');
  }

  function alterarItem(id) {
    if (itemSelecionado === id) {
      setItemSelecionado(null);
    } else {
      setItemSelecionado(id);
    }
  }

  function removerItem(id) {
    const novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista);
    setItemSelecionado(null);
  }

  function removerTodos() {
    setLista([]);
    setItemSelecionado(null);
  }

  if (!logado) {
    return <Login entrar={entrar} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => alterarItem(item.id)}>
              <Text style={styles.lista}>{item.nome}</Text>
            </TouchableOpacity>

            {itemSelecionado === item.id && (
              <TouchableOpacity
                style={styles.botaoRemover}
                onPress={() => removerItem(item.id)}>
                <Text style={styles.textoBotao}>Remover?</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        value={novoItem}
        onChangeText={setNovoItem}
        placeholder="Digite aqui o novo item"
      />

      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarItem}>
        <Text style={styles.textoBotao}>Adicionar Item</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.botaoRemovertodos,
          { marginTop: 10, alignSelf: 'center' },
        ]}
        onPress={() => {
          setLista([]);
          setItemSelecionado(null);
        }}>
        <Text style={styles.textoBotaor}>Remover Todos</Text>
      </TouchableOpacity>
    </View>
  );
}

import { View, Text, TextInput, TouchableOpacity,} from 'react-native';
import { useState } from 'react';
import styles from '../../components/styles';

export default function Login({ entrar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu CPF"
      />

      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity style={styles.botaoAdicionar} onPress={entrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

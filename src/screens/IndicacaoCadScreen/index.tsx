import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Switch } from 'react-native';
import { themes } from '../../global/styles/color';
import ScreenWrapper from '../../components/screenWrapper';
import { createIndicacao } from '../../storage/indicacao/indicacaoCreate';
import { getAllIndicacao } from '../../storage/indicacao/indicacaoGetAll';

export function IndicacaoCadScreen() {
    const [name,setName] = useState('');
    const [descricao,setDescricao] = useState('');
    
   async function handleNewIndicacao() {
        const data = {
            id: String(Date.now()),
            name,
            descricao,
            idEspecialidade: '1'
        };
        console.log("Clicou em cadastrar ->",data);
        setName('');
        setDescricao('');
        await createIndicacao(data);
        const result = await getAllIndicacao();
        console.log("Resultado ao cadastrar indicação ->", result);
    }
    return(
    <ScreenWrapper>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
          Cadastro de Indicação
        </Text>

        <Text>Nome da Indicação</Text>
        <TextInput
          placeholder="Ex: Ansiedade, insônia, dor de cabeça"
          value={name}
          onChangeText={setName}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            marginBottom: 15,
          }}
        />

        <Text>Descrição</Text>
        <TextInput
          placeholder="Descreva a indicação"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            marginBottom: 20,
            minHeight: 90,
            textAlignVertical: "top",
          }}
        />

        <TouchableOpacity
          onPress={handleNewIndicacao}
          style={{
            backgroundColor: themes.colors.lightGreen,
            padding: 14,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Cadastrar Indicação
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
    )
    
}
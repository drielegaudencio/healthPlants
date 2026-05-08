import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Switch } from 'react-native';
import { styles } from './style';
import { themes } from '../../global/styles/color';
import * as ImagePicker from "expo-image-picker";

export function PlantCadScreen() {
    const [namePop,setNamePop] = useState('');
    const [nameSci,setNameSci] = useState('');
    const [tipo,setTipo] = useState('');
    const [family,setFamily] = useState('');
    const [origin,setOrigin] = useState('');
    const [serventia,setServentia] = useState('');
    const [benefits,setBenefits] = useState('');
    const [properties,setProperties] = useState('');
    const [contraindications,setContraindications] = useState('');
    const [preparation,setPreparation] = useState('');
    const [naoRecomendada,setNaoRecomendada] = useState('');
    const [image,setImage] = useState('');
    const [usoCha,setUsoCha] = useState(false);
    const [usoTintura,setUsoTintura] = useState(false);
    const [usoCápsula,setUsoCápsula] = useState(false);
    const [usoComprimido,setUsoComprimido] = useState(false);
    const [usoPomada,setUsoPomada] = useState(false);
    const [usoÓleo,setUsoÓleo] = useState(false);
    const [regiao,setRegiao] = useState('');
    const [comercializada,setComercializada] = useState('false');
    const [clima,setClima] = useState('');
    const [solo,setSolo] = useState('');
    const [estudo,setEstudo] = useState('');
    const [referencia,setReferencia] = useState('');
    const [vitaminas,setVitaminas] = useState('');
    const [minerais,setMinerais] = useState('');
    const [outros,setOutros] = useState('');
  
    function handleNewPlant() {
        const data = {
            namePop,
            nameSci,
            tipo,
            family,
            origin,
            serventia,
            benefits,
            properties,
            contraindications,
            preparation,
            naoRecomendada,
            image,
            usoCha,
            usoTintura,
            usoCápsula,
            usoComprimido,
            usoPomada,
            usoÓleo,
            regiao,
            comercializada,
            clima,
            solo,
            estudo,
            referencia,
            vitaminas,
            minerais,
            outros
        };
        console.log(data);
    }
    function TipoRadioGroup(){
        const [selected, setSelected] = useState<string | null>(null);
        const [visible, setVisible] = useState(false);
        const options = ['Planta Medicinal', 'Fruta', 'Legume'];

        return (
            <View style={styles.radioGroup2}>
                <TouchableOpacity
                        onPress={() => setVisible(!visible)}
                        style={{
                        //padding: 10,
                        //backgroundColor: "#eee",
                        borderRadius: 8,
                        }}
                    >
                        <Text>
                        {selected ? selected : "Selecionar categoria"}
                        </Text>
                    </TouchableOpacity>

                {visible && (
                    <View>
                        {options.map((item) => (
                            <TouchableOpacity key={item} onPress={() => {setSelected(item); setVisible(false);}} style={styles.radioOption}>
                                <View style={[styles.radioCircle, selected === item && styles.selectedRadio]} />
                                <Text style={styles.radioLabel}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        );
    }
    function UsoRadioGroup(){
        const [selected, setSelected] = useState<string | null>(null);
        const [visible, setVisible] = useState(false);
        const options = ['Chá', 'Tintura', 'Cápsula', 'Comprimido', 'Pomada', 'Óleo'];

        return (

            
            <View style={styles.radioGroup2}>
                <TouchableOpacity
                        onPress={() => setVisible(!visible)}
                        style={{
                        //padding: 10,
                        //backgroundColor: "#eee",
                        borderRadius: 8,
                        }}
                    >
                        <Text>
                        {selected ? selected : "Selecionar categoria"}
                        </Text>
                </TouchableOpacity>
                
                {visible && (
                    <View>
                        {options.map((item) => (
                            <TouchableOpacity key={item} onPress={() => {setSelected(item); setVisible(false);}} style={styles.radioOption}>
                                <View style={[styles.radioCircle, selected === item && styles.selectedRadio]} />
                                <Text style={styles.radioLabel}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        );
        
    }

    function UploadImagem(){
        const [image, setImage] = useState<string | null>(null);

  const selecionarImagem = async () => {
    // pedir permissão
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert("Permissão necessária!");
      return;
    }

    // abrir galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ marginBottom: 15, padding: 10, borderRadius: 5}}>
      <Button  color={themes.colors.lightGreen} title="Selecionar imagem" onPress={selecionarImagem} />

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 10 }}
        />
      )}
    </View>
  );

    }
    return (
    <ScrollView contentContainerStyle={{ paddingBottom: 120 }} style={styles.container} showsVerticalScrollIndicator={false}>
    <View >
            <Text style={styles.title}>Cadastro de Planta</Text>
        </View>
        <View>
            <View style={styles.divisor} />
                <Text style={styles.inputTEXT}>Nome Popular</Text>
                <TextInput style={styles.input} placeholder="Camomila" value={namePop} onChangeText={setNamePop} />
                <Text style={styles.inputTEXT}>Nome Científico</Text>
                <TextInput style={styles.input} placeholder="Matricaria recutita" value={nameSci} onChangeText={setNameSci} />

                <Text style={styles.inputTEXT}>Tipo</Text>
                <TipoRadioGroup />
                <Text style={styles.inputTEXT}>Família</Text>
                <TextInput style={styles.input} placeholder="Asteraceae" value={family} onChangeText={setFamily} />
                <Text style={styles.inputTEXT}>Origem</Text>
                <Text style={styles.inputTEXT}>Vitaminas</Text> 
                <TextInput style={styles.input} placeholder="Vitaminas B (B1, B2, B9) e vitaminas A, C, E e K" value={vitaminas} onChangeText={setVitaminas} />
                <Text style={styles.inputTEXT}>Minerais</Text>
                <TextInput style={styles.input} placeholder="cálcio, magnésio, potássio, zinco e ferro" value={minerais} onChangeText={setMinerais} />
                <Text style={styles.inputTEXT}>Outros</Text>
                <TextInput style={styles.input} placeholder="Outros" value={outros} onChangeText={setOutros} />
                <TextInput style={styles.input} placeholder="Europa" value={origin} onChangeText={setOrigin} />
                 <Text style={styles.inputTEXT}>Imagem</Text>
                <UploadImagem />

            <View style={styles.divisor} />
               {/*  <Text style={styles.inputTEXT}>Serventia</Text>
                <TextInput style={styles.input} placeholder="Serventia" value={serventia} onChangeText={setServentia} /> */}
                <Text style={styles.inputTEXT}>Benefícios</Text>
                <TextInput style={styles.input} placeholder="Calmante Natural" value={benefits} onChangeText={setBenefits} />
                <Text style={styles.inputTEXT}>Propriedades</Text>
                <TextInput style={styles.input} placeholder="anti-inflamatória" value={properties} onChangeText={setProperties} />
                <Text style={styles.inputTEXT}>Contraindicações</Text>
                <TextInput style={styles.input} placeholder="Pessoas com condições sensíveis a hormônios ou quando combinada com anticoagulantes ." value={contraindications} onChangeText={setContraindications} />
                <Text style={styles.inputTEXT}>Parte Utilizada</Text>
                <TextInput style={styles.input} placeholder="Flor" value={preparation} onChangeText={setPreparation} />
                <Text style={styles.inputTEXT}>Não Recomendado</Text>
                <TextInput style={styles.input} placeholder="Gestantes e Lactantes" value={naoRecomendada} onChangeText={setNaoRecomendada} />
               
                
                <Text style={styles.inputTEXT}>Uso</Text>
                <UsoRadioGroup />
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTEXT}>Comercializada</Text>
                    <Switch value={comercializada === 'true'} onValueChange={(value) => setComercializada(value ? 'true' : 'false')} />
                </View>

            <View style={styles.divisor} />
                <Text style={styles.inputTEXT}>Região</Text>
                <TextInput style={styles.input} placeholder="Região Sul do Brasil" value={regiao} onChangeText={setRegiao} />
                <Text style={styles.inputTEXT}>Clima</Text>
                <TextInput style={styles.input} placeholder="Clima Ameno" value={clima} onChangeText={setClima} />
                <Text style={styles.inputTEXT}>Solo</Text>
                <TextInput style={styles.input} placeholder="leve, bem drenado, rico em matéria orgânica e com pH neutro a levemente alcalino (entre 6,0 e 7,5)" value={solo} onChangeText={setSolo} />

                <View style={styles.divisor} />
                <Text style={styles.inputTEXT}>Estudos</Text>
                <TextInput style={styles.input} placeholder="Camomila: uma erva medicinal do passado com um futuro promissor" value={estudo} onChangeText={setEstudo} />
                <Text style={styles.inputTEXT}>URL da Referência</Text>
                <TextInput style={styles.input} placeholder="https://pmc.ncbi.nlm.nih.gov/articles/PMC2995283/" value={referencia} onChangeText={setReferencia} />
                
                <View style={styles.button}>
                <Button color={themes.colors.secondary} title="Cadastrar Planta" onPress={handleNewPlant}  />
                </View>
            </View></ScrollView>

    )
    
}
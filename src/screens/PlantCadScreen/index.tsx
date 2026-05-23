import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Switch } from 'react-native';
import { styles } from './style';
import { themes } from '../../global/styles/color';
import * as ImagePicker from "expo-image-picker";
import { Paths, copyAsync } from "expo-file-system";
import * as FileSystem from "expo-file-system/legacy";
import ScreenWrapper from '../../components/screenWrapper';
import { createPlant } from '../../storage/plant/plantCreate';
import { getAllPlants } from '../../storage/plant/plantGetAll';
import { convertBool } from '../../components/utils/convertBool';

export function PlantCadScreen() {
    const [namePop,setNamePop] = useState('');
    const [nameSci,setNameSci] = useState('');
    const [about,setAbout] = useState('');
    const [tipo,setTipo] = useState('');
    const [family,setFamily] = useState('');
    const [origin,setOrigin] = useState('');
    const [idIndicacao,setIdIndicacao] = useState('');
    const [benefits,setBenefits] = useState('');
    const [properties,setProperties] = useState('');
    const [contraindications,setContraindications] = useState('');
    const [part,setPart] = useState('');
    const [naoRecomendada,setNaoRecomendada] = useState('');
    const [image,setImage] = useState<string | null>(null);
    const [formaUso, setFormaUso] = useState<string[]>([]);
    const [regiao,setRegiao] = useState('');
    const [comercializada,setComercializada] = useState('false');
    const [clima,setClima] = useState('');
    const [solo,setSolo] = useState('');
    const [estudo,setEstudo] = useState('');
    const [referencia,setReferencia] = useState('');
    const [vitaminas,setVitaminas] = useState('');
    const [minerais,setMinerais] = useState('');
    const [outros,setOutros] = useState('');
    const [favorite, setFavorite] = useState('');
  
   async function handleNewPlant() {
        const data = {
            id: String(Date.now()),
            namePop,
            nameSci,
            about,
            tipo,
            family,
            origin,
            idIndicacao: idIndicacao.split(',').map(item => item.trim()), // Convertendo string para array
            benefits: benefits.split(',').map(item => item.trim()), // Convertendo string para array
            properties: properties.split(',').map(item => item.trim()), // Convertendo string para array
            contraindications: contraindications.split(',').map(item => item.trim()), // Convertendo string para array
            part: part.split(',').map(item => item.trim()), // Convertendo string para array
            naoRecomendada: naoRecomendada.split(',').map(item => item.trim()), // Convertendo string para array
            image,
            /* usoCha,
            usoTintura,
            usoCápsula,
            usoComprimido,
            usoPomada,
            usoÓleo, */
            formaUso,
            regiao: regiao.split(',').map(item => item.trim()), // Convertendo string para array
            comercializada: convertBool(comercializada),
            clima,
            solo,
            estudo,
            referencia,
            vitaminas: vitaminas.split(',').map(item => item.trim()), // Convertendo string para array  
            minerais: minerais.split(',').map(item => item.trim()), // Convertendo string para array
            outros: outros.split(',').map(item => item.trim()), // Convertendo string para array
            favorite: convertBool(favorite),
        };
        console.log("Clicou em cadastrar ->",data);
        setNamePop('');
        setNameSci('');
        setTipo('');
        setAbout('');
        setFamily('');
        setOrigin('');
        setIdIndicacao('');
        setBenefits('');
        setProperties('');
        setContraindications('');
        setPart('');
        setNaoRecomendada('');
        setImage(null);
        setFormaUso([]);
        setRegiao('');
        setComercializada('false');
        setClima('');
        setSolo('');
        setEstudo('');
        setReferencia('');
        setVitaminas('');
        setMinerais('');
        setOutros('');
        await createPlant(data);
        const result = await getAllPlants();
        console.log("Resultado ao cadastrar planta ->", result);
    }
    function TipoRadioGroup() {
        const [visible, setVisible] = useState(false);

        const options = ["Planta Medicinal", "Fruta", "Legume"];

        return (
            <View style={styles.radioGroup2}>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
                <Text>{tipo ? tipo : "Selecionar categoria"}</Text>
            </TouchableOpacity>

            {visible && (
                <View>
                {options.map((item) => (
                    <TouchableOpacity
                    key={item}
                    onPress={() => {
                        setTipo(item);
                        setVisible(false);
                    }}
                    style={styles.radioOption}
                    >
                    <View
                        style={[
                        styles.radioCircle,
                        tipo === item && styles.selectedRadio,
                        ]}
                    />

                    <Text style={styles.radioLabel}>{item}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            )}
            </View>
        );
    }

    function UsoSelect() {
        const [visible, setVisible] = useState(false);

        const options = ["Chá", "Tintura", "Cápsula", "Comprimido", "Pomada", "Óleo"];

        function toggleOption(item: string) {
        if (formaUso.includes(item)) {
            setFormaUso(formaUso.filter((value) => value !== item));
        } else {
            setFormaUso([...formaUso, item]);
        }
        }

        return (
            <View style={styles.radioGroup2}>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
                <Text>
                {formaUso.length > 0
                    ? formaUso.join(", ")
                    : "Selecionar forma de uso"}
                </Text>
            </TouchableOpacity>

            {visible && (
                <View>
                {options.map((item) => {
                    const isSelected = formaUso.includes(item);

                    return (
                    <TouchableOpacity
                        key={item}
                        onPress={() => toggleOption(item)}
                        style={styles.radioOption}
                    >
                        <View
                        style={[
                            styles.checkbox,
                            isSelected && styles.selectedCheckbox,
                        ]}
                        >
                        {isSelected && <Text style={{ color: "#fff" }}>✓</Text>}
                        </View>

                        <Text style={styles.radioLabel}>{item}</Text>
                    </TouchableOpacity>
                    );
                })}
                </View>
            )}
            </View>
        );
    }


    async function selecionarImagem() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;

            const nomeArquivo = `plant_${Date.now()}.jpg`;
            const novoCaminho = `${Paths.document.uri}${nomeArquivo}`;

            await FileSystem.copyAsync({
                from: uri,
                to: novoCaminho,
            });

            setImage(novoCaminho);
        }
    }
    return (
    <ScreenWrapper>
    <ScrollView contentContainerStyle={{ paddingBottom: 120 }} style={styles.container} showsVerticalScrollIndicator={false}>
    <View >
            <Text style={styles.title}>Cadastro de Planta</Text>
        </View>
        <View>
            <View style={styles.divisor} />
                <Text style={styles.inputTEXT}>Nome Popular</Text>
                <TextInput style={styles.input} placeholder="Camomila" value={namePop} onChangeText={value => setNamePop(value)} />
                <Text style={styles.inputTEXT}>Nome Científico</Text>
                <TextInput style={styles.input} placeholder="Matricaria recutita" value={nameSci} onChangeText={value => setNameSci(value)} />
                <Text style={styles.inputTEXT}>Sobre</Text>
                <TextInput style={styles.input} placeholder="A camomila é uma planta medicinal amplamente utilizada por suas propriedades calmantes e anti-inflamatórias. Originária da Europa e da Ásia, a camomila é conhecida por suas flores pequenas e delicadas, que são colhidas para fazer chás, tinturas e outros produtos fitoterápicos. A camomila é frequentemente usada para aliviar a ansiedade, promover o sono e tratar problemas digestivos, além de ser valorizada por suas propriedades antioxidantes e anti-inflamatórias." value={about} onChangeText={value => setAbout(value)} multiline />
                <Text style={styles.inputTEXT}>Tipo</Text>
                <TipoRadioGroup />
                <Text style={styles.inputTEXT}>Família</Text>
                <TextInput style={styles.input} placeholder="Asteraceae" value={family} onChangeText={value => setFamily(value)} />
                <Text style={styles.inputTEXT}>Origem</Text>
                <TextInput style={styles.input} placeholder="Europa" value={origin} onChangeText={value => setOrigin(value)} />
                <Text style={styles.inputTEXT}>Vitaminas</Text> 
                <TextInput style={styles.input} placeholder="Vitaminas B (B1, B2, B9) e vitaminas A, C, E e K" value={vitaminas} onChangeText={value => setVitaminas(value)} />
                <Text style={styles.inputTEXT}>Minerais</Text>
                <TextInput style={styles.input} placeholder="cálcio, magnésio, potássio, zinco e ferro" value={minerais} onChangeText={value => setMinerais(value)} />
                <Text style={styles.inputTEXT}>Outros</Text>
                <TextInput style={styles.input} placeholder="Outros" value={outros} onChangeText={value => setOutros(value)} />
                
                <Text style={styles.inputTEXT}>Imagem</Text>

                <View style={{ marginBottom: 15, padding: 10, borderRadius: 5, backgroundColor: themes.colors.primary }}>
                <Button
                    
                    color={themes.colors.lightGreen}
                    title="Selecionar imagem"
                    onPress={selecionarImagem}
                />

                {image && (
                    <Image
                    source={{ uri: image }}
                    style={{ width: 120, height: 120, borderRadius: 12, marginTop: 10 }}
                    />
                )}
                </View>

            <View style={styles.divisor} />
               
               <Text style={styles.inputTEXT}>Indicação</Text>
                <TextInput style={styles.input} placeholder="Alergia, Epilepsia" value={idIndicacao} onChangeText={value => setIdIndicacao(value)} />
                
                
                <Text style={styles.inputTEXT}>Benefícios</Text>
                <TextInput style={styles.input} placeholder="Calmante Natural" value={benefits} onChangeText={value => setBenefits(value)} />
                <Text style={styles.inputTEXT}>Propriedades</Text>
                <TextInput style={styles.input} placeholder="anti-inflamatória" value={properties} onChangeText={value => setProperties(value)} />
                <Text style={styles.inputTEXT}>Contraindicações</Text>
                <TextInput style={styles.input} placeholder="Pessoas com condições sensíveis a hormônios ou quando combinada com anticoagulantes ." value={contraindications} onChangeText={value => setContraindications(value)} />
                <Text style={styles.inputTEXT}>Parte Utilizada</Text>
                <TextInput style={styles.input} placeholder="Flor" value={part} onChangeText={value => setPart(value)} />
                <Text style={styles.inputTEXT}>Não Recomendado</Text>
                <TextInput style={styles.input} placeholder="Gestantes e Lactantes" value={naoRecomendada} onChangeText={value => setNaoRecomendada(value)} />
               
                
                <Text style={styles.inputTEXT}>Uso</Text>
                <UsoSelect />
                
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTEXT}>Comercializada</Text>
                    <Switch value={comercializada === 'true'} onValueChange={(value) => setComercializada(value ? 'true' : 'false')} />
                </View>

            <View style={styles.divisor} />
                <Text style={styles.inputTEXT}>Região</Text>
                <TextInput style={styles.input} placeholder="Região Sul do Brasil" value={regiao} onChangeText={value => setRegiao(value)} />
                <Text style={styles.inputTEXT}>Clima</Text>
                <TextInput style={styles.input} placeholder="Clima Ameno" value={clima} onChangeText={value => setClima(value)} />
                <Text style={styles.inputTEXT}>Solo</Text>
                <TextInput style={styles.input} placeholder="leve, bem drenado, rico em matéria orgânica e com pH neutro a levemente alcalino (entre 6,0 e 7,5)" value={solo} onChangeText={value => setSolo(value)} />

                <View style={styles.divisor} />
                <Text style={styles.inputTEXT}>Estudos</Text>
                <TextInput style={styles.input} placeholder="Camomila: uma erva medicinal do passado com um futuro promissor" value={estudo} onChangeText={value => setEstudo(value)} />
                <Text style={styles.inputTEXT}>URL da Referência</Text>
                <TextInput style={styles.input} placeholder="https://pmc.ncbi.nlm.nih.gov/articles/PMC2995283/" value={referencia} onChangeText={value => setReferencia(value)} />
                
                <View style={styles.button}>
                    <TouchableOpacity onPress={handleNewPlant} style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View></ScrollView>
    </ScreenWrapper>

    )
    
}
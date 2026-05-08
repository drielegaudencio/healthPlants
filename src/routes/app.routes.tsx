import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {HomeScreen} from "../screens/HomeScreen";
import { PlantsListScreen} from "../screens/PlantsListScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { PlantScannerScreen } from "../screens/PlantScannerScreen";
import { PlantCadScreen } from "../screens/PlantCadScreen";
import { ProfessionalsScreen } from "../screens/ProfessionalsScreen";   
import { NewsScreen } from "../screens/NewsScreen";
import { BlurView } from 'expo-blur';
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



type AppRoutes = {
    Home: undefined;
    Catálogo: undefined;
    Notícias: undefined;
    Pesquisar: undefined;
    Reconhecer: undefined;
    Médicos: undefined;
    "Cadastro Plantas": undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cadastro Plantas" component={PlantCadScreen} />
    </Tab.Navigator>
  );
}
export function AppRoutes() {
    
    return (
       
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#1F3D2B',
            tabBarInactiveTintColor: '#4F7A5A',
            tabBarActiveBackgroundColor: '#bee7b5',
            tabBarItemStyle: {
                borderRadius: 20,
                margin: 5,
                overflow: 'hidden'
            },
            /*ESTE REMOVE O CABEÇALHO PADRÃO*/
            tabBarStyle: {
                height: 130,
                position: 'absolute',
                borderRadius: 30,
                overflow: 'hidden',
            },
            /*tabBarShowLabel: false, ESTE REMOVE O TEXTO DE BAIXO DOS ICONES DO MENU
            tabBarActiveTintColor: '#1F3D2B'  ESTE DEFINE A COR DO ICONE QUANDO O MESMO ESTÁ ATIVO, NA TELA INDICADA
            tabBarInactiveTintColor: '#4F7A5A' ESTE DEFINE A COR DO ICONE QUANDO O MESMO ESTÁ INATIVO, OU SEJA, NÃO ESTÁ NA TEL INDICADA*/ 
        }}>
                <Screen
                    name="Home"
                    component={HomeScreen}

                    options={{
                        tabBarIcon: (({ size, color }) => <MaterialIcons
                            name="home"
                            size={size}
                            color={color} />
                        ),
                    }} />
                <Screen
                    name="Cadastro Plantas"
                    component={PlantCadScreen}
                    options={{
                        tabBarIcon: (({ size, color }) => <MaterialIcons
                            name="add-circle"
                            size={size}
                            color={color} />
                        ),
                    }} />
                <Screen
                    name="Pesquisar"
                    component={SearchScreen}
                    options={{
                        tabBarIcon: (({ size, color }) => <MaterialIcons
                            name="search"
                            size={size}
                            color={color} />
                        ),
                    }} />

                <Screen
                    name="Catálogo"
                    component={PlantsListScreen}
                    options={{
                        tabBarIcon: (({ size, color }) => <MaterialCommunityIcons
                            name="book-open-variant"
                            size={size}
                            color={color} />
                        ),
                    }} />


                <Screen
                    name="Reconhecer"
                    component={PlantScannerScreen}
                    options={{
                        tabBarIcon: (({ size, color }) => <MaterialIcons
                            name="camera-alt"
                            size={size}
                            color={color} />
                        ),
                    }} />
                <Screen
                    name="Médicos"
                    component={ProfessionalsScreen}
                    options={{
                        tabBarIcon: (({ size, color }) => <FontAwesome
                            name="stethoscope"
                            size={size}
                            color={color} />
                        ),
                    }} />

            </Navigator>
    )
}
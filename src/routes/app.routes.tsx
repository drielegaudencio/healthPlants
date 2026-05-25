import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { PlantScannerScreen } from "../screens/PlantScannerScreen";
import { PlantCadScreen } from "../screens/PlantCadScreen";
import { ProfessionalsScreen } from "../screens/ProfessionalsScreen";
import  { CatalogScreen } from "../screens/PlantsListScreen";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { IndicacaoCadScreen } from "../screens/IndicacaoCadScreen";
import PlantDetailsScreen from "../screens/PlantDetailsScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { UserStorageDTO } from "../storage/user/UserStorageDTO";
import { ProfessionalRegisterScreen } from "../screens/ProfessionalRegisterScreen";
import { DiseaseDetailsScreen } from "../screens/DiseaseDetailsScreen";
import { FavoritesScreen } from "../screens/FavoritScreen";
import { useAuth } from "../context/AuthContext";
import { PrivacyPolicyScreen } from "../screens/politicaPrivacidade";
import { TermsScreen } from "../screens/TermoUso/indesx";
import { RecipesScreen } from "../screens/ReceitaListScreen";
import { ProfileScreen } from "../screens/perfilScreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const data = {} as UserStorageDTO;

function BottomTabs({ route }: any) {
    const { user } = useAuth();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1F3D2B",
        tabBarInactiveTintColor: "#4F7A5A",
        tabBarActiveBackgroundColor: "#bee7b5",
        tabBarItemStyle: {
          borderRadius: 20,
          margin: 5,
          overflow: "hidden",
        },
        tabBarStyle: {
          height: 130,
          position: "absolute",
          borderRadius: 30,
          overflow: "hidden",
        },
      }}
    > 
      
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen
        name="Pesquisar"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Catálogo"
        component={CatalogScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Reconhecer"
        component={PlantScannerScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="camera-alt" size={size} color={color} />
          ),
        }}
      />
    {user && (
        <Tab.Screen
        name="Médicos"
        component={ProfessionalsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="stethoscope" size={size} color={color} />
          ),
        }}
      />
    )}
      {/* 
      <Tab.Screen
        name="PlantDetails"
        component={PlantDetailsScreen} 
        options={{tabBarButton: () => null,
          tabBarItemStyle: { display: "none",
    },}}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen} 
        options={{tabBarButton: () => null,
          tabBarItemStyle: { display: "none",
    },}}
      />
      <Tab.Screen
        name="DetailIndic"
        component={DiseaseDetailsScreen} 
        options={{tabBarButton: () => null,
          tabBarItemStyle: { display: "none",
    },}}
      /> */}
     
    </Tab.Navigator>
  );
}

export function AppRoutes() {
  return (
    
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserCad" component={RegisterScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Receitas" component={RecipesScreen} />

        <Stack.Screen name="Tabs" component={BottomTabs} />
        
        {/* Telas que NÃO aparecem no menu inferior */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Cadastro Plantas" component={PlantCadScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro Indicações" component={IndicacaoCadScreen} />
        <Stack.Screen name="Favorite" component={FavoritesScreen} />
        
        <Stack.Screen name="PlantDetails" component={PlantDetailsScreen} />
       {/*  <Stack.Screen name="Buscar Profissional" component={ProfessionalsScreen} /> */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfessionalRegisterScreen" component={ProfessionalRegisterScreen} 
        options={{ headerShown: false, }}/>
        {/* <Stack.Screen name="Pesquisar" component={SearchScreen} /> */}
        <Stack.Screen name="DetailIndic" component={DiseaseDetailsScreen} />
        {/* <Stack.Screen name="Reconhecer" component={PlantScannerScreen} /> */}
         <Stack.Screen
            name="PrivacyPolicy" component={PrivacyPolicyScreen}
          />
          <Stack.Screen
            name="Terms"
            component={TermsScreen}
/>
      
      </Stack.Navigator>
      
  );
}
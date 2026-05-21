import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { PlantScannerScreen } from "../screens/PlantScannerScreen";
import { PlantCadScreen } from "../screens/PlantCadScreen";
import { ProfessionalsScreen } from "../screens/ProfessionalsScreen";
import PlantsListScreen from "../screens/PlantsListScreen";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { IndicacaoCadScreen } from "../screens/IndicacaoCadScreen";
import PlantDetailsScreen from "../screens/PlantDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
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
        component={PlantsListScreen}
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

      <Tab.Screen
        name="Médicos"
        component={ProfessionalsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="stethoscope" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PlantDetails"
        component={PlantDetailsScreen} 
        options={{tabBarButton: () => null,
          tabBarItemStyle: { display: "none",
    },
  }} 
      />
    </Tab.Navigator>
  );
}

export function AppRoutes() {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={BottomTabs} />
        
        {/* Telas que NÃO aparecem no menu inferior */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro Plantas" component={PlantCadScreen} />
        <Stack.Screen name="Cadastro Indicações" component={IndicacaoCadScreen} />
        <Stack.Screen name="PlantDetails" component={PlantDetailsScreen} />
        <Stack.Screen name="ProfessionalsScreen" component={ProfessionalsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        
      </Stack.Navigator>
      
  );
}
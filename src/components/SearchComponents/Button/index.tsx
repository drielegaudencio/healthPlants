import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

export function SearchButton() {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    );
}
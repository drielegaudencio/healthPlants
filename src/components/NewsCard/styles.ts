import {StyleSheet} from "react-native";
import {themes} from "../../global/styles/color";

export const styles = StyleSheet.create({
  card: {
    //marginBottom: 5,
    width: 300,
    marginRight: 10,
    marginLeft: 10,
    //elevation: 3,
    },
    cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: themes.colors.primary,
    },
    cardDescription: {
    color: themes.colors.textLight,     
    marginTop: 5,
    },
    cardDate: {
    color: themes.colors.textLight,
    fontSize: 12,
    marginTop: 5,
    },
    cardUrl: {
    color: themes.colors.primary,
    fontSize: 14,
    marginTop: 10,
    },
    image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    },
}); 
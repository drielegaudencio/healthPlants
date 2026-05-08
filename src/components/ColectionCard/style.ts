import {StyleSheet} from "react-native";
import {themes} from "../../global/styles/color";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: themes.colors.card,    
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 4,
  },
  cardTitle: {  
    fontWeight: "bold",
    fontSize: 16,
  },    
    cardText: {
    color: themes.colors.textLight,
    //marginBottom: 5,
  },   
    image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  cardPrescription: {
    marginTop: 10,
    color: themes.colors.textLight,
    fontStyle: "italic",
  },
});
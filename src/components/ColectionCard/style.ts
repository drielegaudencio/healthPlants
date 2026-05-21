import {StyleSheet} from "react-native";
import {themes} from "../../global/styles/color";


export const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
  cardTitle: {  
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Roboto",
  },    
    cardText: {
    color: themes.colors.textLight,
    //marginBottom: 5,
  },   
  cardPrescription: {
    marginTop: 10,
    color: themes.colors.textLight,
    fontStyle: "italic",
  },
  card: {
    backgroundColor: "#FAFCF7",
    borderRadius: 24,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 20,
    
  },
  image: {
    width: 115,
    height: 115,
    borderRadius: 16,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  plantName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#23482D",
  },
  label: {
    marginTop: 8,
    fontSize: 15,
    color: "#333",
  },
  description: {
    marginTop: 4,
    fontSize: 15,
    color: "#333",
  },
  leafRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  decorativeLine: {
    color: "#A8B79E",
    marginLeft: 6,
    fontSize: 18,
  },
  heartButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
    list: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  card2: {
    backgroundColor: "#FAFCF7",
    borderRadius: 24,
    padding: 14,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },
  imagem: {
    width: 115,
    height: 115,
    borderRadius: 16,
    marginRight: 16,
  },
/*   cardContent: {
    flex: 1,
  },

  plantName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#23482D",
  },
  label: {
    marginTop: 8,
    fontSize: 15,
    color: "#333",
  },
  description: {
    marginTop: 4,
    fontSize: 15,
    color: "#333",
  },
  leafRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  decorativeLine: {
    color: "#A8B79E",
    marginLeft: 6,
    fontSize: 18,
  },
  heartButton: {
    position: "absolute",
    top: 18,
    right: 18,
  }, */
});
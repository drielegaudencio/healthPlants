import { StyleSheet } from "react-native";
import { themes } from "../../global/styles/color";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: themes.colors.primary,
    marginTop: 10,
    fontFamily: themes.fonts.titulo
  },
  subtitle: {
    color: themes.colors.textLight,
    marginBottom: 15,
  },
  card: {
    backgroundColor: themes.colors.card,
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 4,
  },
  cardNews: {
    backgroundColor: themes.colors.background,
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
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
  button: {
    backgroundColor: themes.colors.secondary,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
  },
  section: {
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
    fontSize: 18,
    
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    //paddingHorizontal: 10,
    width: "50%",
    //backgroundColor: themes.colors.lightGreen,
    
  },
  actionCard: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    width: "100%",
    elevation: 4,
    marginRight: 5,
    alignContent: "flex-end",
    gap: 10,
  },
   textContainer: {
    flexDirection: "column",
    flex: 1,
  },

  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: themes.colors.primary,
  },

  description: {
    fontSize: 12,
    color: themes.colors.textLight,
    marginTop: 3,
  },
  actionIcon: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: themes.colors.lightGreen,
    borderRadius: 50,
    alignSelf: "flex-start",
    
    
  },
  newsItem: {
    marginBottom: 15,
  },
  newsTitle: {
    fontWeight: "bold",
  },
  newsDescription: {
    color: themes.colors.textLight,
  },

});
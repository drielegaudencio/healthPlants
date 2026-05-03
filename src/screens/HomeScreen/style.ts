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
  },
  subtitle: {
    color: themes.colors.textLight,
    marginBottom: 15,
  },
  card: {
    backgroundColor: themes.colors.card,
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 4,
  },
  cardNews: {
    backgroundColor: themes.colors.lightGreen,
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
    marginBottom: 10,
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
    marginBottom: 10,
    
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    //paddingHorizontal: 10,
    width: "50%",
    
  },
  actionCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    elevation: 4,
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
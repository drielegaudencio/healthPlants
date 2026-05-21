import { StyleSheet } from "react-native";
import { themes } from "../../global/styles/color";
export const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop:20,
  },
  topBar: {
    marginTop: 20,
    //paddingHorizontal: 16,
    flexDirection: "row",
    //alignItems: "center",
    //justifyContent: "space-between",
    
  },
  back:{
    //position: "absolute",
    left: -11,
    zIndex: 10,

  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#23482D",
  },
  heroImage: {
    width: "100%",
    height: 300,
    borderRadius: 30,
    elevation: 5,
  },
  
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#23482D",
    
  },
  scientificName: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#4D674D",
    marginTop: 4,
  },
  categoryBadge: {
    marginTop: 14,
    backgroundColor: "#DCEAD4",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
    gap: 6,
  },
  categoryText: {
    color: "#31583A",
    fontSize: 14,
  },
  sectionTitle: {
    marginTop: 26,
    fontSize: 21,
    fontWeight: "bold",
    color: "#23482D",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: themes.colors.primary,
    marginTop: 24,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    //gap: 12,
    //justifyContent: "space-between",

  },
  infoIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#DDEBD4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    elevation: 3,
  },
  infoTextArea: {
    flex: 1,
    padding: 5,
    backgroundColor: themes.colors.primary,
    borderRadius: 10,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: themes.colors.lightGreen,
  },
  infoText: {
    fontSize: 14,
    color: themes.colors.background,
    textAlign: "justify",
  },
}) ;
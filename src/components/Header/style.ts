import { StyleSheet } from "react-native";
import {themes} from "../../global/styles/color";
export const styles = StyleSheet.create({
  container: {
    //backgroundColor: theme.colors.secondary,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    color: themes.colors.secondary,
    fontSize: 18,
    fontWeight: "bold",
  },
  iconMenu: {
    backgroundColor: themes.colors.lightGreen,
    padding: 8,
    borderRadius: 50,
  },
  iconPerson: {
    backgroundColor: themes.colors.secondary,
    padding: 8,
    borderRadius: 50,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 35,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    width: 160,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});
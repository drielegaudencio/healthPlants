import { StyleSheet } from "react-native";
import {themes} from "../../global/styles/color";
export const styles = StyleSheet.create({
  container: {
    //backgroundColor: theme.colors.secondary,
    padding: 30,
   // height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    position: "relative",
    zIndex: 999,
  elevation: 10,
  },
  title: {
    color: themes.colors.secondary,
    fontSize: 29,
    fontWeight: "bold",
    fontFamily: "roboto-regular",
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
    top: 100,
    right: 0,
    backgroundColor: themes.colors.secondary,
    borderRadius: 5,
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
    color: '#ffffff',
  },
});
import { StyleSheet } from "react-native";
import { themes } from "../../global/styles/color";
export const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 120,
    left: 1,
    width: 200,
    backgroundColor: themes.colors.background,
    borderRadius: 12,
    paddingVertical: 8,
    zIndex: 9999,
    elevation: 20,
  },
  item: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 15,
    color: themes.colors.text,
  },
});
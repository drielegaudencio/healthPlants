import { StyleSheet } from "react-native/"
import { themes } from "../../global/styles/color"


export const styles = StyleSheet.create({
      label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
        color: "#23482D",
      },
    
      input: {
        borderWidth: 1,
        borderColor: "#D8E3D2",
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 14,
        marginBottom: 16,
        fontSize: 15,
        textAlignVertical: "top",
      },
    
      button: {
        backgroundColor: themes.colors.secondary,
        padding: 16,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 10,
      },
    
      buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
      },
})
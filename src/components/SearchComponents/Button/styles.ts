import { StyleSheet } from "react-native/";
export const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#4E7A52",
        paddingVertical: 12,
        paddingHorizontal: 24,  
        borderRadius: 8,
    },
    buttonText: {
        color: "#FAFCF7",
        fontSize: 16,
        fontWeight: "bold",
    },
    disabledButton: {
        backgroundColor: "#A9A9A9",
    },
    disabledButtonText: {
        color: "#FAFCF7",
    },
});
import {StyleSheet} from 'react-native';
import { themes } from "../../global/styles/color";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: themes.colors.background,
        marginBottom: 40,
        height: '50%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 20,
        color: themes.colors.primary,
    },
    input: {
        borderWidth: 1,
        borderColor: themes.colors.secondary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    inputTEXT: {
        color: themes.colors.textLight,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    switchContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: 15 
    },
    button: {
        backgroundColor: themes.colors.secondary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: themes.colors.lightGreen,
        fontWeight: 'bold',
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,   
        borderWidth: 1,
        borderColor: themes.colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        //marginRight: 10,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        color: themes.colors.textLight,
        fontWeight: 'bold',
    },
    radioCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: themes.colors.lightGreen,
    },
    selectedRadio: {
        backgroundColor: themes.colors.secondary,
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
        padding: 20,
        borderWidth: 1,
        borderColor: themes.colors.secondary,
        borderRadius: 5,
    },
    radioGroup2: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 15,
        padding: 10,
        width: '50%',
        borderWidth: 1,
        borderColor: themes.colors.secondary,
        borderRadius: 5,
    },
    divisor: {
        height: 1,
        backgroundColor: themes.colors.primary,
        marginVertical: 15,
        textDecorationLine: 'underline line-through',
    },
});
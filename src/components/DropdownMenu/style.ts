import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
        justifyContent: 'center',
        alignItems: 'center',
    },  
    menu: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
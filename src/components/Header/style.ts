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
  wrapper: {
    position: "relative",
    zIndex: 9999,
    elevation: 20,
  },
  logo: {
    color: themes.colors.secondary,
    fontSize: 29,
    fontWeight: "bold",
    fontFamily: themes.fonts.logo,
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
  logoContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#1F3D2B",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: themes.colors.primary,
  },

  logoHighlight: {
    color: "#4F7A5A",
  },
  menuText: {
    fontSize: 16,
    color: themes.colors.text,
  },
   modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
        justifyContent: 'center',
        alignItems: 'center',
    },  
    menu: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 3,
        marginLeft: -25,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
   triggerStyle : { 
    height : 40 , 
    backgroundColor : themes.colors.primary , 
    flexDirection : 'row' , 
    justifyContent : 'space-between' , 
    alignItems : 'center' , 
    width : 100 , 
    paddingHorizontal : 20 , 
    paddingVertical : 10 , 
    borderRadius : 5 , 
  }, 
  triggerText :{ 
    fontSize : 16 ,
  } 
});
import {StyleSheet} from "react-native";
import {themes} from "../../global/styles/color";
export const styles = StyleSheet.create({
   container: {
    flex: 1,
    //backgroundColor: "#EEF6E9",
    
  },
  categoryButton: {
    backgroundColor: "#DCEAD4",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  categorySelected: {
    backgroundColor: "#406B45",
  },
  categoryBox: {
  backgroundColor: "#F7FAF5",
    marginTop: -19,
    marginRight: -5,
  borderRadius: 15,

  paddingHorizontal: 15,

  borderWidth: 1,
  borderColor: "#DDE8D7",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.08,
  shadowRadius: 5,

  elevation: 4,
},

categoryItem: {
  paddingVertical: 12,
  paddingHorizontal: 14,

  borderRadius: 12,

  marginBottom: 8,
},
  /* header: {
    //paddingHorizontal: 24,
    backgroundColor: themes.colors.background,
    flexDirection: "column",
    //justifyContent: "center",
    zIndex: 1,
    //textAlign: "center",
    width: "200%",
    //marginLeft: 0,
    borderBottomEndRadius: 24,
    borderBottomLeftRadius: 24,
    position: "absolute",
    marginTop: -30,
    //marginBottom: 80,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: themes.fonts.logo,
    fontStyle: "italic",
    color: "#23482D",
  },
  card: {
    //marginBottom: 18,
    flexDirection: "row",
    textAlign: "center",
    left: 25,
  },
   filters: {
    flexDirection: "row",
    //justifyContent: "space-between",
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#DCEAD4",
    flexDirection: "row",
    //marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 6,
  },
  filterText: {
    color: "#2F5136",
    fontSize: 14,
  }, */

  header: {
    //marginTop: 20,
    backgroundColor: themes.colors.background,
    marginBottom: 20,
    width: "200%",
    paddingHorizontal: 20,
    left: -20,
    right: 0,
  },

  card: {
    //backgroundColor: "#E6F0DF",
    borderRadius: 22,
    //paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    left: 40,
    //justifyContent: "center",
    //gap: 10,
    //shadowColor: "#000",
    /* shadowOffset: {
      width: 0,
      height: 3,
    }, */
    //shadowOpacity: 0.08,
    //shadowRadius: 6,
    //elevation: 4,
  },

  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#31583A",
    letterSpacing: 0.5,
  },

  filters: {
    flexDirection: "row",
    //justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 5,
    gap: 12,
  },

  filterButton1: {
    //flex: 1,
    left: -6,
    backgroundColor: "#F4F8F1",

    borderWidth: 1,
    borderColor: "#D5E3CF",

    borderRadius: 16,

    paddingVertical: 10,
    paddingHorizontal: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,

    elevation: 2,
  },
  filterButton2: {
    //flex: 1,

    backgroundColor: "#F4F8F1",
    right: -205,
    borderWidth: 1,
    borderColor: "#D5E3CF",

    borderRadius: 16,

    paddingVertical: 10,
    paddingHorizontal: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,

    elevation: 2,
  },

  filterText: {
    color: "#406B45",
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
    marginLeft: 10,
  },

  profileButton: {
    position: "absolute",
    right: 24,
    backgroundColor: "#DDEBD4",
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#23482D",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 24,
  },
 
  list: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  
  image: {
    width: 115,
    height: 115,
    borderRadius: 16,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  plantName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#23482D",
  },
  label: {
    marginTop: 8,
    fontSize: 15,
    color: "#333",
  },
  description: {
    marginTop: 4,
    fontSize: 15,
    color: "#333",
  },
  leafRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  decorativeLine: {
    color: "#A8B79E",
    marginLeft: 6,
    fontSize: 18,
  },
  heartButton: {
    position: "absolute",
    top: 18,
    right: 18,
  },

});
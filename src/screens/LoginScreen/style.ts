import { StyleSheet } from "react-native";
import { themes } from "../../global/styles/color";

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
    paddingBottom: 40,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
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

  subtitle: {
    fontSize: 14,
    color: themes.colors.textLight,
    marginTop: 8,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: themes.colors.card,
    borderRadius: 24,
    padding: 24,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: themes.colors.primary,
    marginBottom: 8,
  },

  cardDescription: {
    fontSize: 14,
    color: themes.colors.textLight,
    lineHeight: 22,
    marginBottom: 24,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themes.colors.background,
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#1F3D2B",
    minHeight: 54,
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: themes.colors.primary,
  },

  forgotButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },

  forgotText: {
    color: "#4F7A5A",
    fontSize: 13,
    fontWeight: "600",
  },

  loginButton: {
    backgroundColor: themes.colors.secondary,
    borderRadius: 14,
    minHeight: 54,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    elevation: 3,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  footerText: {
    color: themes.colors.textLight,
    fontSize: 14,
  },

  footerLink: {
    color: "#4F7A5A",
    fontSize: 14,
    fontWeight: "bold",
  },
});
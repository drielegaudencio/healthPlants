// style.ts

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#31583A",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },

  imageContainer: {
    height: 320,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
    marginBottom: 24,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },

  placeholderText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },

  button: {
    height: 58,
    backgroundColor: "#4F8F5B",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  loadingContainer: {
    marginTop: 30,
    alignItems: "center",
  },

  loadingText: {
    marginTop: 12,
    fontSize: 15,
    color: "#666",
  },

  resultCard: {
    backgroundColor: "#FFFFFF",
    marginTop: 28,
    borderRadius: 24,
    padding: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  resultTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#31583A",
    marginBottom: 20,
  },

  infoItem: {
    marginBottom: 18,
  },

  infoLabel: {
    fontSize: 14,
    color: "#777",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 16,
    color: "#222",
    fontWeight: "600",
  },
});
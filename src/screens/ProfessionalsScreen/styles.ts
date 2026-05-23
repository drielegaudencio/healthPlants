// style.ts

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  headerIcon: {
    backgroundColor: "#E7F5E8",
    padding: 16,
    borderRadius: 50,
    marginBottom: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#31583A",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#6E6E6E",
    textAlign: "center",
    paddingHorizontal: 20,
  },

  cityButton: {
    backgroundColor: "#4F8F5B",
    height: 54,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 18,
  },

  cityButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  searchContainer: {
    height: 56,
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#222",
  },

  resultText: {
    marginTop: 10,
    marginBottom: 18,
    color: "#666",
    fontSize: 14,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    gap: 16,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#31583A",
  },

  profession: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "600",
    color: "#4F8F5B",
  },

  specialty: {
    marginTop: 4,
    fontSize: 14,
    color: "#777",
  },

  cityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },

  cityText: {
    fontSize: 14,
    color: "#555",
  },

  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
  },
});
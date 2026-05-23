// style.ts

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  iconContainer: {
    width: 95,
    height: 95,
    borderRadius: 50,
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
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 20,
  },

  resultText: {
    marginBottom: 18,
    fontSize: 14,
    color: "#777",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 220,
  },

  content: {
    padding: 18,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#31583A",
    flex: 1,
  },

  scientific: {
    marginTop: 6,
    fontSize: 15,
    color: "#6E8A71",
    fontStyle: "italic",
  },

  description: {
    marginTop: 14,
    fontSize: 14,
    color: "#666",
    lineHeight: 24,
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 18,
  },

  tag: {
    backgroundColor: "#E8F5E9",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  tagText: {
    color: "#406B45",
    fontSize: 13,
    fontWeight: "600",
  },

  footer: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  moreText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#406B45",
  },

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    paddingHorizontal: 20,
  },

  emptyTitle: {
    marginTop: 18,
    fontSize: 22,
    fontWeight: "700",
    color: "#31583A",
  },

  emptyText: {
    marginTop: 12,
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    lineHeight: 24,
  },
});
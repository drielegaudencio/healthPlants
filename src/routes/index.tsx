import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../context/AuthContext"
import { AppRoutes } from "./app.routes";
import React from "react";

export function Routes() {
  return (
    <AuthProvider>
        <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
    </AuthProvider>
    
  )
}
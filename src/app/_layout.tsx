import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

const RootLayout = () => {
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen
          name="(home)"
          options={{ headerShown: false, title: "Home" }}
        />
        <Stack.Screen
          name="categories"
          options={{ headerShown: false, title: "Categories" }}
        />
        <Stack.Screen
          name="product"
          options={{ headerShown: false, title: "Product" }}
        />
        <Stack.Screen
          name="cart"
          options={{ presentation: "modal", title: "Cart" }}
        />
        <Stack.Screen name="auth" options={{ headerShown: true }} />
      </Stack>
    </ToastProvider>
  );
};

export default RootLayout;

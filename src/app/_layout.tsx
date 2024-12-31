import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(home)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, title: "Categories" }}
      />
      <Stack.Screen
        name="product"
        options={{ headerShown: true, title: "Product" }}
      />
      <Stack.Screen
        name="cart"
        options={{ presentation: "modal", title: "Cart" }}
      />
      <Stack.Screen name="auth" options={{ headerShown: true }} />
    </Stack>
  );
};

export default RootLayout;

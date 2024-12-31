import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";

const CategoriesLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={({navigation}) => ({
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
};

export default CategoriesLayout;

const styles = StyleSheet.create({});


import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SpaceComponent } from "../components";

const authSchema = zod.object({
  email: zod.string().email({ message: "* Invalid email address" }),
  password: zod
    .string()
    .min(6, { message: "* Password must be at least 6 characters long" }),
});

const Auth = () => {
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = (data: zod.infer<typeof authSchema>) => {
    console.log(data);
  };

  const signUp = (data: zod.infer<typeof authSchema>) => {
    console.log(data);
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/bg.jpg")}
    >
      {/* Overlay to make the background image darker */}
      <View style={styles.overlay} />

      {/* Main content */}
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        {/* Email input */}
        <Controller
          control={control}
          name="email"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={"#aaa"}
                autoCapitalize="none" // Disable auto-capitalization
                editable={!formState.isSubmitting} // Disable input while submitting
              />
              {error && <Text style={styles.error}>{error.message}</Text>}
            </>
          )}
        />

        {/* Password input */}
        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={"#aaa"}
                secureTextEntry={true} // Hide password
                editable={!formState.isSubmitting} // Disable input while submitting
              />
              {error && <Text style={styles.error}>{error.message}</Text>}
            </>
          )}
        />

        <SpaceComponent height={30}/>

        {/* Button Signin */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit(signIn)}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Button Sign up */}
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          onPress={handleSubmit(signUp)}
        >
          <Text style={[styles.buttonText, styles.signUpButtonText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Auth;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "repeat",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    marginBottom: 32,
  },
  input: {
    width: "90%",
    padding: 12,
    marginBottom: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 8,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#56f",
    padding: 16,    
    borderRadius: 8,
    marginBottom: 16,
    width: "90%",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 1,
  },
  signUpButtonText: {
    color: "#fff",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  error: {
    color: "red",
    fontSize: 15,
    marginBottom: 16,
    textAlign: "left",
    width: "90%",
  },
});

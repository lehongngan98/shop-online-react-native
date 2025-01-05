import {
  View,
  Text,
  StyleSheet,
  Alert,
  Platform,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useCartStore } from "../store/cart-store";
import { StatusBar } from "expo-status-bar";
import CartItem from "../components/cart-item";

const Cart = () => {
  const { items, removeItem, incrementItem, decrementItem, getTotalPrice } =
    useCartStore();

  const handleCheckout = () => {
    Alert.alert("Checkout", `Total: ${getTotalPrice()}`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          // Clear the cart
          // items.forEach((item) => removeItem(item.id));
          Alert.alert("Success", "Items purchased successfully");
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      {/* Flatlist cart item */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onDecrement={decrementItem}
            onRemove={removeItem}
            onIncrement={incrementItem}
          />
        )}
        contentContainerStyle={styles.cartList}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: {getTotalPrice()}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  cartList: {
    paddingVertical: 16,
  },

  footer: {
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#ddd",
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

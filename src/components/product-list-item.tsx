import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../assets/types";
import { Link } from "expo-router";

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link asChild href={`/product/${product.slug}`}>
      <TouchableOpacity style={styles.item}>
        <View style={styles.itemImageContainer}>
          <Image source={product.heroImage} style={styles.itemImage} />
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{product.title}</Text>
          <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  item: {
    width: "48%",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemImageContainer: {
    height: 150,
    width: "100%",
    borderRadius: 10,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  itemTextContainer: {
    padding: 10,
    alignItems: "flex-start",
    gap: 4,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

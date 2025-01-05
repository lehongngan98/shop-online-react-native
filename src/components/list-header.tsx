import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { CATEGORIES } from "../../assets/mockApis/categories";
import { useCartStore } from "../store/cart-store";

const ListHeader = () => {
  const {getItemCount} = useCartStore();
  return (
    <View style={styles.headerContainer}>
      {/* Header Top */}
      <View style={styles.headerTop}>
        {/* Header Left */}
        <View style={styles.headerLeft}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/ee/da/1d/eeda1d4a6abf2c1b0830c615fdca72d2.jpg",
              }}
              style={styles.avatarImage}
            />
            <Text style={styles.avatarText}>Hi, Ngan</Text>
          </View>
        </View>

        {/* Header Right */}
        <View style={styles.headerRight}>
          {/* Cart */}
          <Link asChild href={"/cart"} style={styles.cartContainer}>
            <Pressable>
              {({ pressed }) => (
                <View>
                  <FontAwesome
                    name="shopping-cart"
                    size={25}
                    color="black"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />

                  <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{getItemCount()}</Text>
                  </View>
                </View>
              )}
            </Pressable>
          </Link>

          {/* Sign Out */}
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={() => console.log("Sign Out")}
          >
            <FontAwesome name="sign-out" size={25} color="blue" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Hero Container*/}
      <View style={styles.heroContainer}>
        <Image
          source={require("../../assets/images/hero.png")}
          style={styles.heroImage}
        />
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <Link asChild href={`/categories/${item.slug}`}>
              <TouchableOpacity style={styles.category}>
                <Image
                  style={styles.categoryImage}
                  source={{ uri: item.imageUrl }}
                />
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            </Link>
          )}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  headerContainer: {
    gap: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    resizeMode: "repeat",
  },
  avatarText: {
    fontSize: 16,
  },
  cartContainer: {
    padding: 10,
  },
  signOutButton: {
    padding: 5,
  },
  heroContainer: {
    width: "100%",
    height: 200,
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  categoriesContainer: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  category: {
    width: 100,
    alignItems: "center",
    marginBottom: 16,
    
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginBottom: 8,    
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  badgeContainer: {
    position: "absolute",
    top: -5,
    right: 10,
    backgroundColor: "#FF6347",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

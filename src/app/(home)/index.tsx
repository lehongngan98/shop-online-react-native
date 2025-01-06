import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PRODUCTS } from "../../../assets/mockApis/products";
import { ListHeader, ProductListItem } from "../../components";
import Auth from "../auth";

const index = () => {
  return (
    <Auth/>
    
    // <View>
    //   <FlatList
    //     data={PRODUCTS}
    //     keyExtractor={(item) => item.id.toString()}
    //     numColumns={2}
    //     ListHeaderComponent={ListHeader}
    //     renderItem={({ item }) => ProductListItem({ product: item })}
    //     contentContainerStyle={styles.flatListContent}
    //     columnWrapperStyle={styles.flatListColumnWrapper}
    //     style={styles.flatListContainer}
    //   />
    // </View>
  );
};

export default index;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumnWrapper: {
    justifyContent: "space-between",
  },
});

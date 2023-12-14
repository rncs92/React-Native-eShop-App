import React, { useState, useContext } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import CartContext from "../context/CartContext";

const BannerComponent = ({ navigation }) => {
  const { cart } = useContext(CartContext);

  return (
    <View style={styles.banner}>
      <Image
        source={{
          uri: "https://burti.lv/wp-content/uploads/2022/10/Burti_LOGO_pamata-1.png",
        }}
        style={styles.logo}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={styles.cartIcon}
      >
        <FontAwesome name="shopping-cart" size={24} color="white" />
        {cart.length > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cart.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    backgroundColor: "#058A64",
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 70,
    marginLeft: 130,
  },
  cartIcon: {
    marginRight: 10,
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -15,
    right: -12,
    backgroundColor: "#CF071F",
    borderRadius: 5,
    padding: 6,
  },
  cartBadgeText: {
    color: "white",
    fontSize: 12,
  },
});

export default withNavigation(BannerComponent);

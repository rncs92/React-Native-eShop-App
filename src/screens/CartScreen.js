import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from "react-native";
import "react-native-get-random-values";
import BannerComponent from "../components/BannerComponent";
import CartContext from "../context/CartContext";
import ImageComponent from "../components/ImageComponent";
import { FontAwesome } from "@expo/vector-icons";
import TimeComponent from "../components/TimeComponent";

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const uniqueDeliveryDays = new Set(cart.map((item) => item.deliveryTime));
  const deliveryTimeCategories = [...uniqueDeliveryDays];

  const deliveryPacks = deliveryTimeCategories.map((deliveryTime) => {
    const itemsInCategory = cart.filter(
      (item) => item.deliveryTime === deliveryTime
    );
    const sortedItems = itemsInCategory.sort((a, b) => a.id - b.id);

    return {
      deliveryTime: deliveryTime,
      data: sortedItems,
    };
  });

  const sortedDeliveryPacks = deliveryPacks.sort(
    (a, b) => a.deliveryTime - b.deliveryTime
  );

  const sections = sortedDeliveryPacks.map((pack) => ({
    title: `Delivery in ${pack.deliveryTime} Days`,
    data: pack.data,
  }));

  return (
    <View style={styles.container}>
      <BannerComponent />
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.uniqueId}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <ImageComponent itemName={item.name} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "500" }}>Preces ID:</Text> {item.id}
              </Text>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "500" }}>Nosaukums:</Text>{" "}
                {item.name}
              </Text>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "500" }}>Piegādātājs:</Text>{" "}
                {item.supplier}
              </Text>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "500" }}>Pieegādes laiks:</Text>{" "}
                {item.deliveryTime}
              </Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.uniqueId)}>
              <FontAwesome name="trash" size={20} color="#FF0000" />
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.itemContainer}>
            <TimeComponent deliveryDays={parseInt(title.split(" ")[2])} />
          </View>
        )}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    marginBottom: 30,
  },
  itemContainer: {
    padding: 15,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#9B9A9A",
    padding: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default CartScreen;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import DataFetching from "../components/DataFetching";
import BannerComponent from "../components/BannerComponent";
import ImageComponent from "../components/ImageComponent";

const ShopScreen = ({ navigation }) => {
  const products = DataFetching();

  if (!products) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#058A64" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BannerComponent />
      <Text style={styles.header}>Product List:</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.Item}
        data={products.Products}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemCard}>
              <TouchableOpacity>
                <ImageComponent itemName={item.Name} />
                <Text style={styles.itemName}>{item.Name}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Product", { productId: item.Item })
                }
              >
                <Text style={styles.buttonText}>Apskatīt</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    marginBottom: 25,
  },
  itemName: {
    marginBottom: 10,
    alignSelf: "center",
  },
  flatListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
    alignSelf: "center",
  },
  itemCard: {
    backgroundColor: "#F9F9F9",
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#ADABAB",
    margin: 5,
    marginLeft: 30,
    marginRight: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: "#B6EAFA",
    padding: 5,
    borderRadius: 5,
    margin: 6,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "400",
  },
});

export default withNavigation(ShopScreen);

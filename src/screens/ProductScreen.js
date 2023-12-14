import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import BannerComponent from "../components/BannerComponent";
import DataFetching from "../components/DataFetching";
import ImageComponent from "../components/ImageComponent";
import DropDownPicker from "react-native-dropdown-picker";
import CartContext from "../context/CartContext";

const ProductScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [itemSuppliers, setItemSuppliers] = useState([]);
  const { addToCart } = useContext(CartContext);

  const products = DataFetching();
  const { productId } = navigation.state.params;
  const deliveryTime = itemSuppliers.find(
    (supplier) => supplier.Name === value
  )?.Delivery;

  useEffect(() => {
    if (products) {
      const suppliers = products.Suppliers.filter((supplier) =>
        supplier.Items.some((item) => item.Item === productId)
      );

      setItemSuppliers(suppliers);
    }
  }, [products, productId]);

  const selectedProduct = products?.Products.find(
    (product) => product.Item === productId
  );

  const handleAddToCart = () => {
    if (value) {
      addToCart({
        id: selectedProduct.Item,
        name: selectedProduct.Name,
        supplier: value,
        deliveryTime: deliveryTime,
      });
    }
  };

  return (
    <View style={styles.container}>
      <BannerComponent />
      <View style={styles.content}>
        {products ? (
          <>
            <ImageComponent
              style={styles.image}
              itemName={selectedProduct.Name}
            />
            <Text style={styles.header}>{selectedProduct.Name}</Text>
            <Text style={styles.header2}>Preces ID:</Text>
            <Text style={{ fontWeight: "500" }}>{selectedProduct.Item}</Text>
            <Text style={styles.header2}>Prece pieejama:</Text>
            <DropDownPicker
              style={{ width: 300, alignSelf: "center" }}
              containerStyle={{ width: 300 }}
              open={open}
              value={value}
              items={itemSuppliers.map((supplier) => ({
                label: supplier.Name,
                value: supplier.Name,
              }))}
              setOpen={setOpen}
              setValue={setValue}
              placeholder={"Izvēlieties veikalu"}
            />
            {!value ? null : (
              <>
                <Text style={styles.header2}>
                  Piegādes laiks: {deliveryTime}s
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleAddToCart}
                >
                  <Text>Pievienot grozam +</Text>
                </TouchableOpacity>
              </>
            )}
          </>
        ) : (
          <ActivityIndicator size="large" color="#058A64" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
  },
  content: {
    alignItems: "center",
    marginTop: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,
  },
  header2: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#B6EAFA",
    padding: 10,
    borderRadius: 5,
    margin: 6,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "400",
  },
});

export default ProductScreen;

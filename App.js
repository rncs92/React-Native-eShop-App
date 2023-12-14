import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ShopScreen from "./src/screens/ShopScreen";
import CartScreen from "./src/screens/CartScreen";
import ProductScreen from "./src/screens/ProductScreen";
import { CartProvider } from "./src/context/CartContext";
import FlashMessage from "react-native-flash-message";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Products: ShopScreen,
    Cart: CartScreen,
    Product: ProductScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Burti eShop",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <CartProvider>
      <App />
      <FlashMessage position="bottom" />
    </CartProvider>
  );
};

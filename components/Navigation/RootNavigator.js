import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductsList } from "../ProductsList";
import ProductDetail from "../ProductDetail";
import Product from "../Product";
import Cart from "../Cart";
import CartIcon from "../CartIcon";
import productStore from "../../stores/productStore";
const { Navigator, Screen } = createStackNavigator();
export default function RootNavigator() {
  return (
    <Navigator
      initialRouteName="Product-list"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "grey",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name=" "
        options={() => ({
          headerLeft: () => <CartIcon />,
        })}
        component={ProductsList}
      />
      <Screen
        name="Product-detail"
        options={({ route }) => {
          return {
            title: productStore.getProductById(route.params.id).name,
          };
        }}
        component={ProductDetail}
      />
      <Screen name="my-cart" component={Cart} />
    </Navigator>
  );
}

import "react-native-gesture-handler";
import { Cart } from "./components/Cart";
import { Product } from "./components/Product";
import { ProductDetails } from "./components/ProductDetail";
import { ProductsList } from "./components/ProductsList";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation/RootNavigator";
import MyDrawer from "./components/Navigation/MyDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

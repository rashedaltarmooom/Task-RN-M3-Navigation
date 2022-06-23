import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProductsList } from "../ProductsList";
import Cart from "../Cart";
import RootNavigator from "./RootNavigator";
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={RootNavigator} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
}

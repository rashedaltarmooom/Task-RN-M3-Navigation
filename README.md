# Shop App 🛒

## Instructions

- Fork and clone [this repository](https://github.com/JoinCODED/Task-RN-M3-Navigation) to your `Development` folder.

### Setup

1. Install `react-navigation`.

   ```bash
   $ npm install @react-navigation/native @react-navigation/stack
   ```

2. Install some dependencies.

   ```bash
   $ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
   ```

#### Root Navigator Component

1. In `components`, create a new folder called `Navigation`.
2. Inside it create a file called `index.js`.
3. Setup your component and call it `RootNavigator`.
4. Import `createStackNavigator`.
5. Call `createStackNavigator` outside the component, save the returned value in a de-structured object to get `Navigator` and `Screen` components.
6. In your `RootNavigator` component, render `Navigator`.
7. For each of your screens render a `Screen` component. Give each screen a `name` and pass it a `component`
8. Don't forget to import your components.
9. Pass `Navigator` a `prop` called `initialRouteName` and give it the name of your `ProductDetail` screen's `Screen`.

#### Setup in App

1. Import `NavigationContainer`.
2. Render `NavigationContainer` inside the `Provider`.
3. Import `RootNavigator` and render it under inside the `NavigationContainer`.
4. Check that your application is running and that a header has appeared.

#### Navigation

1. In your `ProductsList` component, receive `navigation` as a `prop`.
2. In the `onPress` method navigate the user to the `ProductDetail` screen.
3. Pass along with it the `id` of the product object.
4. In your `ProductDetail` component, receive `route` as a `prop`, and capture from it the `id` object you passed from `ProductList`.
5. use the `id` to get the product object from the `products` array.
6. Test it!

#### Customization

In your `RootNavigator`, customize your header.

1. Customize the header for **all** your components in `Navigator`. Give them a background color and change the font if you want.
2. Remove the header from your home screen.
3. Change the title of your `ProductDetail` screen by fetching the product's name from `route.params`.

#### Cart 🛒

    1. In your `ProductsList` component header, add a `Cart` button at the left side.
    2. Clicking on this button, navigate the user to the `Cart` screen.

#### TabNavigator 🛒

    1. Create a bottom tab navigator with two screens, the root screen and the cart screen.

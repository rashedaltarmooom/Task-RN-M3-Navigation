import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import cartStore from '../stores/cartStore';

export function CartIcon() {
  return (
    <TouchableOpacity
      onPress={() => {}}
    >
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => {}}>
          Cart ({cartStore.getTotalPrice()})
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 52,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

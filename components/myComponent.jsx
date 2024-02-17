// Import necessary React components
import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Pressable,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";


// Get the window dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Template component
export default function MyComponent({ someProps }) {


  // State variables
  const [someConst, setSomeConst] = useState("");

  // Determine styles based on screen orientation
  const [styles, setStyles] = useState(() => {
    if (windowWidth >= windowHeight) {
      return stylesL;
    } else {
      return stylesP;
    }
  });



  // Do something on component mount
  useEffect(() => {
  }, [someProps]);

  // Some async function
  async function AF() {
    try {
      // Your async logic here
    } catch (error) {
      console.log('Error AF:', error);
    }
  }

  // Render component
  return (
    <View style={styles.container}>
      {/* Your JSX code here */}
    </View>
  );
}

// Portrait styles
const stylesP = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', */
  },
});

// Landscape styles
const stylesL = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', */
  },
});
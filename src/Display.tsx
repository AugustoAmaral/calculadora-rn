import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

interface DisplayProps {
  text?: string;
}

const Display = ({ text }: DisplayProps) => {
  return (
    <View style={styles.display}>
      <Text>{text ?? ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: "#AAA",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Display;

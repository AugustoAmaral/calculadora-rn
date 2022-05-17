import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

interface DisplayProps {
  text?: string;
  guideText?: Array<string>;
}

const Display = ({ text, guideText }: DisplayProps) => {
  return (
    <View style={styles.display}>
      <Text>{guideText?.join(" ")}</Text>
      <Text style={styles.currentValue}>{text ?? ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: "#AAA",
    flexDirection: "column-reverse",
  },
  currentValue: {
    fontSize: 40,
    marginRight: 20,
    textAlign: "right",
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default Display;

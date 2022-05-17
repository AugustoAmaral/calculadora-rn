import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  innerText: string;
  buttonStyle: object;
  forceDisable?: boolean;
  onPress: (number: string) => void;
}

const GameButton = ({
  innerText,
  buttonStyle,
  forceDisable,
  onPress,
}: ButtonProps) => {
  const innerStyle: Array<Object> = [styles.button, buttonStyle];

  return (
    <TouchableOpacity
      style={innerStyle}
      onPress={() => onPress(innerText)}
      disabled={forceDisable}
    >
      <Text style={styles.text}>{innerText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "24%",
    height: 98,
    margin: "0.5%",
    backgroundColor: "gray",
    borderRadius: 2,
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
  },
});

export default GameButton;

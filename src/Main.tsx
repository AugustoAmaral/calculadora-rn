import { View, StyleSheet } from "react-native";
import Button from "./Button";
import Display from "./Display";

const Main = () => {
  return (
    <View>
      <Display />
      <View style={styles.buttonContainer}>
        <Button
          innerText="AC"
          buttonStyle={{
            width: "74%",
          }}
        />
        <Button innerText="÷" buttonStyle={{ backgroundColor: "darkorange" }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button innerText="7" buttonStyle={{}} />
        <Button innerText="8" buttonStyle={{}} />
        <Button innerText="9" buttonStyle={{}} />
        <Button innerText="x" buttonStyle={{ backgroundColor: "darkorange" }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button innerText="4" buttonStyle={{}} />
        <Button innerText="5" buttonStyle={{}} />
        <Button innerText="6" buttonStyle={{}} />
        <Button innerText="-" buttonStyle={{ backgroundColor: "darkorange" }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button innerText="1" buttonStyle={{}} />
        <Button innerText="2" buttonStyle={{}} />
        <Button innerText="3" buttonStyle={{}} />
        <Button innerText="+" buttonStyle={{ backgroundColor: "darkorange" }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          innerText="0"
          buttonStyle={{
            width: "49%",
          }}
        />
        <Button innerText="." buttonStyle={{}} />
        <Button innerText="=" buttonStyle={{ backgroundColor: "darkorange" }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    maxHeight: 100,
    flexDirection: "row",
  },
});

export default Main;

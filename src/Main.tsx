import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";
import Display from "./Display";
import operate from "./operate";

const Main = () => {
  const [operations, setOperations] = useState<Array<string>>([]);
  const [currentOperation, setCurrentOperation] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("0");

  const handleNumberPress = (number: string) => {
    if (currentOperation === "=") return;
    if (currentOperation) {
      setCurrentOperation("");
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue === "0" ? number : displayValue + number);
    }
  };

  const handleClearPress = () => {
    if (displayValue === "0") {
      setOperations([]);
      setCurrentOperation("");
    } else setDisplayValue("0");
  };

  const handleOperationPress = (operation: string) => {
    if (displayValue === "0" || (operation === "=" && currentOperation === "="))
      return;
    var newOperations = [];

    if (currentOperation === "=") newOperations = [...operations, operation];
    else newOperations = [...operations, displayValue, operation];

    if (operation === "=")
      newOperations.push(operate(newOperations).toString());

    setCurrentOperation(operation);
    setOperations(newOperations);
    setDisplayValue(operate(newOperations).toString());
  };

  const handleDotPress = () => {
    if (displayValue.includes(".") || currentOperation === "=") return;
    setDisplayValue(displayValue + ".");
  };

  return (
    <View>
      <Display text={displayValue} guideText={operations} />
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleClearPress}
          innerText="AC"
          buttonStyle={{
            width: "74%",
          }}
        />
        <Button
          onPress={handleOperationPress}
          innerText="÷"
          buttonStyle={{ backgroundColor: "darkorange" }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleNumberPress} innerText="7" buttonStyle={{}} />
        <Button onPress={handleNumberPress} innerText="8" buttonStyle={{}} />
        <Button onPress={handleNumberPress} innerText="9" buttonStyle={{}} />
        <Button
          onPress={handleOperationPress}
          innerText="x"
          buttonStyle={{ backgroundColor: "darkorange" }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleNumberPress} innerText="4" buttonStyle={{}} />
        <Button onPress={handleNumberPress} innerText="5" buttonStyle={{}} />
        <Button onPress={handleNumberPress} innerText="6" buttonStyle={{}} />
        <Button
          onPress={handleOperationPress}
          innerText="-"
          buttonStyle={{ backgroundColor: "darkorange" }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleNumberPress} innerText="1" buttonStyle={{}} />
        <Button onPress={handleNumberPress} innerText="2" buttonStyle={{}} />
        <Button onPress={handleNumberPress} innerText="3" buttonStyle={{}} />
        <Button
          onPress={handleOperationPress}
          innerText="+"
          buttonStyle={{ backgroundColor: "darkorange" }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleNumberPress}
          innerText="0"
          buttonStyle={{
            width: "49%",
          }}
        />
        <Button onPress={handleDotPress} innerText="." buttonStyle={{}} />
        <Button
          onPress={handleOperationPress}
          innerText="="
          buttonStyle={{ backgroundColor: "darkorange" }}
        />
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

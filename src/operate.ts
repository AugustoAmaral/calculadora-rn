const operate = (operations: Array<string>): number => {
  var finalValue: number = 0;

  for (var index in operations) {
    const operationIndex = parseInt(index.toString());

    if (operationIndex === 0) finalValue = parseFloat(operations[operationIndex]);
    else if (!operations[operationIndex + 1]) return finalValue;
    else
      switch (operations[operationIndex]) {
        case "+":
          finalValue += parseFloat(operations[operationIndex + 1]);
          break;
        case "-":
          finalValue -= parseFloat(operations[operationIndex + 1]);
          break;
        case "x":
          finalValue *= parseFloat(operations[operationIndex + 1]);
          break;
        case "÷":
          finalValue /= parseFloat(operations[operationIndex + 1]);
          break;
        default:
          break;
      }
  }
  return finalValue;
};

export default operate;

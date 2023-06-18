export const isKeyboardCodeAllowed = (code: string) => {
    return (
      code.startsWith("Key") ||
      code.startsWith("Digit") ||
      code === "Backspace" ||
      code === "Space"
    );
  };

export const formatPercentage = (percentage: number) => {
    return percentage.toFixed(0) + "%"
};

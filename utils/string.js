export function convertToLowerCase(initialString) {
  return initialString.toLowerCase();
}

export function capitalizeFirstLetter(initialString) {
  return (
    initialString.charAt(0).toUpperCase() + initialString.slice(1).toLowerCase()
  );
}

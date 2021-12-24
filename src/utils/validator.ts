export const validateDecimal = (input: string): boolean => {
  const pattern = "^\\d+\\.?\\d*";
  let match = input.match(pattern);
  return match? match[0] === input : false;
}
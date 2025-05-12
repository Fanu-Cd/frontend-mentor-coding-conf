export const generateTicketNumber = () => {
  const DIGITS = 5;
  const min = Math.pow(10, DIGITS - 1);
  const max = Math.pow(10, DIGITS) - 1;

  return Math.floor(min + Math.random() * (max - min + 1)).toString();
};

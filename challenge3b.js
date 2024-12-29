const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const leoOwing = Math.abs(parseInt(leoBalance));
const sarahOwing = Math.abs(parseInt(sarahBalance));
const owed = `R ${(leoOwing + sarahOwing).toFixed(2)}`;
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${leoOwing.toFixed(2)})`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${sarahOwing.toFixed(
  2
)})`;
const total = "Total amount owed: ";
const result =
  "\n" +
  leo +
  "\n" +
  sarah +
  "\n\n" +
  divider +
  "\n  " +
  total +
  owed +
  "\n" +
  divider;

console.log(result);

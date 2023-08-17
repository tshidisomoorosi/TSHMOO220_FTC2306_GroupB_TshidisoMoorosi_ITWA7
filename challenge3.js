const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line
const leoBalanceDec = parseFloat(leoBalance)
const sarahBalanceDec = parseFloat(sarahBalance)
const owed = -leoBalanceDec - sarahBalanceDec
const leo = leoName +" "+ leoSurname.trim() + " " + "Owed: R " + -leoBalanceDec.toFixed(2) + "\n"
const sarah = sarahName.trim() + " " + sarahSurname + " " + "Owed: R " + -sarahBalanceDec.toFixed(2) + "\n\n"
const total = "Total amount owed: R "
const owedDec = owed.toFixed(2)
const owedSep = owedDec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const result = "\n" + leo + sarah + divider + "\n\t" + total + owedSep + "\n" + divider

console.log(result)
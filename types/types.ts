const myString: string = 'Hello'
const myInteger: number = 42
const myFloat: number = 3.14159
const myBigInt: bigint = 42n
const myBigInt2: bigint = BigInt('42')
const mySymbol: symbol = Symbol('symbol')
const myArray: readonly string[] = ['apples', 'oranges']
const myTuple: [string, number] = ['forty two', 42]

type row = [string, boolean, number]
const mySheet: row[] = [['roland', true, 59], ['alexandros', true, 22]]

type record = { make: string, model: string, year: number, bhp: number }
const myDatabase: record[] = [{ make: 'Nissan', model: 'Leaf', year: 2000, bhp: 80 }, { make: 'Renault', model: 'Zoe', year: 2020, bhp: 80 }]

const doit = document.getElementById('doit')
const output = document.getElementById('output')

doit.addEventListener('click', () => {
  const currentDateTime = new Date()
  output.textContent = `${myString} - ${myInteger} - ${myArray} - ${myTuple} - ${mySheet} - ${mySheet[0][1]} - ${myDatabase} - ${myDatabase[0].make} - ${currentDateTime}`
})

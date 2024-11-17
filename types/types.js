const myString = 'Hello';
const myInteger = 42;
const myFloat = 3.14159;
const myBigInt = 42n;
const myBigInt2 = BigInt('42');
const mySymbol = Symbol('symbol');
const myArray = ['apples', 'oranges'];
const myTuple = ['forty two', 42];
const mySheet = [['roland', true, 59], ['alexandros', true, 22]];
const myDatabase = [{ make: 'Nissan', model: 'Leaf', year: 2000, bhp: 80 }, { make: 'Renault', model: 'Zoe', year: 2020, bhp: 80 }];
const doit = document.getElementById('doit');
const output = document.getElementById('output');
doit.addEventListener('click', () => {
    const currentDateTime = new Date();
    output.textContent = `${myString} - ${myInteger} - ${myArray} - ${myTuple} - ${mySheet} - ${mySheet[0][1]} - ${myDatabase} - ${myDatabase[0].make} - ${currentDateTime}`;
});

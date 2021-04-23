// import { TestScheduler } from "jest";

// const {suma}= requiere('./app.js');

// test('adds 14 + 9 to equal 23', ()=>{
//     let total = sum(14,9);
//     expect(total).toBe(23);
// });

// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
// ********************************************************euroToDollar
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

//*********************************************************dollarToYen */

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yens = fromDollarToYen(3.5)

    // is 1 dolar son 107.88, entonces 3.5 dolares deberian ser = (3.5 * 107.88)
    const expected = 3.5 * 107.88; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yens);
})

//*************************************************************yenToPound */

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pound = fromYenToPound(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 0.0067; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pound);
})
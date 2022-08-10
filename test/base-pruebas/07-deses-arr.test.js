import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Prueba en 07-deses-arr', () => {
  test('Debe retornar un string y un numero', () => {

    const testArray = ['ABC', 123];
    const array = retornaArreglo();

    expect(array).toEqual(testArray);
  })
})


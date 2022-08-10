import { getSaludo } from "../../src/base-pruebas/02-template-string.js";

describe('Pruebas en archivo 02-template-string', () => {

  test('Debe retornar saludo "hola Michel', () => {
    const name = 'Michel';
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
   })
 })
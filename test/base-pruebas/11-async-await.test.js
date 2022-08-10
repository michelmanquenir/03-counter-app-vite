import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en async await', () => {
  test('getImagen debe retornar un error si no tenemos api key', async() => {

    const url = await getImagen();
    expect(url).toBe('No se encontro la imagen');
   });
 });
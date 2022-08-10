import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {

  test('GetUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'Michel123'
    };

    const user = getUser();
    //to equials para comparar objetos
    expect(user).toEqual(testUser);
   })

    test('GetUsuarioActivo debe retornar un objeto', () => {

      const nombre = 'Michel123';

      const userA = getUsuarioActivo(nombre);

      //to equials para comparar objetos
      expect(userA).toStrictEqual({
        uid: 'ABC567',
        username: nombre
      });
    })
 })
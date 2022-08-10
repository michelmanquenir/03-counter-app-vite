import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {
  test('getHeroById debe retornar heroe por ID', () => {
    const id = 2;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
    });
  });

  test('getHeroById debe retornar undefined si no existe un heroe con el ID', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBeFalsy();
  });

  test('getHeroesByOwner para marvel debe retornar 2 ', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toEqual(2);
  });

  test('getHeroesByOwner para DC debe retornar 3 ', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toEqual(3);
  });

  test('getHeroesByOwner para XXX debe retornar 0 ', () => {
    const owner = 'XXX';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toEqual(0);
  });

  //correcto
  test('getHeroesByOwner para Mavel ', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
  })
})
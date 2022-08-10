import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
describe('Pruebas en <FirstApp />', () => {

  const title = 'Hola soy Goku';

  test('debe de hacer match con el snapshot', () => {
    const {container} = render(<FirstApp title={ title }/>);
    expect(container).toMatchSnapshot();
  });


});
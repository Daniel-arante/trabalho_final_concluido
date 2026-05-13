import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cadastro from './App';

test('deve renderizar a tela de cadastro', () => {
  render(
    <BrowserRouter>
      <Cadastro />
    </BrowserRouter>
  );
});
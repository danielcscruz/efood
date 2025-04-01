import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84',
  vermelho: '#FF0000',
  cinzaClaro: '#A3A3A3',
  rosinha: '#E66767',
  begeClaro: '#FFF8F2',
  begeEscuro: '#FFEBD9',
  cinza2: '#4B4B4B'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
    body {
        background-color: ${cores.begeEscuro};
        color: ${cores.branca};

    }

    .container {
        max-width: 100vw;
        width: 100%;
        margin: 0 auto;
    }
`

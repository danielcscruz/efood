import styled from 'styled-components'

import { cores } from '../../styles'

export const Container = styled.section`
  background-color: ${cores.begeClaro};

  .container {
    display: block;
    max-width: 1024px;
    width: 100%;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  padding-top: 80px;
  padding-bottom: 120px;
`

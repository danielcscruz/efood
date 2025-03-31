import styled from 'styled-components'

import pasta from '../../assets/images/pasta.png'

export const Container = styled.div<{ image: string }>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 280px;
  width: 100%;
  font-size: 32px;
`
export const Category = styled.h3`
  font-weight: 100;
  padding-top: 25px;
  padding-left: 127px;
  font-size: 32px;
`

export const Store = styled.h2`
  font-weight: 900;
  padding-top: 120px;
  padding-left: 127px;
  font-size: 32px;
`

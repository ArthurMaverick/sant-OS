import styled from 'styled-components'
import {theme } from '../../styles'
type Theme = typeof theme


export const Container = styled.article`

img {
    max-width: 100%;
  }
  p {
    margin: 5px 0;
    font-size: 18px
  }
  ul,
  ol {
    margin: 10px;
  }
  pre {
   
      width: 100%;
      overflow-x: auto;
      background: grayClean;
      color: black;
      padding: 20px;
      margin: 10px 0;
      line-height: 1.5;
      font-size: 18px;
  }

`
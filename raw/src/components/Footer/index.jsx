import * as S from './style'
import { NavLink, useHref } from 'react-router-dom'

// JS-to-CSS
const Footer = () => {
  
  return <S.FooterContainer>
    {url !== '/' && <NavLink to="/">Voltar</NavLink>}
    Projeto by Coti Informática
    </S.FooterContainer>
}

export default Footer

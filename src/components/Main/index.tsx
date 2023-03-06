import React from 'react'
import * as S from './styles'

const Main = ({
  title = 'Template NextJs',
  description = 'A simple template NextJs, with: ReactJs, ESLint, Jest, React/Testing Library and Styled-Components'
}) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Wrapper>
  )
}

export default Main

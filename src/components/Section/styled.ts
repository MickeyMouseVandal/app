import styled from 'styled-components'

export const Container = styled.div<{ background?: string, size?: string }>`
    padding: 5.5rem 7.6rem;
    width: ${props => props.size};
    height: 100vh;
    background: ${props => props.background};
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

Container.defaultProps = {
  background: ''
}
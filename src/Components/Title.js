import React from 'react'
import styled from 'styled-components'

const EmojiMaker = props => (
    <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

const Container = styled.div`
display:flex;
justify-content:center;
`
const EmojiDiv = styled.div`
display:flex;
justify-content:center;
width:5rem;
font-size:5rem;
`

function Title(props) {
    return (
        <Container>
            <EmojiDiv>
                <EmojiMaker label="vulcan" symbol="🖖🏻"/>
            </EmojiDiv>
                <h1>Nasa Photo/Video Of The Day!</h1>
            <EmojiDiv>
                <EmojiMaker label="vulcan" symbol="🖖🏻"/>
            </EmojiDiv>
        </Container>
    )
}

export default Title;
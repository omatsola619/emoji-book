import styled from 'styled-components';
import {allEmojis} from '../constants'

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 700px;
  border: 1px solid #8080804e;
  height: 540px;
`;
const EmojiWrapper = styled.div`
  
`;
const EmojiItem = styled.div``;

function EmojiList() {
  return (
    <Container>
      <Wrapper>
        {
            allEmojis.map((emoji, i) => {
                return (
                    <EmojiWrapper key={i}>
                        <EmojiItem>
                            {emoji.code}
                        </EmojiItem>
                    </EmojiWrapper>
                )
            })
        }
      </Wrapper>
    </Container>
  )
}

export default EmojiList

import styled from 'styled-components';
import EmojiList from '../components/EmojiList';
import Header from '../components/Header';

const Container = styled.div`

`;

function Home() {
  return (
    <Container>
      <Header />
      <EmojiList />
    </Container>
  )
}

export default Home

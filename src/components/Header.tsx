import styled from 'styled-components';

const Container = styled.div`
  height: 70px;
  width: 100%;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(254,231,21,1) 27%);
`;
const Title = styled.div``;

function Header() {
  return (
    <Container>
      <Title>Em😂ji Book</Title>
    </Container>
  )
}

export default Header

import styled from 'styled-components';

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #FEE715FF;
  
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 100%;
`;
const Title = styled.div`
   font-size: 25px;
   font-family: 'Itim', cursive;
`;
const Links = styled.div``;
const LinkItem = styled.a`
  font-size: 20px;
`;

function Header() {
  return (
      <Container>
          <Wrapper>
              <Title>Em😂ji Book</Title>
              <Links>
                  <LinkItem href='#'>Dev</LinkItem>
              </Links>
          </Wrapper> 
      </Container>
  )
}

export default Header

import Nav from '@components/Nav/Nav';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeTemplate>
      <Nav />
    </HomeTemplate>
  );
};

export default Home;

const HomeTemplate = styled.div`
  margin: 0 auto;
  width: 44rem;
  height: 100%;
  border: 1px solid black;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
  background-color: #ffff;
`;

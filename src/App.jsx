import styled from 'styled-components';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import MainPage from './maincomponents/mainpage';
import ResetCss from './ResetCss';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
`;

const Main = styled.main`
    width: calc(100% - 15rem);
    display: flex;
    flex-direcion: column; 
    flex: 1;
    margin-left: 15rem;
    background-color: black;
    padding-top: 8vh;
`;

function App() {

  return (
    <>
      <ResetCss />
      <Container>
        <SideBar />
        <Main>
          <NavBar />
          <MainPage />
        </Main>
      </Container>
    </>
  )
}

export default App

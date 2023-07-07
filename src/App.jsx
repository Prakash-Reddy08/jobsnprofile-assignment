import { styled } from 'styled-components';
import './App.css'
import Nav from './components/Nav';
import Search from './components/Search';
import Resume from './components/Resume';
import Map from './components/Map';
import Featured from './components/Featured';
import TopCompanies from './components/TopCompanies';
import Types from './components/Types';
import Companies from './components/Companies';
import Courses from './components/Courses';

function App() {
  return (
    <Wrapper>
      <div className="stickey">
        <Nav />
      </div>
      <Search />
      <Main>
        <Resume />
        <Map />
        <Featured />
        <TopCompanies />
        {/* did not know what to name this components so named it as types */}
        <Types />
        <Companies />
        <Courses />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .stickey{
    position:sticky;
    top: 0;
  }
`
const Main = styled.div`
  padding-top:2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
`
export default App

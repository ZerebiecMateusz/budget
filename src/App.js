import { createGlobalStyle } from 'styled-components';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
// import theme from 'utils/theme';
const GlobalStyle = createGlobalStyle`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li + li {
          margin-left: 5px;
        }
      }
      `;

function App() {
  return (
    <>
      <GlobalStyle />
        <div className="App">
          <Router>
            <Navigation items={[]} />
            <Routes>
              <Route exact path='/' element={"HomePage"}/>
              <Route path='/budget' element={"Budget page"}/>
            </Routes>
          </Router>
        </div>
    </>
  )
}

export default App;

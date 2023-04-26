import { createGlobalStyle } from 'styled-components';
import './App.css';
import Navigation from './components/Navigation/Navigation';
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
          <Navigation items={[]} />
        </div>
    </>
  )
}

export default App;

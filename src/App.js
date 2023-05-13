import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wrapper from './components/Wrapper';
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
  const { t, i18n } = useTranslation();

  return (
    <>
      <GlobalStyle />
        <div className="App">
          <Router>
            <Navigation 
            items={[
              { content: t('HomePage') , to: '/'},
              { content: t('Budget') , to: '/budget'}
            ]} 
            RightElement={(
              <div>
                <Button
                  variant="regular"
                  primary={i18n.language === 'pl'}
                  onClick={() => changeLanguage('pl')}
                >
                  pl
                </Button>
                <Button
                  variant="regular"
                  primary={i18n.language === 'en'}
                  onClick={() => changeLanguage('en')}
                >
                  en
                </Button>
              </div>
            )}/>
            <Wrapper>
              <Routes>
                <Route exact path='/' element={"HomePage"}/>
                <Route path='/budget' element={"Budget page"}/>
              </Routes>
            </Wrapper>
            </Router>
        </div>
    </>
  )
}
function RootApp() {
  return (
    <React.Suspense fallback="...Loading">
      <App/>
    </React.Suspense>
  )
}

export default RootApp;

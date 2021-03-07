import './App.scss';
import './styles/reset.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#333',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'monospace',
  }
});

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <Header />
          <Main />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;

import {Router} from '@reach/router'
import Home from './components/Home';
import Page from './components/Page';


function App() {
  return (
   <>
      <Router>
        <Home path="/"/>
        <Page path="/page"/>
      </Router>
   </>
  );
}

export default App;

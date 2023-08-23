import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
// import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
      </Switch>{' '}
    </BrowserRouter>
  </>
)

export default App

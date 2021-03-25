import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppContextProvider from './contexts/app/AppContext'
import HomePage from './pages/Home'

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="*">404</Route>
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  )
}

export default App

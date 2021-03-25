import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route path="*">404</Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

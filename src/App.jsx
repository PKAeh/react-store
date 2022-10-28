import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

export default App

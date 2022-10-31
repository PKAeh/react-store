import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CategoryPage from './pages/CategoryPage'
import SearchPage from './pages/SearchPage'

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

          <Route path="/category/:category">
            <CategoryPage />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

export default App

import './App.css'
import UserRouteElement from './UserRouteElement'

function App() {
  const routeElements = UserRouteElement()
  return <div>{routeElements}</div>
}

export default App

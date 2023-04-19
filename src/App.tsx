import './styles/global.css'
import { DrinkList } from './containers/DrinkList'
import { startMirage } from './mirage'

startMirage()

function App() {
  return <DrinkList />
}

export default App

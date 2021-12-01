import react from "react"
import MenuBar from "./components/common/MenuBar"
import TopBar from "./components/common/TopBar"
import Slider from "./components/home/Slider"

function App() {
  return (
    <div className="App">
      <TopBar />
      <MenuBar />
      <Slider />
    </div>
  )
}

export default App

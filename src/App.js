import react from "react"
import Footer from "./components/common/Footer"
import MenuBar from "./components/common/MenuBar"
import Spacer from "./components/common/Spacer"
import TopBar from "./components/common/TopBar"
import Slider from "./components/home/Slider"
import CustomerServices from "./components/services/CustomerServices"
import Vehicles from "./components/services/Vehicles"

function App() {
  return (
    <div className="App">
      <TopBar />
      <MenuBar />
      <Slider />
      <Spacer />
      <CustomerServices />
      <Spacer />
      <Vehicles />
      <Spacer />
      <Footer />
    </div>
  )
}

export default App

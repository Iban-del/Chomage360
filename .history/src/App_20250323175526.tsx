import { Definition } from "./Application/component/Definition"
import { Home } from "./Application/component/Home"
import { NavBar } from "./Application/component/NavBar"
import { PositiveEffect } from "./Application/component/PositiveEffect"

//Bronze

function App() {
  
  return (
    <>
      <NavBar/>
      <Home>
        <Definition>
          <PositiveEffect>
            
          </PositiveEffect>
        </Definition>
      </Home>
    </>
  )
}

export default App

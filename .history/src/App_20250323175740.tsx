import { AdverseEffects } from "./Application/component/AdverseEffects"
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
            <AdverseEffects>
              
            </AdverseEffects>
          </PositiveEffect>
        </Definition>
      </Home>
    </>
  )
}

export default App

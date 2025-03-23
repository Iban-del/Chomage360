import { AdverseEffects } from "./Application/component/AdverseEffects"
import { CaseStudies } from "./Application/component/CaseStudies"
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
              <CaseStudies>

              </CaseStudies>
            </AdverseEffects>
          </PositiveEffect>
        </Definition>
      </Home>
    </>
  )
}

export default App

import { AdverseEffects } from "./Application/component/AdverseEffects"
import { CaseStudies } from "./Application/component/CaseStudies"
import { Definition } from "./Application/component/Definition"
import { Footer } from "./Application/component/Footer"
import { Home } from "./Application/component/Home"
import { InFigure } from "./Application/component/InFigure"
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
                <InFigure>
                  <Footer>

                  </Footer>
                </InFigure>
              </CaseStudies>
            </AdverseEffects>
          </PositiveEffect>
        </Definition>
      </Home>
    </>
  )
}

export default App

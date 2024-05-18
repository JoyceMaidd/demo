import React from 'react'

const NavButtons = ({nextStep, prevStep, step}) => {
  return (
    <div>
      {step>1 && <button onClick={prevStep}>Back</button>}
      <button onClick={nextStep}>{step===3 ? "Generate" : "Next"}</button>
    </div>
  )
}

export default NavButtons
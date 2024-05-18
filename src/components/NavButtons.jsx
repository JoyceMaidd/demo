import React from 'react'

const NavButtons = ({nextStep, prevStep, step}) => {
  return (
    <div className="flex gap-3">
      {step>1 && <button onClick={prevStep}>Back</button>}
      <button onClick={nextStep} className='text-white bg-[#106D24] font-medium rounded-lg text-base px-5 py-2'>{step===3 ? "Generate" : "Next"}</button>
    </div>
  )
}

export default NavButtons
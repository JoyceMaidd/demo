import React from 'react'

const NavButtons = ({nextStep, prevStep, step, handleSubmit, disabled}) => {
  return (
    <div className="flex gap-3">
      {step > 1 && <button onClick={prevStep}>Back</button>}
      {step < 3 && <button onClick={nextStep} className='text-white bg-[#106D24] opacity-80 hover:opacity-100 font-medium rounded-lg text-base px-5 py-2'>Next</button>}
      {step == 3 && <button type='submit' disabled={disabled} onClick={handleSubmit} className='text-white bg-[#106D24] opacity-80 hover:opacity-100 font-medium rounded-lg text-base px-5 py-2'>Submit</button>}
    </div>
  )
}

export default NavButtons
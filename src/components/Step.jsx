import React from 'react'

const Step = ({number, title, currentStep}) => {
  const isActive = number === currentStep
  return (
    <div className={'flex p-10 w-100 h-40 items-left justify-start'}>
        <h3 className={'font-extrabold text-3xl'} style={{ color: isActive ? '#4A7353' : '#BACD92' }}> Step {number}: {title}</h3>
    </div>
  )
}

export default Step
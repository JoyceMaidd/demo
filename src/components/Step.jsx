import React from 'react'

const Step = ({number, title, currentStep}) => {
  const isActive = number === currentStep
  return (
    <div className={'flex p-10 w-100 h-40 items-left justify-start'}>
        <h3 className={'font-extrabold text-3xl'} style={{ color: isActive ? '#106D24' : '#BACD92' }}> Step {number}: {title}</h3>
    </div>
  )
}

export default Step
import React from 'react'
import {Step, FileUpload, NavButtons, ReviewProfile, JobDetails} from '../components'
const WorkSpace = (props) => {
  const [currentStep, setCurrentStep] = React.useState(1)
  
  const nextStep = () => {
    if(currentStep<4){
      setCurrentStep(currentStep+1)
    }
  }
  const prevStep = () => {
    if(currentStep>1){
      setCurrentStep(currentStep-1)
    }
  }
  return (
    <div>
      <div>
        <Step number={1} title={"Upload Resume"} currentStep={currentStep} />
        <Step number={2} title={"Review Profile"} currentStep={currentStep} />
        <Step number={3} title={"Job Details"} currentStep={currentStep} />
      </div>
        { currentStep == 1 && <FileUpload />} 
        { currentStep == 2 && <ReviewProfile />} 
        { currentStep == 3 && <JobDetails/>}
        <NavButtons nextStep={nextStep} prevStep={prevStep} step={currentStep}/>
      
        
    </div>
    
  )
}

export default WorkSpace
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
    <div className="flex pb-10 justify-center px-40 pt-[100px]">
      <div className="w-full">
        <Step number={1} title={"Upload Resume"} currentStep={currentStep} />
        <Step number={2} title={"Review Profile"} currentStep={currentStep} />
        <Step number={3} title={"Job Details"} currentStep={currentStep} />
      </div>
      <div className="flex flex-col justify-center w-full gap-5">
        <form className="flex min-h-64 border-4 rounded-md p-4">
          { currentStep == 1 && <FileUpload />}
          { currentStep == 2 && <ReviewProfile />} 
          { currentStep == 3 && <JobDetails/>}
        </form>
        <NavButtons nextStep={nextStep} prevStep={prevStep} step={currentStep}/>
      </div>
    </div>
  )
}

export default WorkSpace
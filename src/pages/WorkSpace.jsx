import React from 'react'
import {Step, FileUpload, NavButtons, ReviewProfile, JobDetails} from '../components'
const WorkSpace = (props) => {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [sending, setSending] = React.useState(false)
  const [status, setStatus] = React.useState("")
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    workExperience: '',
    jobTitle: '',
    companyName: '',
    jobDescription: ''
  })
  const [resume, setResume] = React.useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    data.append("resume", resume);

    setSending(true);
    setStatus("Sending...");
    fetch("http://127.0.0.1:8080/api/receive_form", {
        method: "POST",
        body: data
    }).then((response) => response.json()).then((data) => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          workExperience: '',
          jobTitle: '',
          companyName: '',
          jobDescription: ''
        });
        setSending(false);
        setStatus(data.message);
        setTimeout(() => setStatus(""), 5000);
      })
      window.open("/generatedletter", "_self")
  }
  
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
    <div className="flex justify-center py-40 px-40">
      <div className="w-full">
        <Step number={1} title={"Upload Resume"} currentStep={currentStep} />
        <Step number={2} title={"Review Profile"} currentStep={currentStep} />
        <Step number={3} title={"Job Details"} currentStep={currentStep} />
      </div>
      <div className="flex flex-col justify-center w-full gap-5">
        <form className="flex min-h-64 border-4 rounded-md p-4" onSubmit={handleSubmit}>
          { currentStep == 1 && <FileUpload setResume={setResume} />}
          { currentStep == 2 && <ReviewProfile setFormData={setFormData} />} 
          { currentStep == 3 && <JobDetails setFormData={setFormData}/>}
        </form>
        <NavButtons nextStep={nextStep} prevStep={prevStep} step={currentStep} handleSubmit={handleSubmit} disabled={sending}/>
        <p>{status}</p>
      </div>
    </div>
  )
}

export default WorkSpace
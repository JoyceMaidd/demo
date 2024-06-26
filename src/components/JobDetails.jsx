import React from 'react'

const JobDetails = ({setFormData}) => {
    
    return (
      <div className="w-full">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Job Details</h2>
  
        <div className="mt-6">
          <div className="sm:col-span-3">
            <label for="job-title" className="block text-sm font-medium leading-6 text-gray-900">Job Title</label>
            <div className="mt-2">
              <input type="text" name="job-title" id="job-title" onChange={(e) => setFormData(prevState => ({...prevState, jobTitle: e.target.value}))} className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label for="company-name" className="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
            <div className="mt-2">
              <input type="text" name="company-name" id="company-name" onChange={(e) => setFormData(prevState => ({...prevState, companyName: e.target.value}))} className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label for="companyAddress" className="block text-sm font-medium leading-6 text-gray-900">Company Address</label>
            <div className="mt-2">
              <input type="text" name="companyAddress" id="companyAddress" onChange={(e) => setFormData(prevState => ({...prevState, companyName: e.target.value}))} className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label for="hm-name" className="block text-sm font-medium leading-6 text-gray-900">Hiring Manager's Name</label>
            <div className="mt-2">
              <input type="text" name="hm-name" id="hm-name" onChange={(e) => setFormData(prevState => ({...prevState, companyName: e.target.value}))} className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
  
          <div className="sm:col-span-4">
            <label for="jobdescription" className="block text-sm font-medium leading-6 text-gray-900">Job Description</label>
            <div className="mt-2">
              <textarea name="jobdescription" id="jobdescription" rows="5" onChange={(e) => setFormData(prevState => ({...prevState, jobDescription: e.target.value}))} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none overflow-auto"></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default JobDetails
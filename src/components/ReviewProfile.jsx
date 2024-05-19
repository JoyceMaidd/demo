import React from 'react'

const ReviewProfile = ({setFormData}) => {
  return (
  <div className="w-full">
    <h2 className="text-lg font-semibold leading-7 text-gray-900">Profile</h2>

    <div className="mt-6">
      <div className="sm:col-span-3">
        <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
        <div className="mt-2">
          <input type="text" name="first-name" id="first-name" onChange={(e) => setFormData(prevState => ({...prevState, firstName: e.target.value}))} autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="sm:col-span-3">
        <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
        <div className="mt-2">
          <input type="text" name="last-name" id="last-name" onChange={(e) => setFormData(prevState => ({...prevState, lastName: e.target.value}))} autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="sm:col-span-4">
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" onChange={(e) => setFormData(prevState => ({...prevState, email: e.target.value}))} autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-4">
        <label for="workexperience" className="block text-sm font-medium leading-6 text-gray-900">Work Experience</label>
        <div className="mt-2">
          <textarea name="workexperience" id="workexperience" onChange={(e) => setFormData(prevState => ({...prevState, workExperience: e.target.value}))} autocomplete="workexperience" rows="5" className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none overflow-auto"></textarea>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ReviewProfile
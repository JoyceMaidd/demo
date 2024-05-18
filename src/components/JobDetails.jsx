import React from 'react'

const JobDetails = () => {
    
    return (
        <form>
        <div class="space-y-12">
          <div class="pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Job Details</h2>
      
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="job-title" class="block text-sm font-medium leading-6 text-gray-900">Job Title</label>
                <div class="mt-2">
                  <input type="text" name="job-title" id="job-title" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
      
              <div class="sm:col-span-3">
                <label for="company-name" class="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
                <div class="mt-2">
                  <input type="text" name="company-name" id="company-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
      
              <div class="sm:col-span-4">
                <label for="jobdescription" class="block text-sm font-medium leading-6 text-gray-900">Job Description</label>
                <div class="mt-2">
                  <textarea name="jobdescription" id="jobdescription" rows="5" class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none overflow-auto"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };

export default JobDetails
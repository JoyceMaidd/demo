import React from 'react'

const LetterGenerate = ({ letter }) => {
  return (
    <div className='flex place-content-center w-full pt-24'>
        <textarea name="generateBox" className='block w-[75vw] h-[75vh] p-4 rounded-md border-0 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none overflow-auto'>
          {letter}
        </textarea>
    </div>
  )
}

export default LetterGenerate
import React from 'react'

export const Header = () => {
  return (
    <section className="my-[2rem] mx-[1.5rem] md:mx-[6rem]">
        <h1 className='font-bold text-4xl text-gray-800 dark:text-gray-100'>SHIM API</h1>
        <h2 className='font-semibold text-lg text-gray-800 dark:text-gray-100 mt-[0.5rem]'>
            Inventory interaction across applications
        </h2>
        <p className='mt-[0.5rem] text-sm md:text-base text-gray-800 dark:text-gray-100'>
            SHIM API enables fellow developers to create applications that can interact with SHIM's database such as retrieving or creating data.
        </p>
    </section>
  )
}

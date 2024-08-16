import React from 'react'
import { BentoGrid } from '../partials/Home/BentoGrid'

export const Home = () => {
  return (
    <section className="mx-auto w-[100%] h-screen flex flex-col items-center">
        <div className='flex justify-center items-center flex-col py-[3rem]'>
          <h1 className="text-4xl font-bold text-center dark:text-gray-100">Storage Solutions</h1>
          <p className="text-center text-lg dark:text-gray-100 font-semibold w-[80%]">Easily manage your home's inventory with our application.</p>
        </div>

        <BentoGrid />
    </section>
  )
}

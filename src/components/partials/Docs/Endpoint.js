import React from 'react'

export const Endpoint = (props) => {
  return (
    <section className="my-[2rem] mx-[1.5rem] md:mx-[6rem]">
        <h1 className='font-bold text-3xl text-gray-800 dark:text-gray-100'>API Endpoints</h1>
        {/* End Points */}
        {
            props.endpoints.map((route) => {
            return (
                <>
                {/* Header section */}
                <div className='dark:text-gray-100 py-1'>
                    <h1 className='font-semibold py-[1rem] md:text-xl'>
                    <span className='category align-middle'>{route.category}</span>
                    &nbsp;&nbsp;&nbsp;
                    {route.name}
                    </h1>
                    <h1 className={'mr-[0.5rem] route '}>
                        <span className={'mr-[0.5rem] method w-fit ' + route.method}>{route.method}</span>
                        {route.route}
                    </h1>

                    <h1 className='pt-[1rem] dark:text-gray-500'>{route.desc}</h1>
                </div>

                {/* Query params and Response codes section */}
                <div className='flex flex-col md:flex-row'>
                    <div className='md:order-last md:ml-[5rem]'>
                    <h1 className='pt-[1rem] dark:text-gray-500 font-semibold text-xl'>Query Parameter(s)</h1>
                    <div className='pt-[1rem]'>
                    {route.parameters.map((para) => {
                        return (
                        <>
                            <div className='flex'>
                            <p className='param mb-[0.5rem]'>{para.name}</p>
                            <p className='dark:text-gray-500'> &nbsp; - {para.desc}</p>
                            </div>
                        </>
                        )
                    })}
                    </div>
                    </div>

                    <div>
                    <h1 className='pt-[1rem] dark:text-gray-500 font-semibold mb-[1rem] md:text-xl'>Response Codes</h1>
                    {route.response_codes.map((code) => {
                        return (
                        <div className='flex flex-col justify-center'>
                            <div className='flex'>
                            <p className={"r_code " + code.type}>{code.code}</p> 
                            &nbsp;
                            <p className='dark:text-gray-500 font-semibold text-sm md:text-lg md:font-medium'>{code.code_desc}</p>
                            </div>

                            <p className='dark:text-gray-600 mb-[0.5rem]'>{code.desc}</p>
                        </div>
                        )
                    })}
                    </div>
                </div>
                </>
            )
            })
        }
    </section>
  )
}

import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { Guides } from './components/pages/Guides'
import { Docs } from './components/pages/Docs'

import { Navbar } from './components/Navbar'

import { Analytics } from '@vercel/analytics/react'

function App() {
    document.body.classList.add('dark:bg-gray-900')
    document.body.classList.add('bg-gray-100')

    useEffect(() => {
        document.title = 'Inventory Manager'
    }, [])

    return (
        <>
        <div>
            <Navbar />
        
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/guides' element={<Guides />}></Route>
                <Route path='/docs' element={<Docs />}></Route>
            </Routes>
        </div>
        
        <Analytics />
        </>
    )
}

export default App;
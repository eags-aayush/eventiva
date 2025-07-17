import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <div>
                <section className='flex flex-col items-center justify-center h-screen'>
                    <h1 className='text-4xl font-bold'>Welcome to Eventiva</h1>
                    <p className='text-lg mt-4'>Discover the best events and experiences in your city</p>
                </section>

                <section className='flex flex-col items-center justify-center h-screen bg-black'>

                </section>
            </div>
            <Footer />
        </>
    )
}

export default Home

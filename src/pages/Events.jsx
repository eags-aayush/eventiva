import { useState } from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

const Events = () => {

  const [isSubmitting, setisSubmitting] = useState(false)
  const onSubmitHandler = (e) => {
    setisSubmitting(true)
    e.preventDefault()
    setTimeout(() => {
      setisSubmitting(false)
    }, 2000);
  }

  return (
    <>
      <Navbar />
      <div className='p-5'>
        {/* search section */}
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
          <div className='flex flex-col md:flex-row gap-5'>
            <section className='flex flex-col gap-3 md:w-1/3'>
              <label htmlFor="text">Search</label>
              <input required className='p-3 py-1 rounded-lg ring ring-offset-4 ring-blue-500' type="text" name="text" id="text" />
            </section>

            <section className='flex flex-col gap-3 md:w-1/3'>
              <label htmlFor="category">Category</label>
              <select className='p-3 py-1.5 rounded-lg ring ring-offset-4 ring-blue-500' name="category" id="category">
                <option value="aaa">aaa</option>
                <option value="bbb">bbb</option>
                <option value="ccc">ccc</option>
              </select>
            </section>

            <section className='flex flex-col gap-3 md:w-1/3'>
              <label htmlFor="date">Date</label>
              <input className='p-3 py-1 rounded-lg ring ring-offset-4 ring-blue-500' type="date" name="date" id="date" />
            </section>
          </div>

          <button type="submit"
            disabled={isSubmitting}
            className={`font-bold rounded-xl p-3 py-1 w-full md:w-fit m-auto ${isSubmitting ? 'text-black cursor-not-allowed' : 'text-white bg-blue-500 hover:bg-blue-600 cursor-pointer'}`}
          >
            {isSubmitting ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Events

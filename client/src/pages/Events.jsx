import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const events = [
  {
    id: 1,
    category: 'Music',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHEAjQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAD4QAAIBAgQEAwUFBgUFAQAAAAECAwQRAAUSIQYTMUEiUWEUcYGRoTJzscHwFSMzNELRUmJyguEHNZLC8Tb/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAlEQACAgEEAgICAwAAAAAAAAABAgADEQQSITEiQRMyFJFRYaH/2gAMAwEAAhEDEQA/APHFW+JBGfLDogLi/TGqo8op6nhuszGJyZaR0EkYHRWuA3uuLfHAW27McT0NPpxYCScTJlLYdGOo88SzjxWGIV2OKUk7rg4jdNtsOVcTpA0jWUdcdaMpsRvhilc4mGtgu71IwMLTfE8SX6jE/sxsDY4uSksMiLyJS0YRQ4IpQSMmpVuPdiGSBlNiLHDDQQOpxGJRK2w0ri0Y/TEbRnEzV4mZkFt8NI3xNbfDT1whhNEbGlzh0vWwxMq6Uv3PTDTETvY4SxxxGCsnqViMNIxOyWw0Lvge4JUiSRKW6dcbngOnaQZxldRdP2hQFE1AjxXupHnufrih/wBPeGxn2cqlULUMPina9r9LJ7zv8sHqPPRm3/UaSppW0UcScmmRBayKBYD5E/HCXVi3EpV0CEHuebMxJubjbvhl98Gc6y504izCkpoz4Kp1RAO2o2t6YHVFO8EhjlXS4Nip6jHp16SwrkCTM2TLuTZo+WVUVVHHG7KfsyLqU+hGNrV8P5VxLl/7U4aR6epA1TUBbUAbbhe977jz7eWPOV2DD0uMajgnPP2ZmEYLNaVgjAgWAJG/v6fIYnNOxt47jPld12fxLsXBuaq0IakcCbTpJFhYmw+pxpMv4QpoYKqLMqxYKqBSeUV6tc+EHv8ADzwT4orJK2FK+GdmNMpMkXXwf41A9b3918VuH4aiSnmz6SJmiWxhsxuFH2nIPotgd+58seqNUPh3A4iRSezC+TZTktDQvS5wY0q2hvpHVevX/N29LYz9Pw9lub1VU4lSljRCUUXYMR2GAtauc1GZzBaSTmHTdQhFlJKj5kW8yfXE1AuaxMUMU5ZgbIqEBu32h1sbfHAJf2S3JlBoyJPPwFUyU0NTTWeKUhRv4r2udvIb/LGe4p4WqchmEVVYPa+xwYOfGmbkVLmKSNvEtmNjcHbb6+vfAniHN1zIiapkkc3C8xW1dvX898HZbn7RX4rjmZRxa5wqeLmSqp6E7469jcg3BawNrXxapoWiAdlOp/s7dvPELrnkTE7xGvH+9022U2xpqbhoTcOTZqssZWIgMgO4v0Puxc4t4eXKsty6XkN7RLTLLUN2W5Nlv52GB3Bmbx0OdrS5gpky6sRqSpSxPgfuPiFx5N1VtwDLxPWqtroHHOZmahQrEYhsME+IMrqMozSahqLF42srjo69mHvwMYb232xVWvjzILXBY4nrlFSfsbhaOhjkjhqa0KjzMb6Cw3Yi3YD6jATh3Koss4pDaVqaRJ+W0sbWTT2Fjub2JJ7beeK/FeYyTyzTQywvFTro086NjvsTYG9jcjz7d8V4lqLxtFJLLIrgyRu++ny32vv3xTS1YBDdnMWtTEFjNbmL0uX8UVNTRxpqmkWpD6RqBNujN2vfp2xRrqqmzOqZ66FHgEpeQyBWIJtq9SLeWAnGqrNDRZhTzkqV5LGMkD+oqfMbXHw9cZymhie7SNL/AOdsP+S11GG9Yj01NaDBSFM/yEftyZ6BqV8veXVHJC3gEZ+fQe/AuOhFLm0tMJC7Qht17sOwxocmyzJpKHVOY0JY8zm1wS62I+zoPvvgfR0VRVZ5PFTxa5GYoBzbhexJYgbAA72+GJzXauSxzOT4iy4Hc1vAs00kEvtzHlUzosZQEFyf6L9hYbnqMWuNc2zCgy6okoHjakqVEc0Sm3I1LpG2xttsenY3xTq5vYqmloqSQGOliQq3RXkbdjcjcG3X0HbDWL5hR1CSpHJA7KOTIQVSxvpZlsQeh2JthtNipaC3UXYpZiFEyMfFeZIAspWcCYS/vGfqLWGzDYEBh674anFWarDJGaln1lWDsxulj/Tvbfvtv1674t5pw/FCz1MZZaSaQiILc8pu6E26jt5j44DQ5U8mpjIAtyAALk279Rbri+7XU18ED9CYumtPIHc7UZpJPHAjxQ/uk0BrEFhtbUb72AAHoMTVME5y+RplCWKMqAWBv+Jtvgnw/wAJx5tS1skdZrnhhMkcUUbliRfZvDYdu/fD6tjNlTPErSIyA60Oynz+mIdZdv2sD+o/TAlXRvQnct4Rra7JlzKPlCmisG1SAEk7/gRjZ5VwtlNfSUtI7l64yoGMe8ax9SLn0BxQ4azFBwxHHzZ43YsC8EKHSq9jZb72vvft8HcLZrTzZjV1KNWMlJTO16hrMWJCdFNv6jthY1SuGRexFDThEDv76hLjusnzCuqaH2g+xDR4Onitfbz2NvgOmMvV8L0T5asuX1jT1ZmKJEF0kp11ddj6Yp8UZlI+cVarV+FXK6Sg2th9EGWi9pzRwsA8SAXFzbqR+vyPV2mtArDIjMUuoHIIhnizLGzPhjL85kjeOohQQzXFhJYbH1Ox+GPPgoUnuT1x6hw/m7ZtT1WTVNQWpZKdo4dRsqE9Pntv6YwRpvZ6iaGaku6PpKsDdfTcYQHBB2xZp2ttaVq1/Z3PMuVIMkoH9W+y+64ucT0FZKcrkq1Yow2LmwBPr+umK3EEcsMCe0RyLK/hHMQqWF73scXuG6P2yPLqYIW59SiOAt7LqBYn0ABxyqCeJt9h3kA8TZ1XCed12SNS/s9ufIFkjBdRY2XY3O2xbFPJOB6vL+IKOm4gp4AlRFK6I8gZfDbrb1YY9Ghra6vqqRjIKOGZZCJYoybr4b3J2Xtv7/LFDNsirGnppciqEqq2jDI7VMtwquNRa5PU7fTFFfjhSZ5zWH1MZxbw/FlmaqoaNae4JSK1gNPT53+eNHwBkFBT0vtEsqLJVglJXFtCC42v3NzjJZek1bncaZhaRWdhMvpe52/2/XE8eeSVLXMaqo8QjjvpUAXsMN24ByZWWbCqJJxjPT5VPUxUwLkGwlB7e/49vLAnh2skrQ1NQwvdQpc8q4BOw6eZHoLA4GcStUyGOaYAQys4j8zpIBwc4QoJaLh+pzBwGhr5Y0iA3vyy+rpv1YbbdMKFKEjMx9RYqkCWqihrXpKihqIJomZWqY3e4IZRbyN1PpvjOx5PmlNqkcR8tTq0kE3G263X3eXTHqk2WigraKrhWmCAF5nlUeHSTtuSRsffthZzn1HHTw1TQGOiqZ9DyP4C6EkFr/L6YI7XUKRmTjV3o2VnjdJmctLWmSkMsZIsSjFCet9x6Y9Ey2hyUcKF3l0vJdfZ0FyoI67+/HaHIOEpI4ainhrKppafn25pNiWAAtcdCSPhgJTQTQJMDEypDKRpYHZb2t641KauBzKadXZaT6MsZTBDDRaaTmPE0rAySeHTt1A+Q64rcMUBpchzCsnBRKioSFWbYMoOon3XA+uJclknmhuN4on08tNJIv3IO9rnr6Y3VZS5TFkRgqqjTPSxMFZ9y9+4+OIhR8dthHuV3Xh6U/qeM19FWV+YVMwiIGth42sTbt+tsWqYzfsmqjzNZbRC8altAexUaQfcSbj0xv63hGWiq3eumnqQ5H8uLMWvYjUQQB0Nz1uemBvE/C1ZleWVRncSqFdrW2QaRvfz8/d1wpDcH5Xxgt+OEwreUymTVkrUrVFOuhqd/sqbnTtYeosTb1GCvF8jJNSV/ILGsh1SeI/bU2Y3732+uA/CwL0Fcii8qMHjubXaxHuPxxo6KmFfllPCHhSSEljrTqGAtbb/ACnD9LUVclhkRpt8EcHnHMw+bSiWnvIAsqThTpUC4sxvb4423/T6akoV9sqKpI9FFIiqEuxdmAFgNybatsAKvKWrXqpvZmKhgbgnw+p/XXB3haSkoaCeSZUvAkXKRxd3Ott073Fx0Pv2xS1RVzPOc55mpzBs+p6Gip6duXRorK0zhP3V28BI9Bbbp09caPhbLmlVM4ra12lkTTKpOzHY+4dANuwHnjPUVTmC5uisJg7UqyPE6+Im240jzPUYtQ5o7xZVS2RIjIFOjYE+XphpyVwItqgzCPz3k5dV1clJAyCeJ1gpoUbXI++onSNRA6+X0xnuDqeljzEQZlQzSs4vyAh1D4eWNDHUO+ZZxmAe7QQosduiIS1yvvAF/ccWBmUOl66WohaT2QqkRH7073Jvf7PuH5W4kgbYaLgZnnPFuWq2bPDFR1cA0ySLE0Zuu507epwbpJaCg4UybLauqCT6XblFPGGdtViLjSN+p7C+LtXmkIz/ACOqc6NSzJokuwJOmzL5MD9L4j4tdMzyip52lWppY3Quegvut/8AMNvl6Y5hnEw1ZOT6gHPMxq4YMspUmfeANpWXUouF21AgEg3NwO+I6GFainqqOdw7VcKOrk20sWsFv0G529++O5zTipoaKbLqijDxpcxmoQ6G0qLAsb/0i398bPKnhocsoVkSPXJCgeR0B1DqAe9gTsMAgKtkQQpYYgag4TlpbU9NPzG5gMrNIVSOME2BA2JO1uv541mYR5ZT5SlD7K/txXdQpYyW3uLdb2wE4cqsvhgzEBgKoTlTAZAWUAtt1uQLEX9BglGs8uYZXmcJCCMSpPa2ox6W0/Xb0vg8kYIm1r2TMvkZnyyqqpp6d4BGRJHDNEUZmNwGFwDbqfI2xs6Xh2g4jigzGshmh5ygPHE+hSR1FvIjywPzI1mZ5PV01PEaiWSZUiDkAruGPiPopwTpMxGTrFRmoQU9LGJJp5GuGN7XFr2F8BZk9dwnU44MIcRUlLDlmYmeodOapl5jAEhlsQBf/SNv74C5xmNLWcHVa0kjyrGrI5mHia4IHTvYi2CWfzrmWUzxMRZwB4Dci5FiD6EdD2BxhshFXBJnFJmSk0scYeUm/wDiAte4vsxPXywpU8cmTB8zGcGQCQVhc6kXQW0np1/XxwSj3VlepjiVWOlWcAfC+FJmGV0sc1NlFC1IsyqGLSFmJA6m5Pn0wOmmhlYk36/4gMWIVFYHuWLuwM9R9Jmb1EhZioCCzXNjvi29PJMghYARkr9vYrc2xk2duYGjbSqMCXI337364IUmZyQtHI6a9VtJvtfULX69gevnhP5C2faZ11NP7XPluU1DpWVXtKkU8cwmOtbtqsCdwNItizwlmklW0dLUO8ggdXjLyFiBZifr69cY6auatEomssSHmNYk2cra/u22Hri7TZpHlihcsaT2hlKtMbWJuu4BG22pfjfABhkkHibvGMY5m7/a2UJlrpQTrPV1UUja0BIYDUbE726fP1NsAq3MDQ8RU0VS4kinAp5ARuFHhsLbdTjM5ZmIo2oquRGblRlSFA7q1vnsSffiCurJar2NiLSRLqawt4tRJPU36XxpsEFQAIZzXMXgzONqdpC8CgAg9Lkn8/wwTzrM+flRKMLVHKvZf8pNj8cY6sq5Ja6WUPpVmLKdN7r0HXttgtlNdl5qKEZormmiBcqV8LtrUaTtuNN+mFqxBb/I1mXbmEYYKI0pAy+skqGChB7Yqx9CSTYE79QLDr8TdyXM3kkmpKgMI4OWqRudRQBrEarC/vtiDMuJaSTiuaem5CULS2Wp5Jaw0hQ5Rt9jc26/TAiozKmjzJ5KWVpNMJUzsSTKRchjfe5sOvp64cGxJqy27y6kkGZtBnLVDBrGpZm3uCGY9+/U74P5k3KNDm6VqwtSkxaLfxV1mw1dvtH/AIxg3ll0DxJsNgFtb9b4ITZk/MjUDWhVNUbLcarX/G+OrIDece5yOJtOJc35KCoLS8qV4/HA2l08L9D23HfqLjFV641fBk82vmNBA1NK5/r3Gkj/AMh18jjO5nma5hk4jm2qIn1qUVvEVHe3vYXOL9FxBlMFG8M0LyRSqiyRR7Ei9/d/99ME2zceYO7Hqdi43rYJg0VLAHClSJNTKVIsb7jEtfxfm0xWhqzAvtGl5hDCFZr9AxvcmxvbtfATNJconl50ckyFHIRCoPhG4v1/tscURV6Z5m1iqZyWMjDS4JPn1Hf5+uJmPPeZw2EfWXKwlpiUvc2YA7G3pgdIJdW6hT38JNz5/ryxJ7SNRnLOG/pNy2oAnz3327+eLXt0DSMGSBwApvI5QglRceu/fAizHU1mJGIGSnqVp5Zb+BNLagQ21jtby/thkIcurRSFVKEnVZdgOnX3YlWSMUnOi1H98utWO67H6EE4hpoEk8InHKYm19iDba/vwk8TMSUMJFCJDp0qWlJf7Xz6b2+WOwzSCmmdYyBcdDYgE36/L5+mKb1HOLXVY7LbYet8K5RCFfUpZRbsbC4x2fcDMt0snNmp1qg/ITZTc+Eddt+/w3OJQVEV9Tb+JNRtuCLdenb9HA3xxyaZOusEi+J1YPAI9V3juRfvva3y/DG5nAy1LzSsel5GiJ2YR7IehX6fq+GM6LGmoBh3AJ6jbcdsPR5401yxvy2IVhq8Ldetvh8sPpoY542STUWKDRoF7m9t7kW6WxoMIyk02xtGt+zEtf8AG2LNEBVFySkSoACbkD08/XBWLLYTSOslGA0QsZuaCxJB7X7WPy92BFIslPFKUseYqgbdjve3ywRJ9zgAJ2qqF02UnUFB1XsQQP7k4lSrQU8IniJ5djJ4jqNx4beVv12OIKd1E8bTBAqXLFkve57j18sdkq4hmBanjZWAtEu/Ujvc3J38+uBzMM5z5qaYjdVUdCLX7fPDo5Fug06mQaSGOx2/LbEDRzT+O7PIx1PrYC47dfjhqEpIY2fTKuyv293/ADgTwZ2TJppY5KhhF4EYAANa4Uev9sMhmKJLJvpGwvvc+fwF8M9nBqVhZ/CvVl3vvbHWZaiTllrRhidYGw9cdkzRJJGWMRrsV5RYjcAkn/jEdVLJNKP3SpoUKEQ9MSVssBmkaBmKv4VHTSgAsD8sVkrmheRkRSzm7Fhe+O6mExo/kT95+WGxfy7f6vyx3CxjTf4kc38R/fh6fwF+8/LCwsdAEkqP4sP3a/hh9D/MR/6jhYWOne5Yb+A/+pvzxfyf7En35/8AbCwsGsNe5zLf/wBHmH3Mn5YfH/IL9xH/AOuFhY0zYOk/iVH3n5jEVL/3mL79fxwsLAwDGVn2v9q/icdm/iT/AO3CwsbZ9jOkif8Acfj+eKsX8Cf7xfzwsLAicZCv2jjnc45hYwwZ/9k=',
    title: 'Sunburn Goa',
    performer: 'Martin Garrix',
    description: 'Asia’s biggest EDM festival returns with explosive performances, stunning visuals, and unforgettable vibes.',
    date: '2025-12-27',
    venue: 'Vagator Beach, Goa',
    duration: '6 hours',
    price: '1200',
  },
  {
    id: 2,
    category: 'Music',
    image: 'data:image/webp;base64,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',
    title: 'NH7 Weekender',
    performer: 'Prateek Kuhad & The Local Train',
    description: 'India’s happiest music festival featuring indie, rock, and fusion artists across multiple stages.',
    date: '2025-11-15',
    venue: 'Mehboob Studios, Mumbai',
    duration: '5 hours',
    price: '2500',
  },
  {
    id: 3,
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
    title: 'Comic Con Delhi',
    performer: 'Cosplayers, Artists & Celebs',
    description: 'India’s biggest pop-culture event with cosplay contests, comic launches, and celebrity panels.',
    date: '2025-09-21',
    venue: 'NSIC Grounds, Delhi',
    duration: '8 hours',
    price: '1800',
  },
]

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
      {/* search section */}
      <div className='md:px-10 p-5'>
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

            <section className='flex flex-col gap-3 w-full md:w-1/3'>
              <label htmlFor="date">Date</label>
              <input className='p-3 py-1 rounded-lg ring ring-offset-4 ring-blue-500' type="date" name="date" id="date" />
            </section>
          </div>

          <button type="submit"
            disabled={isSubmitting}
            className={`font-bold rounded-xl p-3 py-1 w-full m-auto ${isSubmitting ? 'text-black cursor-not-allowed' : 'text-white bg-blue-500 hover:bg-blue-600 cursor-pointer'}`}
          >
            {isSubmitting ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      <div className='h-0.5 w-5/6 bg-blue-100 m-auto my-5 md:my-10'></div>

      {/* events section */}
      <div className='flex flex-col gap-5 md:px-10 p-5'>
        {events.map(({ id, image, title, performer, description, date, venue, duration, price }) => (
          <div
            key={id}
            className='pb-5 md:p-0 md:pr-10 cursor-crosshair flex flex-col md:flex-row gap-5 md:gap-10 rounded-lg w-full shadow-lg'
          >
            <img
              src={image}
              alt={title}
              className='md:w-1/3 rounded-lg rounded-b-none md:rounded-lg md:rounded-r-none'
            />
            <div className='w-full flex flex-col gap-5 px-5 md:py-5 md:px-0'>
              <span className='font-bold'>{title} • {performer}</span>
              <span>{description}</span>
              <span>{date} • {venue}</span>
              <span>{duration}</span>
              <button className='bottom-0 p-2 font-bold text-white rounded-lg bg-blue-500 cursor-pointer'>₹{price} / person</button>
            </div>
          </div>
        ))}

      </div>

      <Footer />
    </>
  )
}

export default Events

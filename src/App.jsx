/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import './App.css'
import ProfileImage from './assets/avatar-jessica.jpeg'

function App() {

  const items = [
    {
      'title' : 'GitHub',
      'url' : 'https://github.com'
    },
    {
      'title' : 'Frontend Mentor',
      'url' : 'https://FrontendMentor.io'
    },
    {
      'title' : 'LinkedIn',
      'url' : 'https://linkedin.com/'
    },
    {
      'title' : 'Twitter',
      'url' : 'https://x.com'
    },
    {
      'title' : 'Instagram',
      'url' : 'https://Instagram.com'
    },
  ]

  return (
    <main>
      <section className='flex flex-col items-center mb-6 gap-6'>
        <img src={ProfileImage} alt="Profile image" className='rounded-full w-[88px]' />
        <div>
          <h1 className='text-White text-2xl sm:mb-1 font-semibold leading-[150%]'>Jessica Randall</h1>
          <h2 className='text-NeonGreen text-sm font-bold leading-[150%]'>London, United Kingdom</h2>
        </div>
        <p className='text-White text-sm leading-[150%]'>"Front-end developer and avid reader."</p>
      </section>

      <section>
        <ul className='flex flex-col gap-4'>
        {
          items.map((item,i) =>
          <a href={item.url} target='_blank' key={i} className='bg-Grey p-3 hover:bg-NeonGreen cursor-pointer hover:text-Grey rounded-lg text-White leading-[150%] text-sm font-bold text-center'>
            <li>
              {item.title}
            </li>
          </a>
          )
        }
        </ul>
      </section>
    </main>
  )
}

export default App

//import Head from 'next/head'
import Image from 'next/image'
import profile from '../public/profile.png'
import Coffee from '../components/coffee'
import LightBulb from '../components/lightbulb'
import { useContext } from 'react'
import { ThemeContext } from '../provider'

export default function Home() {
  const theme = useContext(ThemeContext)

  const click = () => {
    if (theme.state.darkMode) {
      theme.dispatch({ type: 'LIGHTMODE' })
    } else {
      theme.dispatch({ type: 'DARKMODE' })
    }
  }

  return (
    <>
      <style global jsx>
        {`
          .img-border {
            border: 10px dashed #ad8fdb !important;
          }
        `}
      </style>
      <nav className="flex justify-between mx-2 mt-3 mb-8 lg:mx-25 lg:mt-25 lg:mb-175 h-14">
        <Coffee />
        <div className="flex flex-row ">
          <a
            href="https://github.com/a-ferraro007"
            className="self-end mr-3 text-3xl font-medium font-display text-primary-text lg:mr-10 dark:text-ice-white"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            github{' '}
          </a>
          <LightBulb />
        </div>
      </nav>
      <main>
        <div className="flex flex-col-reverse px-10 lg:justify-center lg:flex-row">
          <div className="lg:self-center lg:mr-28 lg:max-w-528 ">
            <h1 className="text-4xl font-semibold font-display text-primary-text dark:text-dark-mode-text lg:text-64">
              {' '}
              Anthony Ferraro
            </h1>
            <span className="text-lg lg:text-2xl text-primary-text dark:text-ice-white font-secondary">
              {' '}
              Frontend Engineer
            </span>
            <p className="mt-4 mb-8 text-xl font-medium lg:text-3xl font-display dark:text-dark-mode-text text-primary-text">
              {' '}
              {`Hi 👋, I'm Anthony, a Frontend Engineer from New Haven, CT. Currently
              working at Digital Surgeons.`}{' '}
            </p>
            <a
              href="mailto:adferra24@gmail.com"
              className="px-8 py-2 font-normal transition duration-300 border-2 hover:bg-transparent font-display text-primary-light bg-primary-text rounded-img hover:text-primary-text border-primary-text dark:bg-dark-mode-cta dark:border-dark-mode-cta dark:hover:bg-dark-mode-text dark:hover:border-dark-mode-text dark:hover:text-primary-dark-mode"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              {`Let's Talk!`}
            </a>
          </div>

          <div className="self-center mb-10 w-52 md:w-72 lg:w-80 lg:mb-0 border-8 border-primary-border border-dashed rounded-img-container p-1 dark:border-dark-mode-text">
            <Image
              className=" rounded-img"
              alt="Overly dramatic picture of me eating a cookie."
              src={profile}
              layout="responsive"
              height="131"
              width="88"
            />
          </div>
        </div>
      </main>
    </>
  )
}

//import Head from 'next/head'
import Image from 'next/image'
import profile from '../public/profile.png'
import { Coffee, LightBulb } from '../components/SVG'
//import { LightBulb } from '../components/LightBulb'

export default function Home() {
  return (
    <>
      <style global jsx>
        {`
          .img-border {
            border: 10px dashed #ad8fdb !important;
          }
        `}
      </style>
      <nav className="flex justify-between mx-2 mt-3 lg:mx-25 lg:mt-25 mb-175 h-14">
        <Coffee />
        <div className="flex flex-row ">
          <a
            href="https://github.com/a-ferraro007"
            className="self-end font-medium font-display text-primary-text lg:text-3xl lg:mr-10"
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
        <div className="flex flex-col-reverse lg:justify-center lg:flex-row">
          <div className="mb-12 lg:self-center lg:mr-28 lg:max-w-528 "
          >
            <h1 className="font-semibold font-display text-primary-text lg:text-64">
              {' '}
              Anthony Ferraro
            </h1>
            <span className="text-2xl text-primary-text font-secondary">
              {' '}
              Frontend Engineer
            </span>
            <p className="mt-4 mb-8 text-3xl font-medium font-display text-primary-text">
              {' '}
              {`Hi 👋, I'm Anthony. Frontend Engineer from New Haven, CT. Currently
              working at Digital Surgeons.`}{' '}
            </p>
            <a
              href="mailto:adferra24@gmail.com" className="px-8 py-2 transition duration-500 border-2 hover:bg-transparent font-display text-primary-light bg-primary-text rounded-img hover:text-primary-text border-primary-text"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              {`Let's Talk!`}
            </a>
          </div>

          <div className="w-52 lg:w-96">
            <Image
              className="border-8 border-blue-400 border-dashed rounded-img img-border"
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

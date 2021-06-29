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
      <nav className="flex h-14 px-10 justify-between">
        <Coffee />
        <div className=" flex flex-row">
          <a
            href="https://github.com/a-ferraro007"
            className="self-end font-display text-primary-text font-medium lg:text-3xl lg:mr-10"
            target="_blank"
          >
            {' '}
            github{' '}
          </a>
          <LightBulb />
        </div>
      </nav>
      <div className="lg:justify-center flex lg:flex-row mt-14">
        <div className=" lg:self-center lg:mr-28 lg:max-w-528 mb-12">
          <h1 className="font-display text-primary-text lg:text-64 font-semibold">
            {' '}
            Anthony Ferraro
          </h1>
          <span className="text-2xl text-primary-text font-secondary">
            {' '}
            Frontend Engineer
          </span>
          <p className="font-display text-3xl font-medium text-primary-text mt-4 mb-8">
            {' '}
            Hi 👋, I'm Anthony. Frontend Engineer from New Haven, CT. Currently
            working at Digital Surgeons.{' '}
          </p>
          <a className="font-display text-primary-light bg-primary-text rounded-img px-8 py-2">
            {' '}
            Let's Talk!
          </a>
        </div>

        <Image
          className=" rounded-img img-border border-8 border-dashed border-blue-400"
          src={profile}
          height="450"
          width="305"
        />
      </div>
    </>
  )
}

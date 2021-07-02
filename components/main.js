import Image from 'next/image'
import profile from '../public/profile.png'

const Main = () => {
  return (
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
          <p className=" px-2 mt-4 text-2xl font-medium lg:text-3xl font-display dark:text-dark-mode-text text-primary-text">
            {' '}
            {`Hi 👋, I'm Anthony!`}{' '}
          </p>

          <div className="px-2">
            <p className="mt-4 text-xl font-medium lg:text-2xl font-display dark:text-dark-mode-text text-primary-text">
              {' '}
              {`💻 `}
              <a
                className="ml-3"
                href="https://www.digitalsurgeons.com/"
                target="_blank"
                rel="noreferrer"
              >
                Digital Surgeons
              </a>{' '}
            </p>
            <p className=" mt-2 mb-8 text-xl font-medium lg:text-2xl font-display dark:text-dark-mode-text text-primary-text">
              {' '}
              📍 <span className="ml-3"> New Haven, CT</span>{' '}
            </p>
          </div>

          <a
            href="mailto:adferra24@gmail.com"
            className="px-8 py-2 font-normal transition duration-300 border-2 hover:bg-transparent font-display text-primary-light bg-primary-text rounded-img hover:text-primary-text border-primary-text dark:bg-dark-mode-cta dark:border-dark-mode-cta dark:hover:bg-dark-mode-text dark:hover:border-dark-mode-text dark:hover:text-primary-dark-mode block text-center lg:w-1/2"
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
  )
}

export default Main

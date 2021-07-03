import Coffee from '../components/coffee'
import LightBulb from '../components/lightbulb'
import Steam from '../components/steam'

const NavBar = () => {
  return (
    <nav className="flex justify-between mx-2 mt-3 mb-8 lg:mx-25 lg:mt-25 lg:mb-175 h-14">
      {/*<Steam />
      <Coffee />*/}
      <div className="self-end">
        <span
          className=" text-xl block font-display text-primary-text dark:text-ice-white
        lg:leading-3 lg:text-3xl font-semibold"
        >
          Anthony
        </span>
        <span className="text-xl lg:text-3xl block font-display px-4 text-primary-text dark:text-ice-white lg:leading-8 font-semibold leading-3">
          Ferraro
        </span>
      </div>

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
  )
}

export default NavBar

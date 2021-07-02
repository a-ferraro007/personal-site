import Coffee from '../components/coffee'
import LightBulb from '../components/lightbulb'
import Steam from '../components/steam'

const NavBar = () => {
  return (
    <nav className="flex justify-between mx-2 mt-3 mb-8 lg:mx-25 lg:mt-25 lg:mb-175 h-14">
      {/*<Steam />
      <Coffee />*/}
      <div className="self-end">
        <span className="block font-display text-primary-text dark:text-ice-white leading-3 text-3xl font-medium">
          Anthony
        </span>
        <span className="text-3xl block font-display px-4 text-primary-text dark:text-ice-white leading-8 font-medium">
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

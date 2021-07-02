import Coffee from '../components/coffee'
import LightBulb from '../components/lightbulb'

const NavBar = () => {
  return (
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
  )
}

export default NavBar

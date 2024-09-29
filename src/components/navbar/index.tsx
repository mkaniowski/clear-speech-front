import logo from '../../assets/logo.png'

export interface INavbarRoute {
  label: string
  onClick: () => void
}

export interface INavbar {
  routes?: INavbarRoute[]
}

const Navbar = () => {
  return (
    <div className='w-full bg-slate-300 h-16 flex justify-between items-center'>
      <div className='w-16 h-16 bg-slate-900'>
        <img
          src={logo}
          alt='logo'
        />
      </div>
      <div className='flex space-x-2 mr-4'></div>
    </div>
  )
}

export default Navbar

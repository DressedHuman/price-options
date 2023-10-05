import PropTypes from 'prop-types'
import { IoClose } from 'react-icons/io5'
import { HiMenuAlt4 } from 'react-icons/hi'

const NavBar = ({ routes, handleOpenMenu, open }) => {
    return (
        <nav>
            <div className="text-2xl p-2">
                <button className='md:hidden' onClick={handleOpenMenu}>
                    {
                        open ? <IoClose /> : <HiMenuAlt4 />
                    }
                </button>
                <div>
                    <ol className={`bg-[goldenrod] shadow-lg
                      shadow-black absolute md:static md:opacity-100 left-7 md:left-0 rounded-xl p-5 font-semibold text-base text-white duration-[800ms] ease-linear ${open ? "opacity-90 top-9" : "opacity-0 -top-60"} md:flex md:w-full justify-between`}>
                        {
                            routes.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li>)
                        }
                    </ol>
                </div>
            </div>

        </nav>
    );
};

NavBar.propTypes = {
    routes: PropTypes.array,
    open: PropTypes.bool,
    handleOpenMenu: PropTypes.func,
}

export default NavBar;
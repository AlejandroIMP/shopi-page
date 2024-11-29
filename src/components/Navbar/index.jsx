import { NavLink } from 'react-router'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'
          onClick={() => context.setSearchByCategory('')}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => context.setSearchByCategory('')}
            >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => context.setSearchByCategory('clothes')}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => context.setSearchByCategory('electronics')}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/fornitures'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => context.setSearchByCategory('forniture')}
          >
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Food'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => context.setSearchByCategory('Food')}
          >
            Food
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => context.setSearchByCategory('others')}
            >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          ola@ola.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>

        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
          </NavLink>
        </li>
        <li className='flex'>
          <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav >
  )
}

export default Navbar

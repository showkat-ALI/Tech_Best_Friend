import { Fragment,useEffect } from 'react'
import Image from 'next/image'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, MapPinIcon, UserIcon, ArrowsUpDownIcon, HomeIcon } from '@heroicons/react/24/outline'
import arrow from '../../../assets/arrow.png'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link';
import { useLogoutMutation } from '../../../feature/api/authApi';
import { useAppDispatch } from '../../../app/hooks'
import { logout as logoutAction } from '../../../feature/auth/authSlice'
import { toast } from 'react-toastify'
import Router from 'next/router'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]



function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

 const [logout,{isSuccess,isError,error}] = useLogoutMutation();
 const dispatch = useAppDispatch(); 
 const logoutHandler = () => {
    logout({});
    console.log('logout success')
 }

 useEffect(() => {
  if (isSuccess) {
      toast.success("Logged out successfully!");
      setTimeout(() => {
          Router.push("/")
          dispatch(logoutAction());
      }, 1500)
  } else if (isError) {
      toast.error("Something went wrong while logging out!");
      console.log("logout error", error);
  }
}, [isSuccess, isError])

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#',clickHandler:logoutHandler},
  ]
  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="pl-14 pr-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center divide-x-2">
                  <div className="flex-shrink-0 pr-3">
                    <Link href="/dashboard"><a>Home</a></Link>
                  </div>
                  <div className="hidden md:block px-3">
                    <Link href={'/'}>
                      <a className="flex gap-3">
                        <HomeIcon className='h-5 w-5' />
                        <h3>Home</h3>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex divide-x-2">
                    <div className="relative">
                      <input type="text" placeholder='Search' className='py-2 rounded px-4' />
                      <BsSearch className='absolute right-2 top-3 font-bold text-lg' />
                    </div>
                    <div className="pl-4 flex items-center gap-3 md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none "
                      >
                        <span className="sr-only">View notifications</span>
                        <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                      </button>


                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ">
                        <div>
                          <Menu.Button
                            className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none ">
                            <span className="sr-only">Open user menu</span>
                            <UserIcon className="h-4 w-4" aria-hidden="true" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    onClick={item.clickHandler}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <button
                        type="button"
                        className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none"
                      >
                        <span className="sr-only">View notifications</span>
                        <ArrowsUpDownIcon className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <Image className="h-10 w-10 rounded-full" src={arrow} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}

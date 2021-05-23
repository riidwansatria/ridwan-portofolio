import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '/src/images/logo.png'
import ContactIcons from '../components/contactIcons'

const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto mt-6 px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-left h-24">
                <div className="flex-none sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 sm:justify-start align-middle">
                  <div className="flex-none">
                    <a href="/">
                      <img
                        className="inline mx-4 h-16 w-16"
                        src={logo}
                        alt="Logo"
                      />
                    </a>
                  </div>

                  <div className="flex flex-1 object-left">
                    <div className="hidden sm:flex sm:flex-grow sm:ml-6">
                      <div className="flex flex-none space-x-0">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-200',
                              'px-3 py-2 my-auto rounded-md text-base uppercase items-center font-semibold tracking-wider'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="flex flex-grow my-auto">
                        <ContactIcons/>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'flex text-gray-800 hover:bg-gray-200',
                      'inline px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
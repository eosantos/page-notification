import { Menu, Bell } from 'lucide-react'
import Image from 'next/image'
import logoProz from '../assets/logo-proz.svg'
import avatarTheacher from '../assets/avatar-teacher.svg'

export function Header() {
  return (
    <header className="mx-auto flex items-center justify-between bg-violet-700 px-4 py-4">
      <div className="flex items-center">
        <div className="ml-8 mr-4">
          <Menu className="w-18 text-white " />
        </div>
        <div className="mr-4">
          <Image src={logoProz} alt="Proz" />
        </div>
      </div>
      <div className="mr-16 flex items-center">
        <button className="mr-4 p-2 text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none">
          <Bell className="h-6 w-6 rounded-full bg-white fill-violet-700 p-1" />
        </button>
        <div className="flex items-center">
          <Image src={avatarTheacher} alt="Proz" />
          <span className=" ml-4 font-medium text-white">
            <h1 className="font-light">João da Silva</h1>
            <span>Professor</span>
          </span>
        </div>
      </div>
    </header>
  )
}

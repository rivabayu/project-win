import React, {useState} from 'react'
import classNames from 'classnames'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../data/constants'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { MdAnalytics} from 'react-icons/md'


const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-sm lg:text-base'

function Sidebar() {
    const[isOpen ,setIsOpen] = useState(true);
    const {pathname} = useLocation()
    
  return (
    <div className={`${isOpen ? "w-60" : "w-20"} p-3 bg-neutral-900 flex flex-col h-screen justify-between text-white transition-all duration-300`} >
        <div className='flex-col flex'>
            <div className='text-xl font-semibold flex items-center px-1 py-4 gap-2'>
                <MdAnalytics
                 onClick={() => setIsOpen(!isOpen)}
                 fontSize={34} className='text-blue-500 cursor-pointer relative '/> 
                 
                    <span className={`${!isOpen && "hidden"} duration-200`}>
                        OpenData
                    </span>
                
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<Link
                        to={link.path}
                        className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
                    >
                        <span className="text-xl">{link.icon}</span>
                        <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                            {link.label}
                        </span>
                    </Link>
				))}
			</div>
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<Link
                        to={link.path}
                        className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
                    >
                        <span className="text-xl">{link.icon}</span>
                        <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                            {link.label}
                        </span>
                    </Link>
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
                    <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
                            Logout
                        </span>
				</div>
			</div>
    </div>
  )
}

function SidebarLink({ link }) {
	const {pathname} = useLocation()
	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}

export default Sidebar
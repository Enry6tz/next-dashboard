import Image from "next/image"
import { IoBrowsersOutline, IoCalculator, IoFolderOpen } from "react-icons/io5"
import { SidebarMenuItem } from "./SidebarMenuItem"

const menuItems = [
    {
        path:'/dashboard/main',
        icon:<IoBrowsersOutline size={40}/>,
        title: 'Dashboard',
        subTitle: 'visualizacion',
    },
    {
        path:'/dashboard/counter',
        icon:<IoCalculator size={40}/>,
        title: 'Counter',
        subTitle: 'Contador Client Side',
    },
    {
        path:'/dashboard/pokemon',
        icon:<IoFolderOpen size={40}/>,
        title: 'Pokemons',
        subTitle: 'Generador Estatica',
    }
]
export const Sidebar = () => {
    return (

        <div
            style={{ width: '400px' }}
            id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">InsighTs<span className="text-blue-500">iT</span>.</h1>
                <p className="text-slate-500 text-sm">Data Science</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8"
                            src="https://unavatar.io/enry6tz"
                            width={50}
                            height={50}
                            alt="User Avatar"
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Enrique Seitz
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
            {
                menuItems.map(item  => (
                    <SidebarMenuItem 
                        key={item.title}
                        {...item}
                    />
                ))
            }
            </div>
        </div>

    )
}

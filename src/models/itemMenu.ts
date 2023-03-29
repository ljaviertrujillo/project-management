import {MdSpaceDashboard, MdOutlineHome, MdOutlineFolderOpen, MdSettings} from 'react-icons/md'
import { TbLayoutBoard } from 'react-icons/tb'
import { RiTeamLine } from 'react-icons/ri'
import { PrivateRoutes } from './routes'

export interface ItemInterface {
    id: number,
    icon: React.ElementType,
    label: string,
    url: string,
}

export const features: ItemInterface[] = [
    {
        id: 1,
        icon: MdOutlineHome,
        label: 'Home',
        url: '/',
    },
    {
        id: 2,
        icon: MdSpaceDashboard,
        label: 'Dashboard',
        url: PrivateRoutes.DASHBOARD,
    },
    {
        id: 3,
        icon: MdOutlineFolderOpen,
        label: "Projects",
        url: PrivateRoutes.PROJECTS,
    },
    {
        id: 4,
        icon: TbLayoutBoard,
        label: 'Tasks',
        url: PrivateRoutes.TASKS,
    },
    {
        id: 5,
        icon: RiTeamLine,
        label: 'Team',
        url: PrivateRoutes.TEAM,
    },
]

export const settings: ItemInterface[] = [
    {
        id: 6,
        icon: MdSettings,
        label: 'Settings',
        url: PrivateRoutes.SETTINGS,
    }
]


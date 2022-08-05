import {MdNotifications,MdPeople} from 'react-icons/md';
import {RiMessage3Fill,RiHome4Fill} from 'react-icons/ri';
import {FaAddressCard,FaChartArea,FaChartLine,FaWpforms} from 'react-icons/fa';

export const Notification =[
    {
        id:1,
        name:'message',
        icon:<RiMessage3Fill />
    },
    {
        id:2,
        name:'notification',
        icon:<MdNotifications />
    }
]

export const Navbars=[
    {
        id:1,
        icon:<RiHome4Fill/>
    },
    {
        id:2,
        icon:<MdPeople/>
    },
    {
        id:3,
        icon:<FaChartArea/>
    },
    {
        id:4,
        icon:<FaChartLine/>
    },
    {
        id:5,
        icon:<FaWpforms/>
    },
    {
        id:6,
        icon:<FaAddressCard/>
    },
]
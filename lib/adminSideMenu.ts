
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MuseumOutlinedIcon from '@mui/icons-material/MuseumOutlined';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ImageIcon from '@mui/icons-material/Image';
import { SvgIconComponent } from '@mui/icons-material';

export type SubMenuItem = {
    name: string;
    link: string;
    visible?: boolean
}
export type MenuItem = {
    id?: number;
    text: string;
    icon: SvgIconComponent;
    submenu: SubMenuItem[];
    link?: string;
};


export const mainListItems: MenuItem[] = [
    {   id: 1,
        text: 'Home', 
        icon: HomeOutlinedIcon, 
        submenu: [
            { name: "Upcoming Event", link: "/upcoming-event" }, 
            // { name: "Object of the month", link: "#" }, 
        ],
    },
    { id: 2, text: 'Calendar', icon: CalendarMonthOutlinedIcon, 
        submenu: [
            { name: "Calendar List", link: "/calendar-list"},
            { name: "Add calendar", link: "/calendar/add"},
        ],  
    },
    {   id: 3,
        text: 'Exhibitions', 
        icon: MuseumOutlinedIcon, 
        submenu: [
            { name: "Exhibition List", link: "/exhibitions-list"},
            { name: "Add exhibition", link: "/exhibition/add"},
            { name: "Edit", link: "/exhibition/edit/", visible: false},
        ] 
    },
    { 
        id: 4,
        text: 'Explore', 
        icon: PeopleRoundedIcon, 
        submenu: [
            { name: "Explore List", link: "/explore-list" },
            { name: "Add Explore", link: "/explore-list/add" },
        ], 
        link: "explore-list" 
    },
    { id: 5, text: 'Banner', icon: ImageIcon, submenu: [], link: "/banner" },
];
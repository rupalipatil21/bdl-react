import banner1 from "@/public/menu-banner/museum-statement-bannernew.jpg"
import banner2 from "@/public/menu-banner/museum-story-bannernew.jpg"
import banner3 from "@/public/menu-banner/museum-trust-bannernew.jpg"
import banner4 from "@/public/menu-banner/directors-note-bannernew.jpg"
import banner5 from "@/public/menu-banner/restoration-main-bannernew.jpg"
import banner6 from "@/public/menu-banner/museum-expansion-bannernew.jpg"
import banner7 from "@/public/menu-banner/about-Newsletter.jpg"

import visit1 from "@/public/menu-banner/visit-museum-bannernew.jpg"
import visit2 from "@/public/menu-banner/tickets-bannernew.jpg"
import visit3 from "@/public/menu-banner/accessibility.jpg"
import visit4 from "@/public/menu-banner/Take-a-Tour-banner.jpg"
import visit5 from "@/public/menu-banner/audioguide-bannernew.jpg"
import visit6 from "@/public/menu-banner/shop-bannernew.jpg"
import visit7 from "@/public/menu-banner/cafesnew.jpg"
import visit8 from "@/public/menu-banner/Museum-Policies-banner.jpg"

import exhibition1 from "@/public/menu-banner/exhibition-banner-current-eckart.jpg"
import exhibition2 from "@/public/menu-banner/exhibition-banner-current.jpg"
import exhibition3 from "@/public/menu-banner/exhibition-banner-current-1.jpg"

import collection1 from "@/public/menu-banner/Galleries-banner-thumbnail.jpg"
import collection2 from "@/public/menu-banner/collection-bannernew.jpg"
import collection3 from "@/public/menu-banner/library-bannernew.jpg"

import learn1 from "@/public/menu-banner/school-bannernew.jpg"
import learn2 from "@/public/menu-banner/colleges-bannernew.jpg"
import learn3 from "@/public/menu-banner/adult-bannernew.jpg"
import learn4 from "@/public/menu-banner/family-bannernew.jpg"
import learn5 from "@/public/menu-banner/inters-bannernew.jpg"
import learn6 from "@/public/menu-banner/private-bannernew.jpg"

import explore1 from "@/public/menu-banner/events-prog-banner.jpg"
import explore2 from "@/public/menu-banner/museumplaza-bannernew.jpg"
import explore3 from "@/public/menu-banner/intach-bannernew.jpg"
import explore4 from "@/public/menu-banner/googlartsculture-bannernew.jpg"

import course1 from "@/public/menu-banner/course-page-bannernew.jpg"
import course2 from "@/public/menu-banner/film-Lecture-Series-Bannernew.jpg"
import course3 from "@/public/menu-banner/film-Lecture-Series-jethu-mundulnew.jpg"



import { StaticImageData } from "next/image"

const now = new Date();
const month = String(now.getMonth() + 1).padStart(2, "0");
const year = now.getFullYear();

export const CURRENT_MONTH_YEAR = `${month}/${year}`;

type MenuItem = {
  name: string;
  url: string;
  img: StaticImageData
};

type SubMenu = {
  firstColumn: MenuItem[] | null;
  secondColumn: MenuItem[] | null;
};

interface Menu {
  id: number;
  name: string;
  url: string;
  hasSubMenu: boolean;
  defaultImg: StaticImageData
  subMenu: SubMenu
}

export const Menus: Menu[] = [
    { id: 1, name: "Home", url: "/", hasSubMenu: false, defaultImg: banner1, subMenu: { firstColumn: [], secondColumn: [] } },
    { 
        id: 2, 
        name: "About", 
        url: "/about", 
        hasSubMenu: true, 
        defaultImg: banner1,
        subMenu: {
            firstColumn: [
                { name: "Mission Statement", url: "/about/mission-statement", img: banner1 },
                { name: "Museum story", url: "/about/museum-story", img: banner2 },
                { name: "Museum Trust", url: "/about/museum-trust", img: banner3 },
                { name: "DIRECTOR’S NOTE", url: "/about/directors-note", img: banner4 }
            ],
            secondColumn: [
                { name: "Museum Restoration", url: "/about/restoration", img: banner5 },
                { name: "Museum EXPANSION", url: "/about/museum-expansion", img: banner6 },
                { name: "Newsletter", url: "/about/newsletter", img: banner7 }
            ],
        }

    },
    { 
        id: 3, 
        name: "Visit", 
        url: "/visit", 
        hasSubMenu: true, 
        defaultImg: visit1,
        subMenu: {
            firstColumn: [
                { name: "DIRECTIONS", url: "/visit/#directions", img: visit1 },
                { name: "TIMINGS & TICKETS", url: "/visit/#timings", img: visit2 },
                { name: "ACCESSIBILITY", url: "/visit/#accessibility", img: visit3 },
                { name: "TAKE A TOUR", url: "/visit/#accessibility", img: visit4 }
            ],
            secondColumn: [
                { name: "AUDIO GUIDE", url: "/visit/#audio", img: visit5 },
                { name: "SHOP", url: "/visit/#audio", img: visit6 },
                { name: "CAFE", url: "/visit/#cafe", img: visit7 },
                { name: "MUSEUM POLICIES", url: "/visit/#musuempolicy", img: visit8 }
            ],
        }
    },
    { 
        id: 4, 
        name: "Exhibitions", 
        url: "/exhibitions", 
        hasSubMenu: true, 
        defaultImg: exhibition1,
        subMenu: {
            firstColumn: [
                { name: "Current", url: "#", img: exhibition1 },
                { name: "Upcoming", url: "#", img: exhibition2 },
                { name: "Past", url: "#", img: exhibition3 }
            ],
            secondColumn: [],
        }
    },
    { 
        id: 5, 
        name: "Collections", 
        url: "/collections", 
        hasSubMenu: true, 
        defaultImg: collection1,
        subMenu: {
            firstColumn: [
                { name: "Galleries", url: "/collections/galleries", img: collection1 },
                { name: "Collection stories", url: "/collections", img: collection2 },
                { name: "Library & research", url: "/collections/library-n-research", img: collection3 }
            ],
            secondColumn: [],
        }
    },
    { 
        id: 6, 
        name: "Learn", 
        url: "/learn", 
        hasSubMenu: true, 
        defaultImg: learn1,
        subMenu: {
            firstColumn: [
                { name: "Schools & NGOs", url: "/learn/school-and-ngos", img: learn1 },
                { name: "Colleges & Young Adults", url: "/learn/colleges-and-young-adults", img: learn2 },
                { name: "Adult Learners", url: "/learn/adult-learning", img: learn3 }
            ],
            secondColumn: [
                { name: "Families", url: "/learn/families", img: learn4 },
                { name: "Interns & Docents ", url: "/learn/interns-and-docs", img: learn5 },
                { name: "Private Groups", url: "/learn/private-groups", img: learn6 }
            ],
        }
    },
    { 
        id: 7, 
        name: "Explore", 
        url: "/explore", 
        hasSubMenu: true, 
        defaultImg: explore1,
        subMenu: {
            firstColumn: [
                { name: "Events & Programmes", url: "/explore", img: explore1 },
                { name: "Museum Plaza & Garden", url: "/explore/museum-plaza-and-garden", img: explore2 },
                { name: "Conservation Lab", url: "/explore/conlab", img: explore3 },
                { name: "Google Arts & Culture", url: "/explore/google-arts-project", img: explore4 }
            ],
            secondColumn: [],
        }
    },
    { 
        id: 8, 
        name: "Courses", 
        url: "/course", 
        hasSubMenu: true, 
        defaultImg: course1,
        subMenu: {
            firstColumn: [
                { name: "PG Diploma Course", url: "/course", img: course1 },
                { name: "FILM LECTURES BY RICHARD Peña", url: "/course/film-lecture-by-richard-pena", img: course2 },
                { name: "FILM LECTURES BY JETHU MUNDUL", url: "/course/film-lecture-by-jethu-mundul", img: course3 }
            ],
            secondColumn: [],
        }
    }
]

export const MegaMenuData = 
{
    firstColumn: [
        { name: "Mission Statement", url: "#", img: banner1 },
        { name: "Museum story", url: "#", img: banner2 },
        { name: "Museum Trust", url: "#", img: banner3 },
        { name: "DIRECTOR’S NOTE", url: "#", img: banner4 }
    ],
    secondColumn: [
        { name: "Museum Restoration", url: "#", img: banner5 },
        { name: "Museum EXPANSION", url: "#", img: banner6 },
        { name: "Newsletter", url: "#", img: banner7 },
    ],
    thirdColumn: { img: "" }
}

export const sidebarMenu = [
    {
        about: [
            { item: "Mission Statement", url: "/about/mission-statement"},
            { item: "Museum Story", url: "/about/museum-story"},
            { item: "Museum Trust", url: "/about/museum-trust"},
            { item: "Director's Note", url: "/about/directors-note"},
            { item: "Museum Restoration", url: "/about/restoration"},
            { item: "Museum Expansion", url: "/about/museum-expansion"},
            { item: "Newsletter", url: "/about/newsletter"},
        ],
        visit: [
            { item: "Directions", url: "/visit/#directions"},
            { item: "Timings and Tickets", url: "/visit/#timings"},
            { item: "Accessibilty", url: "/visit/#accessibility"},
            { item: "Take a Tour", url: "/visit/#taketour"},
            { item: "Audio Guide", url: "/visit/#audio"},
            { item: "Shop", url: "/visit/#shop"},
            { item: "Cafe", url: "/visit/#cafe"},
            { item: "Museum Policies", url: "/visit/#musuempolicy"},
            { item: "Photography Guidelines", url: "/visit/#photography"},
        ],
        calendar: [
            { item: "Exhibitions", url: "/calendar/#exhibitions"},
            { item: "Events & Programmes", url: "/calendar/#event_programms"},
            { item: "Learn", url: "/calendar/#learn"},
        ],
        explore: [
            { item: "Events & Programmes", url: "/explore"},
            { item: "Film Programmes", url: "/explore/film-programmes"},
            { item: "Performances", url: "/explore/performances"},
            { item: "Public Lectures", url: "/explore/public-lectures"},
            { item: "Museum Katta", url: "/explore/museum-katta"},
            { item: "Crafts Mela", url: "/explore/crafts-mela"},
            { item: "Museum Plaza & Garden", url: "/explore/museum-plaza-and-garden"},
            { item: "Conservation Lab", url: "/explore/conlab"},
            { item: "Google Art Project", url: "/explore/google-arts-project"},
        ],
        course: [
            { item: "PG Diploma Course", url: "/course" },
            { item: "Film lectures by richard pena", url: "/course/film-lecture-by-richard-pena" },
            { item: "Film lectures by jethu mundul", url: "/course/film-lecture-by-jethu-mundul" }
        ],
        collections: [
            { item: "Galleries", url: "/collections/galleries" },
            { 
                item: "Collections Stories", 
                url: "/collections",
                subItem: [
                    {item: "Mumbai (Bombay) History", url:"/collections/bombay-history"},
                    {item: "Trade and Cultural Exchange", url:"/collections/trade-n-cultural-exchange"},
                    {item: "Early Modern Period", url:"/collections/early-modern-period"},
                    {item: "Modern and Contemporary", url:"/collections/modern-contemporary"},
                ]
            },
            { item: "Library & Research", url: "/collections/library-n-research" },
        ],
        learn: [
            { item: "Schools & NGOs", url: "/learn/school-and-ngos" },
            { item: "Colleges & Young Adults", url: "/learn/colleges-and-young-adults" },
            { item: "Adult Learners", url: "/learn/adult-learning" },
            { item: "Families", url: "/learn/families" },
            { item: "Interns & Docents", url: "/learn/interns-and-docs" },
            { item: "Private Groups", url: "/learn/private-groups" },
        ],
        friendsofmuseum: [
            {item: "", url: ""}
        ]
    }
]

export const trustee = [
    {name: "", post: "Mayor of Mumbai & Chairperson"},
    {name: "Shri. Bhushan Gagrani", post: "Municipal Commissioner of Mumbai & Co-Chairman"},
    {name: "Shri. Amit Saini", post: "Additional Municipal Commissioner (Eastern Suburbs)"},
    {name: "Smt. Ashwini Joshi", post: "Addl. Municipal Commissioner (City)"},
    {name: "Shri. Abhijit Bangar", post: "Addl. Municipal Commissioner (Project)"},
    {name: "", post: "Chairman, Standing Committee"},
    {name: "", post: "Chairman, Improvements committee"},
    {name: "", post: "Chairperson, Women & Child Welfare Committee"},
    {name: "Late Shri. Rahul Bajaj", post: "Former Chairman Jamnalal Bajaj Foundation & Donor Trustee"},
    {name: "Shri. Niraj Bajaj", post: "Director Bajaj Group & Donor Trustee"},
    {name: "Smt. Minal Bajaj", post: "Director Jamnalal Bajaj Foundation & Donor Trustee"},
    {name: "Late Shri. Shyam Benegal", post: "Film Maker"},
    {name: "Dr. Jyotindra Jain", post: "Former Dean, School of Art & Aesthetics, JNU, New Delhi"},
    {name: "Shri. Suhas Bahulkar", post: "Artist"},
    {name: "Shri. Pradip Shah", post: "Financial Advisor"},
    {name: "Smt. Pheroza Godrej", post: "Art Historian"},
    {name: "Shri. Rajan Jayakar", post: "Solicitor"},
    {name: "Smt. Tasneem Mehta", post: "Former Vice Chairperson, INTACH & Managing Trustee & Hon. Director"},
]

export const architects = [
    {text1: "AL_A: Lead Architect, Amanda Levete ", text2: "with PK Das, Arup, Turner & Townsend, GROSS. MAX and Superflux"},
    {text1: "Studio Mumbai Architecture: Lead architect, Bijoy Jain ", text2: "+ Edifice Consultants with Sterling Engineering Consultancy Services and Eskayem Consultants."},
    {text1: "Nieto Sobejano Arquitectos: Lead architect, Enrique Sobejano Garcia ", text2: "with Malik Architecture, Arup and Empty"},
    {text1: "OMA + S&K: Lead Architect , Rem Koolhaas ", text2: "with Meinhardt India, Houtman + Sander, GMD Consultants and Langdon Seah"},
    {text1: "Pei Cobb Freed & Partners Architects: Lead architects, Mr Jay Berman ", text2: "with Christopher Charles Benninger Architects (CCBA), Leslie E. Robertson Associates International (LERA), Buro Happold, WORKSHOP: Ken Smith Landscape Architect and George Sexton Associates"},
    {text1: "Steven Holl Architects: Lead Architect , Steven Holl ", text2: "with Opolis Architects, Guy Nordenson and Associates, AECOM, Dongre Project Management Consultants, Transsolar and L'Observatoire"},
    {text1: "WHY: Lead architect, Kulapat Yantrasast ", text2: "with Ganti + Associates, Sterling Engineering, Sterling and Wilson, Magnusson Klemencic Associates, Buro Happold, Local Projects and Quantsoft India"},
    {text1: "Zaha Hadid Architects: lead architect, Zaha Hadid ", text2: "with Sameep Padora Associates (sP+a), AKT II, Max Fordham, Dan Pearson Studio and AECOM"},
]

export const jury = [
    {text2: "Mr Sitaram Kunte – Chair of Jury, the Municipal Commissioner of Mumbai and Co- Chairman, Trustee of the Museum", text3: "The Jury awarded AL_A, led by Amanda Levete, an honourable mention for the quality of their scheme and presentation. An exhibition of all shortlisted entries is on display at the Museum until Dec 31, 2014."},
    {text2: "Mrs Mehta – Deputy Chair of Jury, the Managing Trustee & Honorary Director of the Museum."},
    {text2: "Mrs Minal Bajaj, a Director of Bajaj Auto Ltd. and a Donor Trustee of the Museum"},
    {text2: "Late Shri. Shyam Benegal, a Trustee of the Museum and a prolific filmmaker"},
    {text2: "Dr Homi Bhabha, Director of the Mahindra Humanities Center at Harvard as well as the Anne F. Rothenberg Professor of the Humanities in the Department of English"},
    {text2: "Dr Vishakha Desai, the Special Advisor for Global Affairs and Professor of Professional Practice in the Faculty of International and Public Affairs at Columbia University"},
    {text2: "Mr Rajiv Jalota, the Additional Municipal Commissioner, Projects, M.C.G.M.,and Trustee of the Museum"},
    {text2: "Mr Sen Kapadia, founder of Sen Kapadia Associates"},
    {text2: "Mr Anand Mahindra, Chairman and Managing Director of the Mahindra Group"},
    {text2: "Dr Martin Roth, the Director of the V&A Museum in London"},
    {text2: "Dr Aroon Tikekar, the former President of the Asiatic Society in Mumbai, a prolific author, journalist and authority on Mumbai",},
]

export const newsletters = [
    {img: "/about/newsletter/newsletter-05.jpg", text: "HIGHLIGHTS 2015", alt:"Newsletter 1", link: "https://www.bdlmuseum.org/newsletter/Highlights/BDL-museum-2015-highlight.php"},
    {img: "/about/newsletter/newsletter-01.jpg", text: "JUL | AUG | SEP 2014", alt:"Newsletter 2", link: "https://www.bdlmuseum.org/newsletter/Newsletter-05/bdl-museum-newsletter_2014_q3.php"},
    {img: "/about/newsletter/newsletter-02.jpg", text: "APR | MAY | JUN 2013", alt:"Newsletter 3", link: "https://www.bdlmuseum.org/newsletter/newsletter-04/bdl-museum-newsletter_2013_q4.php"},
    {img: "/about/newsletter/newsletter-03.jpg", text: "JAN | FEB | MAR 2013", alt:"Newsletter 4", link: "https://www.bdlmuseum.org/newsletter/newsletter-03/bdl-museum-newsletter_2013_q4.php"},
    {img: "/about/newsletter/newsletter-04.jpg", text: "OCT | NOV | DEC 2012", alt:"Newsletter 5", link: "https://www.bdlmuseum.org/newsletter/newsletter-02/bdl-museum-newsletter_2012_q4.php"},
]



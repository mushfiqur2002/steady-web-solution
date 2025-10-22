import Image from '../../assets/images/mushfik.png'
import WebsiteImage from '../../assets/images/website01.png'
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

interface TeamMember {
    name: string;
    path: string;
    socialLinks: {
        facebook?: string;
        linkedin?: string;
        github?: string;
        [key: string]: string | undefined;
    };
    imageUrl: string;
}

interface ProjectInfo {
    projectName: string;
    projectTechDtls: string;
    projectLiveLink: string;
    projectImage: string;
}

interface SocailLink {
    icon: React.ElementType;
    link: string;
    linkName: string;
    background: string;
    iconColor: string;
}


export const teamMembers: TeamMember[] = [
    {
        name: "Md. Mushfiqur Rahman",
        path: "Front-End Developer",
        socialLinks: {
            facebook: "/",
            linkedin: "/",
            github: "/",
        },
        imageUrl: Image
    },
    {
        name: "Jane Doe",
        path: "Front-End Developer",
        socialLinks: {
            facebook: "/",
            linkedin: "/",
            github: "/",
        },
        imageUrl: Image
    },
    {
        name: "John Smith",
        path: "Front-End Developer",
        socialLinks: {
            facebook: "/",
            linkedin: "/",
            github: "/",
        },
        imageUrl: Image
    }
];

export const projectInfo: ProjectInfo[] = [
    {
        projectName: "Restaurant Website",
        projectTechDtls: "Built with React & Tailwind",
        projectLiveLink: "https://restaurant-3-eta.vercel.app/index.html",
        projectImage: WebsiteImage
    },
    {
        projectName: "Restaurant Website",
        projectTechDtls: "Built with React & Tailwind",
        projectLiveLink: "https://restaurant-3-eta.vercel.app/index.html",
        projectImage: WebsiteImage
    },
    {
        projectName: "Restaurant Website",
        projectTechDtls: "Built with React & Tailwind",
        projectLiveLink: "https://restaurant-3-eta.vercel.app/index.html",
        projectImage: WebsiteImage
    },
    {
        projectName: "Restaurant Website",
        projectTechDtls: "Built with React & Tailwind",
        projectLiveLink: "https://restaurant-3-eta.vercel.app/index.html",
        projectImage: WebsiteImage
    },
    {
        projectName: "Restaurant Website",
        projectTechDtls: "Built with React & Tailwind",
        projectLiveLink: "https://restaurant-3-eta.vercel.app/index.html",
        projectImage: WebsiteImage
    },

];

export const socialLinks: SocailLink[] = [
    {
        icon : Facebook,
        link : '/',
        linkName: 'Facebook',
        background: '#EBEBEB',
        iconColor: '#0046FF'
    },
    {
        icon : Linkedin,
        link : '/',
        linkName: 'LinkedIn',
        background: '#EBEBEB',
        iconColor: '#0D5EA6'
    },
    {
        icon : Mail,
        link : '/',
        linkName: 'Gmail',
        background: '#F6DED8',
        iconColor: '#B82132'
    },
    {
        icon : Phone,
        link : '/',
        linkName: 'WhatsApp',
        background: '#E0FBE2',
        iconColor: '#1A5319'
    },
]





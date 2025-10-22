import { House, User, FolderOpenDot, NotebookText } from "lucide-react";

export const navLinks = [
    {
        lable: 'home',
        icon: House,
        path: '/'
    },
    {
        lable: 'about',
        icon: User,
        path: '/about-us'
    },
    {
        lable: 'projects',
        icon: FolderOpenDot,
        path: '/our-projects'
    },
    {
        lable: 'contact',
        icon: NotebookText,
        path: '/our-contacts'
    }
]
import {createRouter, createWebHistory} from 'vue-router';
import DashBoard from './views/DashBoard';
import FileList from "./components/FileList";
import NotiFication from "./components/NotiFication";
import UserProfil from "./components/UserProfil";
const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: DashBoard
    },
    {
        path: "/FileList",
        name: "Documents",
        component: FileList
    },
    {
        path: "/NotiFication",
        name: "Notification",
        component: NotiFication
    },
    {
        path: "/UserProfil",
        name: "profils",
        component: UserProfil
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
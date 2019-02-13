import Home from './components/Home';
import Agenda from './components/Agenda';
import Blog from './components/Blog';
import Partners from './components/Partners';
import Place from './components/Place'

export default [
    {
        name: 'home',
        path: '/',
        component: Home,
        meta: {
            title: 'Aktualności'
        }
    },
    {
        name: 'agenda',
        path: '/agenda',
        component: Agenda,
        meta: {
            title: 'Agenda'
        }
    },
    {
        name: 'blog',
        path: '/blog',
        component: Blog,
        meta: {
            title: 'Blog'
        }
    },
    {
        name: 'partners',
        path: '/partners',
        component: Partners,
        meta: {
            title: 'Partnerzy'
        }
    },
    {
        name: 'place',
        path: '/place',
        component: Place,
        meta: {
            title: 'Miejsce'
        }
    }
];

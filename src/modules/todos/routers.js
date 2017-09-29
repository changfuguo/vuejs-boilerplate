const Home = () => import(/* webpackChunkName: "home" */ './pages/home.vue');
const Other = () => import(/* webpackChunkName: "other" */ './pages/other.vue');
export default [
    {path: '/', component: Home, name: 'home', meta: {}},
  	{path: '/home', component: Home, name: 'home', meta: {}},
  	{path: '/other', component: Other, name: 'other', meta: {}}
];


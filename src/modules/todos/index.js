import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers.js';
import App from './app.vue';
import store from './store/index.js';
import '../../common/directives';
Vue.use(VueRouter);

window.onerror = function(e) {
    console.log(e);
};

// if(process.env.NODE_ENV == 'production'){}

const router = new VueRouter({
    mode: 'hash',
    routes
});

router.beforeEach((to, from, next) => {
    next();
});

// router.afterEach((to, from, next) => {
    
// });
setTimeout(function() {
    new Vue({
        el: '#application',
        store,
        router,
        render: h => h(App)
    });
}, 0);
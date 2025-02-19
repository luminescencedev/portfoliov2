import { createApp } from 'vue';
import { gsap } from 'gsap';
import './style.css';
import App from './App.vue';
import router from './router';
import pinia from './stores/index';


router.beforeEach((to, from,next) => {
    const app = document.querySelector('#app');
    const isInialized = app?.classList.contains('initialized');


    if (!isInialized) {
        gsap.set('.menu-bg', { height: 0 });
        app?.classList.add('initialized');
        next();
    } else {
        gsap.to('.menu-bg', { 
            height: '100vh', 
            duration: 1.5, 
            ease: 'power2.in', 
            onComplete: () => {
                gsap.set('.menu', {
                    opacity: 0,
                })
                next();
            },
        })
    }
});

router.afterEach((to, from) => {
    gsap.set('.menu-bg', {
        zIndex: 1000,
    });
    setTimeout(() => {
        gsap.to('.menu-bg', { 
            height: 0, 
            duration: 1.5, 
            ease: 'power2.out', 
            onComplete: () => {
                gsap.set('.menu-bg', {
                zIndex: 10,
                });
            },
        });
    }, 1000);
});

createApp(App).use(pinia).use(router).mount('#app')


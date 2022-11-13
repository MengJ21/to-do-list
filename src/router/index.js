import router from "./router";


router.beforeEach((to,from,next) => {
    if (to.path === '/') {
        console.log(1)
        next({ path: '/index' })
    }
})

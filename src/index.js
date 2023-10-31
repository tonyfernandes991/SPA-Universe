import { Router } from './route.js'

const router = new Router

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")

// const routes = {
//     "/": "/pages/home.html",
//     "/universe": "/pages/universe.html",
//     "/exploration": "/pages/exploration.html"
// }


router.handle()


// handle()

window.onpopstate = () => router.handle()
window.route = ( ) => router.route()
const CACHE_NAME = 'sw-cache'

const Urls = [
    'index.html',
    '.DS_Store',
    'images/user.svg',
    'images/multi-penguin.png',
    'images/game1.svg',
    'images/home.png',
    'images/leader-penguin.jpg',
    'images/temp-fon.jpg',
    'images/fon-penguin1.png',
    'images/fon2.jpg',
    'images/fon-penguin2.png',
    'images/fon.jpg',
    'images/about-penguin.jpg',
    'images/single-penguin.png',
    'images/about-penguin.png',
    'utils/constants.js',
    'utils/safe.js',
    'html/menu.html',
    'main.css',
    'main.js',
    'components/Board/Board.tmpl.js',
    'components/Board/Board.js',
    'components/Board/Board.tmpl.xml',
    'components/Board/Board.css',
    'components/SignUp/SignUp.tmpl.xml',
    'components/SignUp/SignUp.js',
    'components/SignUp/SignUp.tmpl.js',
    'components/SignUp/SignUp.css',
    'components/About/About.js',
    'components/About/About.tmpl.js',
    'components/About/About.css',
    'components/About/About.tmpl.xml',
    'components/SignIn/SignIn.tmpl.js',
    'components/SignIn/SignIn.js',
    'components/SignIn/SignIn.css',
    'components/SignIn/SignIn.tmpl.xml',
    'components/Profile/Profile.js',
    'components/Profile/Profile.tmpl.js',
    'components/Profile/Profile.tmpl.xml',
    'components/Profile/Profile.css',
    'components/Menu/Menu.tmpl.js',
    'components/Menu/Menu.tmpl.xml',
    'components/Menu/Menu.js',
    'components/Menu/Menu.css',
    'scripts/EventController.js',
    'scripts/EventBus.js',
    'scripts/Router.js',
    'backup/.DS_Store',
    'modules/UserModel.js',
    'modules/ajax.js',
    'modules/Validate.js',
    'views/SignUpView.js',
    'views/ProfileView.js',
    'views/AboutView.js',
    'views/SignInView.js',
    'views/MenuView.js',
    'views/BaseView.js',
    'views/ScoreboardView.js',
    'sw.js',

]
// this.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches
//             .open(CACHE_NAME)
//             .then((cache) => {
//                 return cache.addAll(Urls);
//             })
//     );
// });

this.addEventListener('install', (event) => {
    event.waitUntil(
        
        caches.open(CACHE_NAME)
            .then((cache) =>{
                return cache.addAll(Urls);
            })
    );
});

this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (!navigator.onLine && cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request);
            })
    )
})
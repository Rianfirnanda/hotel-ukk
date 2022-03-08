import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
        path: '/',
        component: () => import("./../views/Frontend/App"),
        children: [
            {
                name: 'home',
                path: '/',
                component: () => import('./../views/Frontend/Home2')
            },
            {
                name: 'reservasi',
                path: '/reservasi',
                component: () => import('./../views/Frontend/Reservasi')
            },
            {
                name: 'kamar',
                path: '/kamar/:id',
                component: () => import('./../views/Frontend/Kamar')
            }
        ],
    },
    {
      path: "/admin",
      component: () => import("./../layouts/full-layout/FullLayout"),
      meta: { requireAuth: true, role: 'admin' },
      children: [
        {
            name: 'admin-users',
            path: '/admin/users',
            component: () => import("./../views/Admin/UserList")
        },
        {
            name: 'admin-users-add',
            path: '/admin/users/add',
            component: () => import("./../views/Admin/UserAdd")
        },
        {
            name: 'admin-users-edit',
            path: '/admin/users/edit/:id',
            component: () => import("./../views/Admin/UserEdit")
        },
        {
            name: 'admin-kamar',
            path: '/admin/kamar',
            component: () => import("./../views/Kamar/KamarList")
        },
        {
            name: 'admin-kamar-add',
            path: '/admin/kamar/add',
            component: () => import("./../views/Kamar/KamarAdd")
        },
        {
            name: 'admin-kamar-edit',
            path: '/admin/kamar/edit/:id',
            component: () => import("./../views/Kamar/KamarEdit")
        },
        {
            name: 'admin-kamar-fasilitas',
            path: '/admin/kamar/fasilitas/:id',
            component: () => import("./../views/Kamar/KamarFasilitasList")
        },
        {
            name: 'admin-kamar-fasilitas-add',
            path: '/admin/kamar/fasilitas/add',
            component: () => import("./../views/Kamar/FasilitasAdd")
        },
        {
            name: 'admin-kamar-fasilitas-edit',
            path: '/admin/kamar/faailitas/edit/:id',
            component: () => import("./../views/Kamar/FasilitasEdit")
        },
        {
            name: 'admin-hotel',
            path: '/admin/hotel',
            component: () => import("./../views/Hotel/FasilitasList")
        },
        /*{
            name: 'admin-pemesanan',
            path: '/admin/pemesanan',
            component: () => import("./../views/Pemesanan/PemesananList")
        },
        {
            name: 'admin-pemesanan-view',
            path: '/admin/pemesanan/view/:id',
            component: () => import("./../views/Pemesanan/PemesananView")
        },*/
        {
            name: 'admin-hotel-add',
            path: '/admin/hotel/add',
            component: () => import("./../views/Hotel/FasilitasAdd")
        },
        {
            name: 'admin-hotel-edit',
            path: '/admin/hotel/edit/:id',
            component: () => import("./../views/Hotel/FasilitasEdit")
        },
        {
            name: 'profile',
            path: '/profile',
            component: () => import("./../views/Profile/ProfileEdit")
        },
        {
          name: "administrator-dashboard",
          path: "/admin/dashboard",
          component: () => import("./../views/Admin/Dashboard"),
        },
      ],
    },
    {
      path: "/resepsionis",
      component: () => import("./../layouts/full-layout/FullLayout"),
      meta: { requireAuth: true, role: 'resepsionis' },
      children: [
        {
            name: 'resepsionis-pemesanan',
            path: '/resepsionis/pemesanan',
            component: () => import("./../views/Pemesanan/PemesananList")
        },
        {
            name: 'resepsionis-pemesanan-view',
            path: '/resepsionis/pemesanan/view/:id',
            component: () => import("./../views/Pemesanan/PemesananView")
        },
        {
          name: "resepsionis-dashboard",
          path: "/resepsionis/dashboard",
          component: () => import("./../views/Admin/Dashboard"),
        },
        {
          name: "Tooltip",
          path: "/ui-elements/tooltip",
          component: () => import("./../views/ui-elements/Tooltip"),
        },
      ],
    },
    {
      path: "/tamu",
      component: () => import("./../layouts/full-layout/FullLayout"),
      meta: { requireAuth: true, role: 'tamu' },
      children: [
        {
          name: "tamu-dashboard",
          path: "/tamu/dashboard",
          component: () => import("./../views/Tamu/Dashboard"),
        },
        {
            name: "tamu-bookings",
            path: "/tamu/bookings",
            component: () => import("./../views/Tamu/Bookings"),
          },
      ]
    },

    {
        path: "/error",
        component: () => import("./../layouts/full-layout/FullLayout"),
        meta: { requireAuth: true },
        children: [
          {
            name: "error",
            path: "/",
            component: () => import("./../views/ErrorPage"),
          },
        ]
      },


    {
        name: 'Login',
        path: '/login',
        component: () => import("./../views/Auth/Login")
    },
    {
        name: 'Register',
        path: '/register',
        component: () => import("./../views/Auth/_Register")
    },
    {
      path: "*",
      component: () => import("./../views/Starter"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
    var token = localStorage.getItem('token')
    var user = JSON.parse(localStorage.getItem('user'))
    console.log('user', user)

    try {
        var checkLogin = await check()
        var isAuth = to.matched.some(record => record.meta.requireAuth)
        var role = to.matched.some(record => record.meta.role)
        // var cek = (!!token || !!checkLogin)
        var cek = !!checkLogin
        console.log('role not user:', (role !== user?.level))
        if (isAuth && !cek) {
            next({
                name: 'Login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
        next()
    } catch (e) {
        console.log(e)
    }
})

function check() {
    return new Promise(resolve => {
        axios.get('/api/user')
            .then(res => {
                var user = JSON.stringify(res.data)
                localStorage.setItem('user', user)
                console.log(res?.data)
                resolve(true)
            }).catch(e => {
                console.log(e)
                resolve(false)
            })
    })
}

export default router;

import {createRouter, createWebHashHistory, RouteRecordRaw, RouterOptions} from "vue-router";

const routes: Array<RouteRecordRaw> = [

    {
        path: "/",
        redirect: '/dashboard',
        meta: {
            //是否缓存数据
            keepAlive: true
        }
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/Index.vue"),
        children: [{
            path: '/dashboard',
            redirect: 'dashboard/home',
            meta: {
                keepAlive: true
            }
        }, {
            path: 'home',
            name: 'home',
            component: () => import("@/views/home/Index.vue"),
            meta: {
                keepAlive: true
            }
        }, {
            path: 'category',
            name: 'category',
            component: () => import("@/views/category/Index.vue"),
            children: [
                {
                    path: 'list',
                    name: 'categoryList',
                    component: () => import('@/views/category/List.vue')
                }
            ]
        }, {
            path: 'cart',
            name: 'cart',
            component: () => import("@/views/cart/Index.vue"),
            meta: {
                keepAlive: true,
            }
        }, {
            path: 'user',
            name: 'user',
            component: () => import("@/views/user/Index.vue"),
            children: [
                {
                    path: "address",
                    name: 'userAddress',
                    component: () => import("@/views/user/address/Index.vue"),
                    children: [
                        {
                            path: 'add',
                            name: 'addAddress',
                            component: () => import("@/views/user/address/Add.vue")
                        },
                        {
                            path: 'edit/:addressId',
                            name: 'editAddress',
                            component: () => import("@/views/user/address/Edit.vue")
                        }
                    ]
                },
                {
                    path: 'coupon',
                    name: 'userCoupon',
                    component: () => import('@/views/user/coupon/Index.vue')
                },
                {
                    path: 'order',
                    name: 'userOrder',
                    component: () => import('@/views/user/orderNew/Index.vue')
                }
            ]
        }
        ]
    },
    {
        // 登录
        path: '/parent',
        name: 'parent',
        component: () => import("@/views/parent/Parent.vue")
    },
    {
        // 登录
        path: '/login',
        name: 'login',
        component: () => import("@/views/login/Index.vue")
    },
];

const router = createRouter({
        history: createWebHashHistory(),
        routes: routes,
        scrollBehavior: () => ({y: 0}),
    } as RouterOptions
);

export default router;
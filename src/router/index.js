import { createRouter, createWebHistory } from 'vue-router'
import List from '../components/users/List.vue'
import Add from '../components/users/Add.vue'
import View from '../components/users/View.vue'
import Edit from '../components/users/Edit.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'list',
            component: List
        },
        {
            path: '/add',
            name: 'add',
            component: Add
        },
        {
            path: '/view/:id',
            name: 'view',
            component: View
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: PageNotFound
        }
    ]
})

export default router
export default [
    {
        path: '/user',
        layout: false,
        routes: [
            {
                name: 'login',
                path: '/user/login',
                component: './user/Login'
            },
            {
                component: './404'
            }
        ]
    },
    {
        name: '欢迎',
        icon: 'smile',
        path: '/welcome',
        component: './Welcome'
    },
    {
        name: '代办事项列表',
        icon: 'table',
        path: '/todolist',
        component: './TodoList'
    },
    {
        path: '/',
        redirect: '/welcome'
    },
    {
        component: './404'
    }
];

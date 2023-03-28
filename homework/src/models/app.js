

const { pathname } = window.location

const footerList = [
    {
        name: "lance",
        path: 'home'
    },
    {
        name: "xxxxx",
        path: 'find'
    },
    {
        name: "xxxxx",
        path: 'helpCenter'
    },
    {
        name: "upload file",
        path: 'setting'
    },
]

const result = footerList.find(e => {
    return e.path === pathname.slice(1)
})

let headerTitle = '发布'

if (result) {
    headerTitle = result.name
}

export default {
    namespace: 'app',

    
    state: {
        headerTitle,
        footerList,
        isMobile:false
    },
    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        },
    },
};
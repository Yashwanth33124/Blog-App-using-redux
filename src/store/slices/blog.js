import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    FormData: { title: '', description: '' },
    blogList: [],
    currentEditedblog: null
}

export const blogslice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        handleinput: (state, action) => {
            const { name, value } = action.payload
            state.FormData[name] = value
        },

        handletodo: (state) => {
            const { title, description } = state.FormData

            if (!title.trim() || !description.trim()) return

            const newBlog = { id: nanoid(), title, description }
            state.blogList.push(newBlog)

            state.FormData = { title: '', description: '' }

            localStorage.setItem('blogList', JSON.stringify(state.blogList))
        },

        setblogon: (state, action) => {
            state.blogList = action.payload.blogList || []
        },

        hangledelte: (state, action) => {
            let { payload } = action
            let { currentid } = payload

            let cpybloglist = [...state.blogList]
            cpybloglist = cpybloglist.filter(singleblogitem => singleblogitem.id !== currentid)

            state.blogList = cpybloglist
            localStorage.setItem('blogList', JSON.stringify(cpybloglist))
        },

        setCurrentEditedBlog: (state, action) => {
            let { payload } = action
            let { currentid } = payload
            state.currentEditedblog = currentid
        },

        handleEditblog: (state) => {
            const { title, description } = state.FormData
            if (!title.trim() || !description.trim()) return

            state.blogList = state.blogList.map(item =>
                item.id === state.currentEditedblog
                    ? { ...item, title, description }
                    : item
            )

            state.currentEditedblog = null
            state.FormData = { title: '', description: '' }

            localStorage.setItem('blogList', JSON.stringify(state.blogList))
        }
    }
})

export const { handleinput, handletodo, setblogon, hangledelte, setCurrentEditedBlog, handleEditblog } = blogslice.actions
export default blogslice.reducer

import { useDispatch, useSelector } from 'react-redux'
import { handleinput, handletodo as addBlog, handleEditblog, setCurrentEditedBlog } from '../store/slices/blog'

export default function NewBlog() {
    const dispatch = useDispatch()
    const blogSlice = useSelector(state => state.blog)
    let { currentEditedblog } = blogSlice

    const handleChangeInput = (e) => {
        dispatch(handleinput({
            name: e.target.name,
            value: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!blogSlice.FormData.title.trim() || !blogSlice.FormData.description.trim()) {
            alert("Please enter both title and description")
            return
        }

        if (currentEditedblog !== null) {
            dispatch(handleEditblog())
            return
        }

        dispatch(addBlog())
    }

    return (
        <div style={{
            padding: '30px',
            backgroundColor: '#f4f4f4',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    borderRadius: '10px',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                    width: '100%',
                    maxWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '2rem',
                    marginBottom: '20px'
                }}>
                    {blogSlice?.currentEditedblog ? 'Edit Blog' : 'Add a New Blog'}
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{
                        fontSize: '1rem',
                        marginBottom: '5px',
                        fontWeight: 'bold'
                    }}>
                        Blog Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        onChange={handleChangeInput}
                        value={blogSlice.FormData.title}
                        style={{
                            padding: '10px',
                            fontSize: '1rem',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            outline: 'none'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{
                        fontSize: '1rem',
                        marginBottom: '5px',
                        fontWeight: 'bold'
                    }}>
                        Blog Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter description"
                        onChange={handleChangeInput}
                        value={blogSlice.FormData.description}
                        style={{
                            padding: '10px',
                            fontSize: '1rem',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            outline: 'none'
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '12px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0056b3'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#007BFF'}
                >
                    {blogSlice?.currentEditedblog ? 'Save Changes' : 'Add Blog'}
                </button>
            </form>
        </div>
    )
}

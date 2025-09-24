import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { hangledelte, setblogon, setCurrentEditedBlog, handleinput } from "../store/slices/blog"

export default function ListBlog() {
    const dispatch = useDispatch()
    const blogSlice = useSelector(state => state.blog)
    const blogList = blogSlice.blogList

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogList")) || []
        dispatch(setblogon({ blogList: storedBlogs }))
    }, [dispatch])

    function onDeleteblog(getcurrentblog) {
        dispatch(hangledelte({
            currentid: getcurrentblog
        }))
    }

    function onEditBlog(getcurrentblog) {
        dispatch(setCurrentEditedBlog({
            currentid: getcurrentblog?.id,
        }))

        dispatch(handleinput({
            name: "title",
            value: getcurrentblog?.title
        }))
        dispatch(handleinput({
            name: "description",
            value: getcurrentblog?.description
        }))
    }

    return (
        <div style={{
            padding: '30px',
            backgroundColor: '#f4f4f4',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif',
            color: '#333'
        }}>
            <h1 style={{
                textAlign: 'center',
                fontSize: '2.5rem',
                marginBottom: '30px'
            }}>
                My Blog List
            </h1>

            {blogList.length > 0 ? (
                blogList.map(item => (
                    <div key={item.id} style={{
                        backgroundColor: '#fff',
                        marginBottom: '20px',
                        padding: '20px',
                        borderRadius: '10px',
                        border: '1px solid #ddd',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.02)'
                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)'
                        }}>
                        <h2 style={{
                            fontSize: '1.6rem',
                            marginBottom: '10px',
                            color: '#007BFF'
                        }}>
                            {item.title}
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            color: '#555'
                        }}>
                            {item.description}
                        </p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                            <button
                                onClick={() => onEditBlog(item)}
                                style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#ffc107', color: '#000', cursor: 'pointer', fontWeight: 'bold', transition: '0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0a800'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffc107'}
                            >
                                Edit Blog
                            </button>

                            <button
                                onClick={() => onDeleteblog(item.id)}
                                style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#dc3545', color: '#fff', cursor: 'pointer', fontWeight: 'bold', transition: '0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c82333'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#dc3545'}
                            >
                                Delete Blog
                            </button>
                        </div>

                    </div>
                ))
            ) : (
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#999'
                }}>
                    No Blogs Yet! Add One ✨
                </h2>
            )}
        </div>
    )
}

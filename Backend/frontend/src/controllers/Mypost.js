import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

function Mypost() {
    const navigate = useNavigate();
    const [isUpdating,setisUpdating]=useState(false)
    const [post, setPost] = useState([]);
    const [editedp, setEditedp] = useState(null);
    const [datas, setDatas] = useState({
        title: '',
        excerpt: '',
        content: '',
        date: '',
    });

    useEffect(() => {
        const onHandle = async () => {
            try {
                const response = await axios.get('/api/v1/post/');
                setPost(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        onHandle();
    }, []);

    const handleInput = (e) => {
        setDatas({ ...datas, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (post_id, updatedData) => {
        try {
            const response = await axios.put(`/api/v1/post/updatepost/${post_id}`, updatedData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // If using JWT
                },
            });
            if (response.status === 200) {
                setPost((prevPosts) => 
                    prevPosts.map((p) => (p._id === post_id ? response.data.data : p))
                );
                setEditedp(null);
            } else {
                console.error(response.status);
            }
        } catch (error) {
            console.error("Error updating post", error);
        }
        finally{
            setisUpdating(false)
        }
    };

    function handleSubmit(post_id){
        if (datas.title && datas.content) {
            handleUpdate(post_id, datas);
        } else {
            console.error("Title and Content are required fields");
        }
    };

    const handleDelete = async (postId) => {
        try {
            const response = await axios.delete(`/api/v1/post/${postId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // If using JWT
                },
            });

            if (response.status === 200) {
                setPost((prevPosts) => prevPosts.filter((p) => p._id !== postId));
                alert(response.data.message);
            } else {
                throw new Error('Failed to delete the post');
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    const handleEdit = (postItem) => {
        setisUpdating(true)
        setEditedp(postItem._id);
        setDatas({
            title: postItem.title || '',
            excerpt: postItem.excerpt || '',
            content: postItem.content || '',
            date: postItem.date || '',
        });
    };
    

    return (
        <>
            <div>
                {post && Array.isArray(post) && post.length > 0 ? (
                    post.map((postItem) => (
                        <span className='tt' key={postItem._id}>
                            <div className="image-container ">
                                <div className="content">
                                    {editedp === postItem._id? (
                                        <>
                                           <span>Title:</span> <br /><textarea
                                                name="title"
                                                value={datas.title}
                                                onChange={handleInput}
                                                placeholder="Title"
                                                className='text'
                                            />  <br />
                                        <span>Excerpt:</span> <br />
                                            <textarea
                                                name="excerpt"
                                                value={datas.excerpt}
                                                onChange={handleInput}
                                                placeholder="Excerpt"
                                                className='text'
                                            /> <br />
                                            <span>Content:</span> <br />
                                            <textarea
                                                name="content"
                                                value={datas.content}
                                                onChange={handleInput}
                                                placeholder="Content"
                                                className='text'
                                            /> <br />
                                            <span>Date:</span> <br />
                                            <input 
                                            type='date'
                                              name="date"
                                              value={datas.date}
                                              onChange={handleInput}
                                              placeholder="date"/>
                                            <button className="content-text" onClick={() => handleSubmit(postItem._id)}>Save Changes</button>
                                        </>
                                    ) : (
                                        <>
                                            {postItem ? (
                                                <>
                                                    <h1>Title: {postItem.title}</h1>
                                                    <h3>Excerpt: {postItem.excerpt}</h3>
                                                    <p >Content: {postItem.content}</p>
                                                    <h3>By Author: {postItem.author.Name} on {new Date(postItem.date).toLocaleDateString()}</h3>
                                                    <button onClick={() => handleDelete(postItem._id)} className="content-text">Delete This Post</button>
                                                    <button onClick={() => handleEdit(postItem)} className="content-text">Update This Post</button>
                                                </>
                                            ) : (
                                                <p>Post data is missing or incomplete</p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </span>
                    ))
                ) : (
                    <h1>No Post Available</h1>
                )}
            </div>
            <br /><br />
            <button className='g'disabled={isUpdating} onClick={() => navigate('/api/v1/users/home')}>Home</button>
        </>
    );
}

export { Mypost };

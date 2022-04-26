import React from 'react'
import { Link } from "gatsby"
import Markdown from "react-markdown"
import postlist from "../../posts.json"

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <>
            <div className="postlist-title">
                <h1 className="title">Recent Posts</h1>
            </div>
            <div className="postlist">
                
                {postlist.length && 
                    postlist.map((post, i) => {
                        return (
                            <div key={i} className="post-card">
                                <div className="img-container">
                                    {post.thumbnail && <img className="thumbnail" src={post.thumbnail} alt=""/> }
                                    <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                                </div>
                                <span className='small'>Published on {post.date} by {post.author}</span>
                                <hr/>
                                <Markdown children={excerptList[i]} />
                                <Link className="links button--gradient header-blue" to={`/post/${post.id}`}>Read more</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PostList
import React from 'react'
import postlist from "../../posts.json";
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

const Highlight = ({section}) => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
  return (
    <div className={`container pd-top-2x blogHighlight-${section}`}>
        <div className="centeredText">  
            <h4>Easy Ways to start winning again</h4>
        </div>
        <div className="blogHighlights">
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                            <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" src={post.thumbnail} alt=""/> }
                            </div>
                            <div className="post-body">
                                <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                                <span className='small'>Published on {post.date} by {post.author}</span>
                                <Markdown children={excerptList[i]} />
                                <Link className="links button--gradient header-blue" to={`/post/${post.id}`}>Read more</Link>
                                {/* {
                                    post.tags && post.tags.map((item, index) => (
                                        <div className="tag" key={index}>{item}</div>
                                    ))
                                } */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Highlight
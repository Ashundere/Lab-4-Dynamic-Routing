import { Posts } from "../../lib/posts";
import { Link, useNavigate } from "react-router-dom";


export default function BlogIndexPage(){
    const navigate = useNavigate()
    return(
        <div className="page">
            <h1>Feed</h1>
            {Posts.map(post =>
                <div className="blog-post" key={post.id}>
                    <Link to = {`/blogs/${post.slug}`}>{post.title}</Link>
                    <p>{post.content}</p>
                </div>
            )}
            <button onClick={()=>navigate("/")}>Home</button>
        </div>
    )
}
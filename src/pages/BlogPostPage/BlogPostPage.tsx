import { useNavigate, useParams } from "react-router-dom";
import { Posts } from "../../lib/posts";
import type { Post } from "../../types";

export default function BlogPostPage(){
const { slug } = useParams();
const navigate = useNavigate()


const foundPost: Post | undefined = Posts.find(user => user.slug == slug);


  if (!foundPost) {
    return (
      <div className="error-div">
        <h1>Post Not Found</h1>
        <p>The article you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="page">
    <article className="blog-post">
      <h1>{foundPost.title}</h1>
      <div className="post-content">
        {foundPost.content}
      </div>
      <button onClick={()=>navigate(-1)}>Return</button>
    </article>
    </div>
  );
}
import React from "react";

function BlogDetails(props) {

  const content = (

    <ul>

      {props.blogs.map((blog) => (

        <div key={blog.id}>

          <h2>{blog.title}</h2>

          <h4>{blog.author}</h4>

          <p>{blog.content}</p>

        </div>

      ))}

    </ul>

  );

  return content;
}

export default BlogDetails;
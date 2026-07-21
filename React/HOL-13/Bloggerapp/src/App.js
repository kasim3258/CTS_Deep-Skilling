import React from "react";
import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import { books, blogs, courses } from "./Data";

function App() {

  return (

    <div>

      <div className="container">

        <div className="st2">

          <h1>Book Details</h1>

          <BookDetails books={books} />

        </div>

        <div className="v1">

          <h1>Blog Details</h1>

          <BlogDetails blogs={blogs} />

        </div>

        <div className="mystyle1">

          <h1>Course Details</h1>

          <CourseDetails courses={courses} />

        </div>

      </div>

    </div>

  );

}

export default App;
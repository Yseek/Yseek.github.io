// src/components/BlogPost.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axios from 'axios';

const BlogPost = ({ postName }) => {
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    // Markdown 파일을 가져오는 함수
    axios
      .get(`/posts/${postName}.md`)
      .then((response) => {
        setPostContent(response.data);
      })
      .catch((error) => {
        console.error("Error loading markdown file: ", error);
      });
  }, [postName]);

  return (
    <div className="blog-post">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {postContent}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPost;
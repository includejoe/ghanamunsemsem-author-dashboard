import React, { useReducer, createContext } from "react";

const initialState = {
  blog: null,
};

if (localStorage.getItem("blogData")) {
  setTimeout(() => {
    localStorage.removeItem("blogData");
  }, 86400);
}

const BlogContext = createContext({
  blog: null,
  setBlog: (blogData) => {},
  deleteBlog: () => {},
});

function blogReducer(state, action) {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        blog: action.payload,
      };
    case "DELETE":
      return {
        ...state,
        blog: null,
      };
    default:
      return state;
  }
}

function BlogContextProvider(props) {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  function setBlog(blogData) {
    localStorage.setItem("blogData", JSON.stringify(blogData));
    dispatch({
      type: "SET",
      payload: blogData,
    });
  }

  function deleteBlog() {
    localStorage.removeItem("blogData");
    dispatch({ type: "DELETE" });
  }

  return (
    <BlogContext.Provider
      value={{ blog: state.blog, setBlog, deleteBlog }}
      {...props}
    />
  );
}

export { BlogContext, BlogContextProvider };

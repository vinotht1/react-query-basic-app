import React, { useState } from "react";
import useFetchPosts from "../hooks/posts/useFetchPosts";
import useSavePosts from "../hooks/posts/useSavePosts";
export default function Posts() {
  const [postValue, setPostValue] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const {
    data: listPosts,
    status: postStatus,
    error: postError,
  } = useFetchPosts();

  const { mutateAsync, status: savePostStatus } = useSavePosts();
  const handleAdd = async () => {
    try {
      const data = await mutateAsync(postValue);
      console.log(data);
      setPostValue({
        title: "",
        body: "",
        userId: 1,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      console.log("settled");
    }
  };

  return (
    <div>
      <h1>Get status:{postStatus}</h1>
      <h1>Post status:{savePostStatus}</h1>
      Title
      <input
        type="text"
        placeholder="title"
        value={postValue.title}
        onChange={(e) => setPostValue({ ...postValue, title: e.target.value })}
      />
      Body
      <input
        type="text"
        placeholder="Body"
        value={postValue.body}
        onChange={(e) => setPostValue({ ...postValue, body: e.target.value })}
      />
      <button type="button" onClick={() => handleAdd()}>
        Add
      </button>
      <div>
        {listPosts?.map((eachPosts) => (
          <p key={eachPosts?.id}>{eachPosts?.title}</p>
        ))}
      </div>
    </div>
  );
}

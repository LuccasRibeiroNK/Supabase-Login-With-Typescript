import { useState, useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import { UserContext } from "../context/GoogleUserContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { StyledCreatePosts, StyledNotLogged } from "../styles/StyledComponents";

interface Post {
  title: string;
  text: string;
  image: string;
}

const supabase = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL,
  import.meta.env.VITE_REACT_APP_ANON_KEY
);

function CreatePosts() {
  const navigate = useNavigate();
  const { googleUser } = useContext(UserContext);

  const [postDetails, setPostDetails] = useState<Post>({
    title: "",
    text: "",
    image: "",
  });

  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const imageName = uuidv4() + postDetails.image.name;

    const { error: uploadError } = await supabase.storage
      .from("posts")
      .upload(imageName, postDetails.image);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    const { data: imageUrl } = supabase.storage
      .from("posts")
      .getPublicUrl(imageName);

    const { error } = await supabase.from("Posts").insert([
      {
        id: uuidv4(),
        title: postDetails.title,
        text: postDetails.text,
        date: new Date(),
        imagem_url: imageUrl,
        autor_id: googleUser?.id,
        // @ts-ignore
        autor_name: googleUser?.user_metadata.full_name,
        // @ts-ignore
        autor_avatar_url: googleUser?.user_metadata.avatar_url,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }
    navigate("/home");
  };

  return (
    <StyledCreatePosts>
      {googleUser ? (
        <div className="container">
          <div className="subContainer">
            <h1>Create new post</h1>
            <form onSubmit={handlePostSubmit}>
              <input
                className="inputs"
                type="text"
                placeholder="Post Title"
                value={postDetails.title}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, title: e.target.value })
                }
                required
              />
              <textarea
                className="inputText"
                placeholder="Post Text"
                value={postDetails.text}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, text: e.target.value })
                }
                required
              />
              <p>Add a file to your post.</p>
              <input
                type="file"
                accept="image/jpeg, image/jpg, image/png"
                onChange={(e) =>
                  // @ts-ignore
                  setPostDetails({ ...postDetails, image: e.target.files[0] })
                }
                required
              />
              <div>
                <button type="submit">Create Post</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <StyledNotLogged>
          <div className="notLogged">
            <h1>User not logged in.</h1>
          </div>
        </StyledNotLogged>
      )}
    </StyledCreatePosts>
  );
}

export default CreatePosts;

import { UserContext } from "../context/GoogleUserContext";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useContext } from "react";
import { useState } from "react";
import { StyledHome } from "../styles/StyledComponents";

interface Post {
  id: string;
  title: string;
  text: string;
  date: string;
  imagem_url: string;
  autor_id: string;
  autor_name: string;
  autor_avatar_url: string;
}

const supabase = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL,
  import.meta.env.VITE_REACT_APP_ANON_KEY
);

function Compilation() {
  const { googleUser, setGoogleUser } = useContext(UserContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [expandedPostId, setExpandedPostId] = useState(null);

  function formatDate(dateString: string) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    } as Intl.DateTimeFormatOptions;
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setGoogleUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function getPosts() {
    const { data, error } = await supabase
      .from("Posts")
      .select("*")
      .order("date", { ascending: false });

    if (data !== null) {
      setPosts(data);
    } else {
      console.error("Erro ao buscar posts:", error);
    }
  }

  async function deletePost(postId: number) {
    const { data, error } = await supabase
      .from("Posts")
      .delete()
      .eq("id", postId);

    if (data == null) {
      console.log("Post deletado com sucesso!");
      getPosts();
    } else {
      console.error("Erro ao deletar post:", error);
    }
  }
  useEffect(() => {
    if (!googleUser || !posts.length) {
      getPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleUser]);

  return (
    <StyledHome>
      <div className="container">
        <header>
          <h1>Check out all the posts:</h1>
        </header>
        <div className="compilationGrid">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => {
                if (expandedPostId === post.id) {
                  setExpandedPostId(null);
                } else {
                  // @ts-ignore
                  setExpandedPostId(post.id);
                }
              }}
            >
              <div className="postsWindows">
                <h2>{post.title}</h2>
                {post.imagem_url && (
                  <img
                    src={JSON.parse(post.imagem_url).publicUrl}
                    alt="post Alt"
                    className="imgPost"
                  />
                )}
                <p className="textContent">
                  {expandedPostId === post.id
                    ? post.text
                    : post.text.slice(0, 60)}
                  {post.text.length > 60 && expandedPostId !== post.id && "..."}
                </p>
                <p className="textTime">
                  Originally posted at: {formatDate(post.date)}
                </p>
                <div className="">
                  <p className="textCreated">created by: {post.autor_name}</p>
                  <img
                    src={post.autor_avatar_url}
                    alt={post.autor_name}
                    className="imgAvatar"
                  />
                </div>
                <div>
                  <ul>
                    <li>
                      <button
                        onClick={async () => {
                          // @ts-ignore
                          await deletePost(post.id);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledHome>
  );
}

export default Compilation;

import { useState, useEffect, useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import { UserContext } from "../context/GoogleUserContext";
import { useSession } from "@supabase/auth-helpers-react";
import LoginPage from "./LoginPage";
import { StyledUserPage } from "../styles/StyledComponents";

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

function Success() {
  const session = useSession();
  const { googleUser, setGoogleUser } = useContext(UserContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [expandedPostId, setExpandedPostId] = useState(null);

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
    try {
      const { data, error } = await supabase
        .from("Posts")
        .select("*")
        .eq("autor_id", googleUser.id)
        .order("date", { ascending: false });

      if (error) {
        console.error("Erro ao buscar posts:", error);
        return;
      }

      if (data) {
        setPosts(data);
      }
    } catch (error) {
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
    if (googleUser) {
      getPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleUser]);

  if (session) {
    return (
      <div>
        <LoginPage />
      </div>
    );
  } else {
    return (
      <StyledUserPage>
        <div className="container">
          <header>
            <h1>Check out your posts:</h1>
          </header>
          <div className="compilationGrid">
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => {
                  if (expandedPostId === post.id) {
                    setExpandedPostId(null);
                  } else {
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
                  <p>
                    {expandedPostId === post.id
                      ? post.text
                      : post.text.slice(0, 60)}
                    {post.text.length > 60 &&
                      expandedPostId !== post.id &&
                      "..."}
                  </p>
                  <p className="textTime">
                    Originally posted at: {formatDate(post.date)}
                  </p>
                  <div className="">
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
      </StyledUserPage>
    );
  }
}

export default Success;

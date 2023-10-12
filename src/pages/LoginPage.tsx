import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { StyledLogin } from "../styles/StyledComponents";

const supabase = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL,
  import.meta.env.VITE_REACT_APP_ANON_KEY
);

function LoginPage() {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/home");
      console.log("Usuário logado!");
    } else if (event === "SIGNED_OUT") {
      navigate("/");
    }
  });

  return (
    <StyledLogin>
      <div className="login">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            style: {
              button: { background: "rgb(239 68 68)", color: "white" },
              input: { background: "white", color: "black" },
              anchor: { color: "blue" },
              divider: { color: "red" },
              label: { color: "black" },
            },
          }}
          theme="dark"
          providers={["google"]}
        />
      </div>
    </StyledLogin>
  );
}

export default LoginPage;

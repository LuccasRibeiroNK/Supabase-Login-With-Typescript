import UserProvider from "./context/GoogleUserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import CreatePosts from "./pages/CreatePosts";

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="#" element={<LoginPage />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/createposts" element={<CreatePosts />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;

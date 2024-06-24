import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [pageToShow, setPageToShow] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar
            pageToShow={pageToShow}
            setPageToShow={setPageToShow}
          ></Sidebar>
          <div className="content">
            <Header></Header>
            {pageToShow === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;

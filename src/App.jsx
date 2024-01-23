import Sidebar from "./components/Sidebar/Sidebar.jsx";

import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <article></article>
        <aside>
          <Sidebar />
        </aside>
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default App;

import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}
    >
      <nav style={{ width: "220px", background: "#f0f0f0", padding: "20px" }}>
        <h3>Menu</h3>
        <ul style={{ lineHeight: "2" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
      <main style={{ flex: 1, padding: "30px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

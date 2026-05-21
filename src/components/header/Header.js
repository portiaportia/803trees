import "./css/Header.css";

import Brand from "./Brand";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <Nav />
      </div>
    </header>
  );
}
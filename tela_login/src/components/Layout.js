import Fim from "./Fimpagina";

const Layout = ({ children }) => {
  return (
    <div className="content">
      {children}
      <Fim />
    </div>
  );
}

export default Layout;
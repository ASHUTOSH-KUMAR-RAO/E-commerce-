import Footer from "./footer";
import { Navbar } from "./navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-[#f4f4f4]">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;

// todo=> {children}, jaab bhi hum kuch render children props ke through krte hai ,to iss case mein hum usko pass nhi kaar sekte hai client portal per,isiliye ye server portal per hi rehta hai

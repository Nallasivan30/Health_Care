// components/Layout.tsx
import Sidebar from './sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 ml-16 transition-all duration-300">{children}</main>
      </body>
    </html>
  );
};

export default Layout;

type props = {
  children: React.ReactNode;
  className?: string;
};

const Layout: React.FC<props> = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full p-2 md:p-32 inline-block z-0 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;

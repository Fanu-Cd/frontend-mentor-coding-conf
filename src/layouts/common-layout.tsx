import Header from "../components/common/header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full p-5">
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default CommonLayout;

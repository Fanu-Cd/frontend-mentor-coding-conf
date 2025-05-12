import Main from "./pages/main/main";
import CommonLayout from "./layouts/common-layout";

function App() {
  return (
    <div className="main_div min-h-screen">
      <CommonLayout>
        <Main />
      </CommonLayout>
    </div>
  );
}

export default App;

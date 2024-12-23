import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import OverViews from "./pages/OverViews";
import GetStart from "./pages/getStart/GetStart";
import ApiReference from "./pages/apiReference/ApiReference";
import Examples from "./pages/examples/Examples";
import Toconomics from "./pages/toconomics/Toconomics";
import CodeReview from "./pages/codeReview/CodeReview";
import { ToggleMenu } from "./helper/ContextProvider";
import { useContext, useEffect, useRef } from "react";

function App() {
  const { isMenuOpen, setIsMenuOpen } = useContext(ToggleMenu);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {isMenuOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 w-[80%] h-full z-20 sm:hidden"
        >
          <Sidebar />
        </div>
      )}

      <div className="hidden sm:flex sm:flex-col sm:w-[20%] max-w-[320px] min-w-[200px] bg-gray-100">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<GetStart />} />
          <Route path="/overview" element={<OverViews />} />
          <Route path="/quickstart" element={<OverViews />} />
          <Route path="/gettingStart" element={<GetStart />} />
          <Route path="/components" element={<Examples />} />
          <Route path="/apiReferance" element={<ApiReference />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/toconomics" element={<Toconomics />} />
          <Route path="/codeReview" element={<CodeReview />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

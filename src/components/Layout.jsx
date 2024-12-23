import { useContext } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { ToggleMenu } from "../helper/ContextProvider";
import { MdClose } from "react-icons/md";

const Layout = ({ children }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(ToggleMenu);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen=>", isMenuOpen);
  };
  return (
    <div className=" px-8 pt-6 min-h-screen ">
      <div className="mb-2 py-4 bg-white flex justify-between w-full sticky top-0">
        <div className="">
          <MdOutlineKeyboardBackspace
            fontSize={26}
            onClick={() => window.history.back()}
          />
        </div>
        <div className="sm:hidden">
          {isMenuOpen === true ? (
            <MdClose fontSize={26} onClick={handleToggleMenu} />
          ) : (
            <MdMenu fontSize={26} onClick={handleToggleMenu} />
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;

import { FaSearch } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ToggleMenu } from "../helper/ContextProvider";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { setIsMenuOpen } = useContext(ToggleMenu);

  const toggleSubMenu = () => setIsOpen(!isOpen);

  const navItems = [
    {
      label: "Using Lifcash Economic DAO",
      link: "",
      subMenu: [
        { label: "Overview", link: "/overview" },
        { label: "Quick Start", link: "/quickstart" },
      ],
    },
    { label: "Getting Started", link: "/gettingStart" },
    { label: "Components", link: "/components" },
    { label: "API Reference", link: "/apiReferance" },
    { label: "Examples", link: "/examples" },
    { label: "Toconomics", link: "/toconomics" },
    { label: "Liftcash Code Reviews/Audit", link: "/codeReview" },
  ];

  // Filter and sort items based on the search query
  const filteredItems = navItems
    .map((item) => ({
      ...item,
      match: item.label.toLowerCase().includes(searchQuery.toLowerCase()),
    }))
    .sort((a, b) => b.match - a.match);

  return (
    <div className="flex flex-col bg-gray-200 text-white h-screen  shadow-lg">
      <div className="p-4 border-b border-gray-700">
        <div className="relative">
          <input
            type="text"
            placeholder="Search pages"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-00 text-gray-700 placeholder-gray-500 border py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <nav className="flex-1 p-2 overflow-y-auto">
        <ul className="space-y-1">
          {filteredItems.map((item, index) => (
            <li key={index}>
              {item.subMenu ? (
                <>
                  <button
                    onClick={toggleSubMenu}
                    className="flex items-center py-2 w-full text-gray-800 rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none"
                  >
                    {isOpen ? (
                      <FaAngleDown className="mr-2" />
                    ) : (
                      <FaAngleRight className="mr-2" />
                    )}
                    <IoDocumentTextOutline className="mr-2" />
                    <span className="line-clamp-1 break-all">{item.label}</span>
                  </button>
                  {isOpen && (
                    <ul className="pl-8 space-y-1">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            onClick={() => setIsMenuOpen(false)}
                            to={subItem.link}
                            className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-700 hover:text-white"
                          >
                            <IoDocumentTextOutline className="mr-2" />
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  to={item.link}
                  className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-700 hover:text-white"
                >
                  <IoDocumentTextOutline className="mr-2" />
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

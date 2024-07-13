import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      <div
        className="relative inline-block text-left lg:ml-64"
        ref={dropdownRef}
      >
        <div>
          <button
            type="button"
            className="inline-flex items-center lg:w-44 lg:h-[52px] justify-center w-full px-4 py-2 text-xl border-solid border-2 hover:border-cyan-400 font-medium text-black rounded-full"
            id="options-menu"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <img
              src="src/images/profile.png"
              alt="Profile"
              className="w-16 h-16 rounded-full mr-2"
            />
            Profile
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute left-0 mt-2 w-56 h-44 rounded-md shadow-2xl bg-sky-400 ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1 mt-4" role="none">
              <a
                href="#your-profile"
                className="block px-4 py-2 text-xl text-gray-700 hover:bg-cyan-400"
                onClick={handleButtonClick}
              >
                Your Profile
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Settings
              </a>
              <a
                href="#sign-out"
                className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => navigate("/")}
              >
                Sign out
              </a>
            </div>
          </div>
        )}

        {isModalOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 blur-[550px]"
              onClick={() => setIsModalOpen(false)}
            ></div>
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg z-50">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="flex justify-center mt-8">
                    <img
                      className="h-32 w-32 rounded-full object-cover"
                      src="https://via.placeholder.com/150"
                      alt="Profile"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <h2 className="text-xl font-semibold text-gray-800">
                      John Doe
                    </h2>
                    <p className="text-gray-600">john.doe@example.com</p>
                  </div>
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white item-center rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close Modal
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;

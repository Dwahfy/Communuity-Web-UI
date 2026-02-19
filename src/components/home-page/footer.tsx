'use client';

import { useEffect, useState } from "react";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const lightTheme = "purple-light";
  const darkTheme = "purple-dark";

  const [theme, setTheme] = useState<string>(lightTheme);

  // Load saved theme or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === lightTheme || savedTheme === darkTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(lightTheme);
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Sun shown when current theme is dark (i.e., switching to light)
  // Moon shown when current theme is light (i.e., switching to dark)
  return (
    <div className="relative">
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 pb-16 md:pb-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link transition-all duration-300 hover:text-primary hover:scale-110">Contact</a>
          <a className="link transition-all duration-300 hover:text-primary hover:scale-110">Jobs</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/company/dwahfy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <FaLinkedin className="w-6 h-6 fill-current" />
            </a>
            <a
              href="https://discord.gg/mm9dbNxdb6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <FaDiscord className="w-6 h-6 fill-current" />
            </a>
            <a
              href="https://github.com/Dwahfy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <FaGithub className="w-6 h-6 fill-current" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {currentYear} - All rights reserved by Dwahfy and its UI.</p>
          <p>Apache 2.0 {currentYear} - Backend by Eyad and the open-source community.</p>
        </aside>
      </footer>

      {/* Theme Switcher - Bottom Right Corner */}
      <div className="fixed bottom-4 right-4 z-50">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            checked={theme === darkTheme}
            onChange={toggleTheme}
            value={theme === darkTheme ? darkTheme : lightTheme}
          />

          {/* Sun icon - visible when in dark mode (swap-off) */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* Moon icon - visible when in light mode (swap-on) */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
}

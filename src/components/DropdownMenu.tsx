"use client";
import { useEffect, useRef, useState } from "react";
import "../styles/globals.css";
import { LanguageIcon } from "./Icons";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
}

const DropdownMenu = ({ items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipple({ x, y, show: true });
    setIsOpen(!isOpen);

    setTimeout(() => {
      setRipple((prev) => ({ ...prev, show: false }));
    }, 500);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={handleRipple}
        className="relative ease-in-out overflow-hidden p-1 rounded-lg hover:bg-[#3f3f46] transition-colors duration-200"
        aria-label="Change Language"
      >
        <LanguageIcon width={30} color="#fff" />
        {ripple.show && (
          <span
            className="absolute bg-white/20 rounded-full animate-ripple"
            style={{
              width: "100px",
              height: "100px",
              left: ripple.x - 50,
              top: ripple.y - 50,
            }}
          />
        )}
      </button>

      <div
        className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-[#18181b] border-2 border-[#393a40] ring-1 ring-black ring-opacity-5 
          transition-all duration-200 origin-top-right
          ${
            isOpen
              ? "transform opacity-100 scale-100"
              : "transform opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <div className="p-2" role="menu" aria-orientation="vertical">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white block rounded-lg px-4 py-2 text-sm hover:bg-[#3f3f46] transition-colors duration-200"
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

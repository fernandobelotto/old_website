import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

interface Props {
  children: JSX.Element;
}

export default function BlogLayout({ children }: Props): ReactElement {
  const [mode, setMode] = useState(false);

  const toggleDarkLight = () => {
    setMode(!mode);
  };

  return (
    <div className={`${mode ? "" : "dark"}`}>
      <div className="bg-slate-50 dark:bg-slate-900">
        <nav className="bg-slate-900 p-5 text-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <Link href="/">
                <a>Home</a>
              </Link>
              <button onClick={toggleDarkLight}>
                {mode ? (
                  <HiMoon className="text-4xl " />
                ) : (
                  <HiSun className="text-4xl text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>
        <div className="container mx-auto prose dark:prose-invert pb-20 pt-20">
          {children}
        </div>
      </div>
    </div>
  );
}

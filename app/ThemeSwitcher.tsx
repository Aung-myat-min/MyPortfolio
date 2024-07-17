"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <p className="me-3">@_@</p>;

  if (resolvedTheme === "dark") {
    return (
      <FontAwesomeIcon
        icon={faMoon}
        className="text-xl mx-3 dark:text-white"
        onClick={() => setTheme("light")}
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <FontAwesomeIcon
        icon={faSun}
        className="text-xl mx-3"
        onClick={() => setTheme("dark")}
      />
    );
  }
}

import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialDark = storedTheme 
      ? storedTheme === "dark" 
      : systemPrefersDark;
    
    setDark(initialDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="toggle theme">
        <div className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      aria-label="toggle theme"
      onClick={() => setDark(!dark)}
    >
      {dark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-900" />
      )}
    </Button>
  );
}
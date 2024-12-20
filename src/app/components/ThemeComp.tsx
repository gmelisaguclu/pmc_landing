import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function ThemeComp() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme == "system" ? systemTheme : theme;
  return <div>theme</div>;
}

export default ThemeComp;

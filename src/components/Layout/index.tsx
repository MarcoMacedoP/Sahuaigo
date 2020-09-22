import React, { useState, useEffect } from "react";
import styles from "./layout.module.sass";

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [navbarColor, setNavbarColor] = useState<
    "transparent" | "white"
  >("transparent");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const backgroundcolor =
        window.scrollY < 70 ? "transparent" : "white";
      setNavbarColor(backgroundcolor);
    });
  }, []);

  return (
    <>
      <nav
        className={styles.navbar}
        style={{
          backgroundColor: `${navbarColor}`,
        }}
      >
        <a href="/" className={styles.logoContainer}>
          <img
            className={styles.logo}
            src="/assets/icons/brand-logo.png"
            alt="Sahuaygo logo de empresa turistica en Sahuayo, Michoacan, México."
          />
        </a>
      </nav>
      {children}
      <footer className={styles.footer}>
        Site designed and developed with
        <span role="img" aria-label="heart">
          ❤️
        </span>
        by{" "}
        <a href="http://wwww.marcomacedo.com" rel="_blank">
          Marco Macedo.
        </a>
      </footer>
    </>
  );
};

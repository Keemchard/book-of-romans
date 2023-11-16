import React, { FC, ReactNode } from "react";
import styles from "@/styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.main}>
        <div>hey</div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

import React from "react";
import styles from "../styles/Layout.module.css";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className={styles.conatiner}>
        <main className={styles.main}>
          <Header />
          <h1>Hello</h1>
          {children}
        </main>
      </div>
    </>
  );
};
export default Layout;

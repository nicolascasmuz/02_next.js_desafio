import styles from "./main-layout.module.css";

export default function MainLayout({ children }: any) {
  return (
    <div>
      <header className={styles.header}>desafío next.js</header>
      <div>{children}</div>
      <footer className={styles.footer} />
    </div>
  );
}

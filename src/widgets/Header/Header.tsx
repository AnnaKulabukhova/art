import styles from "./Header.module.css";
import clsx from "clsx";

export const Header = () => {
  return (
    <header className={clsx("p-2", styles.header)}>
      Мой хедер
    </header>
  );
};
import styles from "./styles/StartPage.module.css";

export function StartPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <button className={styles.btn_ski}>лыжи</button>
      <button className={styles.btn_board}>снегборд</button>
    </div>
  );
}

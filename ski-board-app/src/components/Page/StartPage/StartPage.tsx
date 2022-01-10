import { Link } from "react-router-dom";
import styles from "./styles/StartPage.module.css";

export function StartPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link className={styles.btn_ski} to="/ski">
        лыжи
      </Link>

      <Link className={styles.btn_board} to="/board">
        снегборд
      </Link>
    </div>
  );
}

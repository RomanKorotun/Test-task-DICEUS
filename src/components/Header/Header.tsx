import styles from "@/components/Header/Header.module.css";
import { SearchBar } from "@/components/common/SearchBar/SearchBar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.gretting}>
            Hi Arthur, welcome! You have 12 open tasks.
          </div>
          <div className={styles.userControls}>
            <SearchBar padding="10px 16px" width="350px" bgColor="#1f2232" />
            <div className={styles.userMenu}>AR</div>
          </div>
        </div>
      </div>
    </header>
  );
};

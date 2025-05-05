import styles from "@/components/common/WinnerIconsBlock/WinnerIconsBlock.module.css";

export const WinnerIconsBlock = () => {
  return (
    <div className={styles.winnerIconsBlock}>
      <div className={styles.winnerIcons}></div>
      <div className={styles.winnerIcons}></div>
      <div className={styles.winnerIcons}></div>
      <div className={styles.winnerIcons}></div>
    </div>
  );
};

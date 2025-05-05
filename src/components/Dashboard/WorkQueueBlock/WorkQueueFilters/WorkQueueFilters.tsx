import styles from "@/components/Dashboard/WorkQueueBlock/WorkQueueFilters/WorkQueueFilters.module.css";

export const WorkQueueFilters = () => {
  return (
    <div className={styles.filersWrapper}>
      <button className={`${styles.filter} ${styles.activeFilter}`}>
        Assigned to me (12)
      </button>
      <button className={styles.filter}>Pending Review (8)</button>
      <button className={styles.filter}>Referrals (3)</button>
    </div>
  );
};

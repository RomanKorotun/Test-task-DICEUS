import styles from "@/components/Dashboard/QuickActionsBlock/QuickActionsBlock.module.css";
import { Title } from "@/components/Dashboard/TitleDashboard/TitleDashboard";

export const QuickActionsBlock = () => {
  return (
    <div className={styles.wrapperActions}>
      <Title>Quick actions</Title>
      <div className={styles.wrapperButtons}>
        <button className={styles.button}>New Submission</button>
        <button className={styles.button}>Quote Builder</button>
        <button className={styles.button}>Risks Models</button>
        <button className={styles.button}>Documents Upload</button>
      </div>
    </div>
  );
};

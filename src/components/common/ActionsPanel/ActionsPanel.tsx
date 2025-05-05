import styles from "@/components/common/ActionsPanel/ActionsPanel.module.css";

interface IActionsPanelProps {
  items: string[];
}

export const ActionsPanel = ({ items }: IActionsPanelProps) => {
  return (
    <div className={styles.menu}>
      {items.map((item, index) => (
        <button key={index} className={styles.menuItem}>
          {item}
        </button>
      ))}
    </div>
  );
};

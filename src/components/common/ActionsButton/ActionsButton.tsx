import { FaEllipsisV } from "react-icons/fa";
import styles from "@/components/common/ActionsButton/ActionsButton.module.css";

export const ActionsButton = () => {
  return (
    <button className={styles.actionButton}>
      <FaEllipsisV size={10} />
    </button>
  );
};

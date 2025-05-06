import { ReactNode } from "react";
import styles from "@/components/Accounts/CommunicationBlock/ReplyButton/ReplyButton.module.css";

interface IReplyButtonProps {
  children: ReactNode;
}

export const ReplyButton = ({ children }: IReplyButtonProps) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};

import { ReactNode } from "react";
import styles from "@/components/Accounts/TitleAccounts/TitleAccounts.module.css";

interface ITitleAccountsdProps {
  children: ReactNode;
}

export const Title = ({ children }: ITitleAccountsdProps) => {
  return <div className={styles.title}>{children}</div>;
};

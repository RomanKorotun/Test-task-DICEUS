import { ReactNode } from "react";
import styles from "@/components/Dashboard/TitleDashboard/TitleDashboard.module.css";

interface ITitleDashboardProps {
  children: ReactNode;
}

export const Title = ({ children }: ITitleDashboardProps) => {
  return <div className={styles.title}>{children}</div>;
};

import { ReactNode } from "react";
import styles from "@/components/Accounts/CommunicationBlock/CommunicationStatus/CommunicationStatus.module.css";

interface ICommunicationStatusProps {
  children: ReactNode;
}

export const CommunicationStatus = ({
  children,
}: ICommunicationStatusProps) => {
  return <div className={styles.status}>{children}</div>;
};

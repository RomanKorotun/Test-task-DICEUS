import { ReactNode } from "react";
import { FaPaperclip } from "react-icons/fa6";
import styles from "@/components/Accounts/CommunicationBlock/AttachmentsLink/AttachmentsLink.module.css";

interface IAttachmentsLinkProps {
  children: ReactNode;
}

export const AttachmentsLink = ({ children }: IAttachmentsLinkProps) => {
  return (
    <a href="#" className={styles.link}>
      <FaPaperclip />
      {children} attachments
    </a>
  );
};

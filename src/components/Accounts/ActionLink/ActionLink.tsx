import Link from "next/link";
import { ReactNode } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "@/components/Accounts/ActionLink/ActionLink.module.css";

interface IActionsLinkProps {
  children: ReactNode;
}

export const ActionLink = ({ children }: IActionsLinkProps) => {
  return (
    <Link className={styles.link} href="#">
      {children}
      <IoIosArrowRoundForward size={20} />
    </Link>
  );
};

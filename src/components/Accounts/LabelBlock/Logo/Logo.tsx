import { IoBoatOutline } from "react-icons/io5";
import styles from "@/components/Accounts/LabelBlock/Logo/Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.wrapperLogo}>
      <IoBoatOutline size={40} />
    </div>
  );
};

import { data } from "@/helpers/dashboard/myAccounts/myAccountsTables";
import styles from "@/components/Accounts/LabelBlock/Menu/Menu.module.css";
export const Menu = () => {
  const account = data[2];
  return (
    <div className={styles.content}>
      Dashboard // Accounts //&nbsp;
      <span className={styles.companyAccent}>{account.accountName}</span>
    </div>
  );
};

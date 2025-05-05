import styles from "@/components/Accounts/LabelBlock/InfoCompany/InfoCompany.module.css";
import { data } from "@/helpers/dashboard/myAccounts/myAccountsTables";

export const InfoCompany = () => {
  const account = data[2];
  return (
    <div>
      <div className={styles.accountName}>{account.accountName}</div>
      <div className={styles.accountInfo}>
        <div className={styles.address}>{account.address}</div>
        <div className={styles.delimiter}></div>
        <div className={styles.block}>
          <div className={styles.label}>Existing account</div>
          <div>{account.existingAccount}</div>
        </div>
        <div className={styles.delimiter}></div>
        <div className={styles.block}>
          <div className={styles.label}>Broker</div>
          <div>{account.broker}</div>
        </div>
        <div className={styles.delimiter}></div>
        <div className={styles.block}>
          <div className={styles.label}>Underwriter</div>
          <div>{account.underwriter}</div>
        </div>
      </div>
    </div>
  );
};

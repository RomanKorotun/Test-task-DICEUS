import styles from "@/components/Accounts/LabelBlock/LabelBlock.module.css";
import { NeedsAttention } from "./NeedsAttention/NeedsAttention";
import { InfoCompany } from "./InfoCompany/InfoCompany";
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";

export const LabelBlock = () => {
  return (
    <div>
      <Menu />
      <div className={styles.wrapper}>
        <div className={styles.companyHeader}>
          <Logo />
          <InfoCompany />
        </div>
        <NeedsAttention />
      </div>
    </div>
  );
};

import { Title } from "@/components/Accounts/TitleAccounts/TitleAccounts";
import styles from "@/components/Accounts/ComplianceDocumentationBlock/ComplianceDocumentationBlock.module.css";
import { CheckCircleIcon } from "@/components/common/CheckCircleIcon/CheckCircleIcon";
import { ActionLink } from "../ActionLink/ActionLink";

const data = [
  "KYC verification",
  "Required Documentation",
  "Regulatory approval",
  "Financial Verification",
];

export const ComplianceDocumentationBlock = () => {
  return (
    <div>
      <div className={styles.label}>
        <Title>Compliance & Documentation</Title>
        <div className={styles.link}>
          <ActionLink>See history</ActionLink>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          {data.slice(0, 2).map((item) => (
            <div key={item} className={styles.item}>
              <CheckCircleIcon
                iconSize={10}
                wrapperWidth={20}
                wrapperHeight={20}
                iconColor="#61b57d"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className={styles.rightColumn}>
          {data.slice(2).map((item) => (
            <div key={item} className={styles.item}>
              <CheckCircleIcon
                iconSize={10}
                wrapperWidth={20}
                wrapperHeight={20}
                iconColor="#61b57d"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

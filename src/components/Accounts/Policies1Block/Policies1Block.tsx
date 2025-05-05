import { Title } from "@/components/Accounts/TitleAccounts/TitleAccounts";
import styles from "@/components/Accounts/Policies1Block/Policies1Block.module.css";
import { data as policiesData } from "@/helpers/accounts/policies/policies";
import { formatNumberWithCommas } from "@/helpers/accounts/formatNumberWithCommas";
import { formatDateOrDefault } from "@/helpers/accounts/formatDateOrDefault";

export const Policies1Block = () => {
  return (
    <div>
      <Title>Policies</Title>
      <ul className={styles.wrapperBlocks}>
        {policiesData.map((item, index) => (
          <li key={index} className={styles.block}>
            <div className={styles.label}>
              <span style={{ color: item.logoColor }}>
                {<item.logo size={25} />}
              </span>
              <span className={styles.line}>{item.line}</span>
            </div>
            <div className={styles.renevalPremium}>
              Premium: ${formatNumberWithCommas(item.renevalPremium)}
            </div>
            <div className={styles.effDatee}>
              Eff.Date: {formatDateOrDefault(item.effDatee)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { ActionsButton } from "@/components/common/ActionsButton/ActionsButton";
import { headers } from "@/helpers/dashboard/myAccounts/myAccountsTables";
import { data } from "@/helpers/dashboard/myAccounts/myAccountsTables";
import styles from "@/components/Dashboard/MyAccountsBlock/MyAccountsTable/MyAccountsTable.module.css";
import { formatDateToMMDDYYYY } from "@/helpers/formatDateToMMDDYYYY";
import { formatLargeNumber } from "@/helpers/formatLargeNumber";
import { getStatusColor } from "@/helpers/dashboard/myAccounts/getStatusColor";
import { getLossRatioBgColor } from "@/helpers/getLossRatioBgColor";
import { WinnerIconsBlock } from "@/components/common/WinnerIconsBlock/WinnerIconsBlock";

export const MyAccountsTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <div>{item.accountName}</div>
                <div className={styles.type}>{item.type}</div>
              </td>
              <td>{item.line}</td>
              <td>{item.broker}</td>
              <td>{formatDateToMMDDYYYY(item.renewalDate)}</td>
              <td className={styles.premium}>
                ${formatLargeNumber(item.premium)}
              </td>
              <td>${formatLargeNumber(item.ratedPremium)}</td>
              <td className={styles.td}>
                <div
                  className={`${styles.lossRatio} ${
                    styles[getLossRatioBgColor(item.lossRatio)]
                  }`}
                >
                  {item.lossRatio}%
                </div>
              </td>
              <td>
                <div className={styles.appetite}>{item.appetite}</div>
              </td>
              <td className={styles.statusCell}>
                <span
                  className={`${styles.status} ${
                    styles[getStatusColor(item.status)]
                  }`}
                ></span>
                <span>{item.status}</span>
              </td>
              <td>
                <div className={styles.triage}>{item.triage}</div>
              </td>
              <td>
                <div className={styles.winnability}>
                  <WinnerIconsBlock />
                  <div>{item.winnability}</div>
                </div>
              </td>
              <td>
                <ActionsButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

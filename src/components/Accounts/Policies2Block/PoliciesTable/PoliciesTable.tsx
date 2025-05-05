import styles from "@/components/Accounts/Policies2Block/PoliciesTable/PoliciesTable.module.css";
import { ActionsButton } from "@/components/common/ActionsButton/ActionsButton";
import { headers } from "@/helpers/accounts/policies/policies";
import { data } from "@/helpers/accounts/policies/policies";
import { getStatusColor } from "@/helpers/accounts/policies/getStatusColor";
import { formatDateToMMDDYYYY } from "@/helpers/formatDateToMMDDYYYY";
import { formatNumberWithCommas } from "@/helpers/accounts/formatNumberWithCommas";
import { getLossRatioBgColor } from "@/helpers/getLossRatioBgColor";
import { getRateChangeColor } from "@/helpers/accounts/policies/getRateChangeColor";
import { sumByField } from "@/helpers/accounts/policies/sumByField";
import { calculateAverage } from "@/helpers/accounts/policies/calculateWeightedAverage";

export const PoliciesTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
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
              <td className={styles.label}>
                <span
                  style={{ backgroundColor: item.logoColor }}
                  className={styles.logo}
                >
                  {<item.logo />}
                </span>
                <span>{item.line}</span>
              </td>
              <td>{formatDateToMMDDYYYY(item.effDatee)}</td>
              <td>{formatDateToMMDDYYYY(item.expDate)}</td>
              <td className={styles.statusCell}>
                <span
                  className={`${styles.status} ${
                    styles[getStatusColor(item.status)]
                  }`}
                ></span>
                <span>{item.status}</span>
              </td>
              <td>${formatNumberWithCommas(item.expiringTech)}</td>
              <td>${formatNumberWithCommas(item.expiringPremium)}</td>
              <td>${formatNumberWithCommas(item.renevalTech)}</td>
              <td className={styles.renevalPremium}>
                ${formatNumberWithCommas(item.renevalPremium)}
              </td>
              <td>${formatNumberWithCommas(item.renevalTech)}</td>
              <td
                className={
                  typeof item.lossRatio === "number"
                    ? styles[getRateChangeColor(item.rateChange)]
                    : ""
                }
              >
                {typeof item.rateChange === "number"
                  ? `${item.rateChange}%`
                  : item.rateChange}
              </td>
              <td className={styles.td}>
                <div
                  className={`${styles.lossRatio} ${
                    typeof item.lossRatio === "number"
                      ? styles[getLossRatioBgColor(item.lossRatio)]
                      : ""
                  }`}
                >
                  {typeof item.lossRatio === "number"
                    ? `${item.lossRatio}%`
                    : item.lossRatio}
                </div>
              </td>
              <td>
                <ActionsButton />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={styles.totalRow}>
            <td colSpan={3}></td>
            <td className={styles.total}>Total ({data.length})</td>
            <td>${sumByField(data, "expiringTech")}</td>
            <td>${sumByField(data, "expiringPremium")}</td>
            <td>${sumByField(data, "renevalToTech")}</td>
            <td>${sumByField(data, "renevalTech")}</td>
            <td>${sumByField(data, "renevalPremium")}</td>
            <td>{calculateAverage(data, "rateChange")}%</td>
            <td className={styles.td}>
              <div
                className={`${styles.lossRatio} ${
                  typeof calculateAverage(data, "lossRatio") === "number"
                    ? styles[
                        getLossRatioBgColor(calculateAverage(data, "lossRatio"))
                      ]
                    : ""
                }`}
              >
                {calculateAverage(data, "lossRatio")}%{" "}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

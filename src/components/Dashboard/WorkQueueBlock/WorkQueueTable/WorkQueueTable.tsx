import { headers, data } from "@/helpers/dashboard/workQueue/workQueueTable";
import styles from "@/components/Dashboard/WorkQueueBlock/WorkQueueTable/WorkQueueTable.module.css";
import { getNameInitials } from "@/helpers/dashboard/workQueue/getNameInitials";
import { getStatusColor } from "@/helpers/dashboard/workQueue/getStatusColor";
import { ActionsButton } from "@/components/common/ActionsButton/ActionsButton";
import { formatDateToMMDDYYYY } from "@/helpers/formatDateToMMDDYYYY";

export const WorkQueueTable = () => {
  return (
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
            <td className={styles.organizatorCell}>
              <span className={styles.initials}>
                {getNameInitials(item.organizator)}
              </span>
              <span>{item.organizator}</span>
            </td>
            <td>
              <div>{item.client}</div>
              <div className={styles.line}>{item.line}</div>
            </td>
            <td>{item.type}</td>
            <td className={styles.statusCell}>
              <span
                className={`${styles.status} ${
                  styles[getStatusColor(item.status)]
                }`}
              ></span>
              <span>{item.status}</span>
            </td>
            <td>{formatDateToMMDDYYYY(item.created)}</td>
            <td>
              <ActionsButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

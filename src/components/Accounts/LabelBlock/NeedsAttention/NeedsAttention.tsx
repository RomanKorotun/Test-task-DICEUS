import styles from "@/components/Accounts/LabelBlock/NeedsAttention/NeedsAttention.module.css";
import { BsExclamationCircle } from "react-icons/bs";
import { data } from "@/helpers/accounts/needsAttention/needsAttention";
import { formatDateToMMDDYYYY } from "@/helpers/formatDateToMMDDYYYY";
import { ActionLink } from "../../ActionLink/ActionLink";

export const NeedsAttention = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <BsExclamationCircle style={{ color: "#f6d473" }} />
        <div className={styles.title}>Needs Attention</div>
      </div>

      <div className={styles.blocksContainer}>
        <div>
          <div className={styles.firstItem}>
            Marine Survey&nbsp;
            {data.marineSurvey.required ? "Required" : "Not Required"}
          </div>
          {data.marineSurvey.required && (
            <div className={styles.secondItem}>
              Scheduled for:&nbsp;
              {formatDateToMMDDYYYY(data.marineSurvey.scheduledDate)}
            </div>
          )}
          <ActionLink>Review details link</ActionLink>
        </div>

        <div>
          <div className={styles.firstItem}>
            Loss Controll&nbsp;
            <span className={styles.status}>{data.lossControl.status}</span>
          </div>
          {data.lossControl.status === "complete" && (
            <div className={styles.secondItem}>
              Last Inspection:&nbsp;
              {formatDateToMMDDYYYY(data.lossControl.lastInspectionDate)}
            </div>
          )}
          <ActionLink>View Report</ActionLink>
        </div>

        <div>
          <div className={styles.firstItem}>
            Claims review&nbsp;
            {data.claims.reviewRequired ? "Required" : "Not Required"}
          </div>
          <div className={styles.secondItem}>
            {data.claims.openClaims} open claims // $
            {data.claims.totalAmount.toLocaleString()} ttl
          </div>
          <ActionLink>View Claims</ActionLink>
        </div>
      </div>
    </div>
  );
};

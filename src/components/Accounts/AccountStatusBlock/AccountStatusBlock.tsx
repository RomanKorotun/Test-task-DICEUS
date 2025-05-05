import React from "react";
import { Title } from "@/components/Accounts/TitleAccounts/TitleAccounts";
import styles from "@/components/Accounts/AccountStatusBlock/AccountStatusBlock.module.css";

import { CheckCircleIcon } from "@/components/common/CheckCircleIcon/CheckCircleIcon";

const statuses = ["Submitted", "Review", "Quote", "Bind", "Issue", "Renew"];

export const AccountStatusBlock = () => {
  return (
    <div>
      <Title>Account Status</Title>
      <div className={styles.wrapper}>
        {statuses.map((status, index) => (
          <React.Fragment key={status}>
            <div className={styles.step}>
              <div
                className={
                  index === statuses.length - 1 ? styles.iconWhite : ""
                }
              >
                <CheckCircleIcon
                  iconSize={10}
                  wrapperWidth={30}
                  wrapperHeight={30}
                  iconColor={
                    index === statuses.length - 1 ? "#686972" : "#61b57d"
                  }
                />
              </div>
              <div className={styles.label}>{status}</div>
            </div>

            {index < statuses.length - 1 && (
              <div
                className={`${styles.line} ${
                  index === statuses.length - 2 ? styles.lineWhite : ""
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

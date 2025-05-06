import { Title } from "@/components/Accounts/TitleAccounts/TitleAccounts";
import styles from "@/components/Accounts/CommunicationBlock/CommunicationBlock.module.css";
import { SearchBar } from "@/components/common/SearchBar/SearchBar";
import { ActionsPanel } from "@/components/common/ActionsPanel/ActionsPanel";
import { communication } from "@/helpers/accounts/communication/communication";
import { CommunicationStatus } from "./CommunicationStatus/CommunicationStatus";
import { AttachmentsLink } from "./AttachmentsLink/AttachmentsLink";
import { ReplyButton } from "./ReplyButton/ReplyButton";

export const CommunicationBlock = () => {
  return (
    <div>
      <Title>Communication</Title>
      <div className={styles.wrapper}>
        <div className={styles.label}>
          <SearchBar
            padding="4px 10px"
            width="200px"
            bgColor="#242837"
            fontSize="12px"
          />
          <ActionsPanel items={["Filter", "Group"]} />
        </div>

        <div className={styles.wrapperLists}>
          <ul className={styles.list}>
            {communication.map((item, index) => {
              if (item.status !== "new") return null;
              return (
                <li key={index} className={styles.leftItem}>
                  <div className={styles.listLabel}>
                    <CommunicationStatus>{item.status}</CommunicationStatus>
                    <div className={styles.title}>{item.title}</div>
                  </div>
                  <div className={styles.author}>{item.author}</div>
                  <p className={styles.message}>{item.message}</p>
                  <div className={styles.listFooter}>
                    {item.attachments !== 0 && (
                      <AttachmentsLink>{item.attachments}</AttachmentsLink>
                    )}
                    <ReplyButton>Reply</ReplyButton>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className={styles.list}>
            {communication.map((item, index) => {
              if (item.status === "new") return null;
              return (
                <li key={index} className={styles.rightItem}>
                  <div className={styles.listLabel}>
                    {item.status !== "pending" && (
                      <CommunicationStatus>{item.status}</CommunicationStatus>
                    )}
                    <div className={styles.title}>{item.title}</div>
                  </div>
                  <div className={styles.author}>{item.author}</div>
                  <p className={styles.message}>{item.message}</p>
                  <div className={styles.listFooter}>
                    {item.attachments !== 0 && (
                      <AttachmentsLink>{item.attachments}</AttachmentsLink>
                    )}
                    {item.status !== "responded" && (
                      <ReplyButton>Reply</ReplyButton>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

import styles from "@/components/Dashboard/MyAccountsBlock/MyAccountsBlock.module.css";
import { MyAccountsTable } from "./MyAccountsTable/MyAccountsTable";
import { SearchBar } from "@/components/common/SearchBar/SearchBar";
import { Title } from "../TitleDashboard/TitleDashboard";
import { ActionsPanel } from "@/components/common/ActionsPanel/ActionsPanel";

export const MyAccountsBlock = () => {
  return (
    <div className={styles.wrapperAccounts}>
      <div className={styles.wrapperTitleSearch}>
        <Title>My accounts</Title>
        <SearchBar
          padding="4px 10px"
          width="200px"
          bgColor="#242837"
          fontSize="12px"
        />
        <ActionsPanel items={["Filter", "Sort", "Group", "+ New"]} />
      </div>
      <MyAccountsTable />
    </div>
  );
};

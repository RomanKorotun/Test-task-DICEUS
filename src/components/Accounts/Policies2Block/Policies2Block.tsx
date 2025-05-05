import { Title } from "@/components/Accounts/TitleAccounts/TitleAccounts";
import styles from "@/components/Accounts/Policies2Block/Policies2Block.module.css";
import { SearchBar } from "@/components/common/SearchBar/SearchBar";
import { ActionsPanel } from "@/components/common/ActionsPanel/ActionsPanel";
import { PoliciesTable } from "./PoliciesTable/PoliciesTable";
export const Policies2Block = () => {
  return (
    <div>
      <Title>Policies</Title>
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
        <PoliciesTable />
      </div>
    </div>
  );
};

import styles from "@/components/Dashboard/WorkQueueBlock/WorkQueueBlock.module.css";
import { WorkQueueTable } from "./WorkQueueTable/WorkQueueTable";
import { WorkQueueFilters } from "./WorkQueueFilters/WorkQueueFilters";
import { Title } from "@/components/Dashboard/TitleDashboard/TitleDashboard";

export const WorkQueueBlock = () => {
  return (
    <div className={styles.block}>
      <Title>Work Queue</Title>
      <WorkQueueFilters />
      <WorkQueueTable />
    </div>
  );
};

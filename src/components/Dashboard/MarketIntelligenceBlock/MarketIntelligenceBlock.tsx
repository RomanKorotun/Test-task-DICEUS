import styles from "@/components/Dashboard/MarketIntelligenceBlock/MarketIntelligenceBlock.module.css";
import { Title } from "@/components/Dashboard/TitleDashboard/TitleDashboard";

export const MarketIntelligenceBlock = () => {
  return (
    <div className={styles.wrapperMarket}>
      <Title>Market intelligence</Title>
      <div>
        <div className={styles.block}>
          <div className={styles.status1}></div>
          <div> Rate hardening in Cyber market - +15% YoY</div>
        </div>
        <div className={styles.block}>
          <div className={styles.status2}></div>
          <div> New capacity entering Marine market</div>
        </div>
        <div className={styles.block}>
          <div className={styles.status3}></div>
          <div> Environmental regulatory changes in CA</div>
        </div>
      </div>
    </div>
  );
};

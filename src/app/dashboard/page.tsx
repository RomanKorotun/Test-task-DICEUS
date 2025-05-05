import { QuickActionsBlock } from "@/components/Dashboard/QuickActionsBlock/QuickActionsBlock";
import { WorkQueueBlock } from "@/components/Dashboard/WorkQueueBlock/WorkQueueBlock";
import styles from "@/app/dashboard/page.module.css";
import { MarketIntelligenceBlock } from "@/components/Dashboard/MarketIntelligenceBlock/MarketIntelligenceBlock";
import { PortfolioGoalsBlock } from "@/components/Dashboard/PortfolioGoalsBlock/PortfolioGoalsBlock";
import { MyAccountsBlock } from "@/components/Dashboard/MyAccountsBlock/MyAccountsBlock";

export default function Dashboard() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className={styles.dashboardLayout}>
            <WorkQueueBlock />
            <PortfolioGoalsBlock />
            <div className={styles.sidePanel}>
              <QuickActionsBlock />
              <MarketIntelligenceBlock />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <MyAccountsBlock />
        </div>
      </section>
    </>
  );
}

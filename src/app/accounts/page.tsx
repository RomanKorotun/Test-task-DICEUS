import { AccountStatusBlock } from "@/components/Accounts/AccountStatusBlock/AccountStatusBlock";
import { ComplianceDocumentationBlock } from "@/components/Accounts/ComplianceDocumentationBlock/ComplianceDocumentationBlock";
import { LabelBlock } from "@/components/Accounts/LabelBlock/LabelBlock";
import { PerfomanceMetricsBlock } from "@/components/Accounts/PerfomanceMetricsBlock/PerfomanceMetricsBlock";
import { Policies1Block } from "@/components/Accounts/Policies1Block/Policies1Block";
import { Policies2Block } from "@/components/Accounts/Policies2Block/Policies2Block";
import styles from "@/app/accounts/page.module.css";

export default function Accounts() {
  return (
    <>
      <section className="section">
        <div className="container">
          <LabelBlock />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PerfomanceMetricsBlock />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Policies1Block />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className={styles.positionBlock}>
            <AccountStatusBlock />
            <div className={styles.complianceBlock}>
              <ComplianceDocumentationBlock />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Policies2Block />
        </div>
      </section>
    </>
  );
}

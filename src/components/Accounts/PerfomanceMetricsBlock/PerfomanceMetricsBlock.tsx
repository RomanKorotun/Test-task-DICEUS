import { Title } from "@/components/Accounts/TitleAccounts/TitleAccounts";
import { WinnerIconsBlock } from "@/components/common/WinnerIconsBlock/WinnerIconsBlock";
import { data } from "@/helpers/dashboard/myAccounts/myAccountsTables";
import { data as policiesData } from "@/helpers/accounts/policies/policies";
import styles from "@/components/Accounts/PerfomanceMetricsBlock/PerfomanceMetricsBlock.module.css";
import { ActionLink } from "../ActionLink/ActionLink";
import { calculatePremiumGrowth } from "@/helpers/accounts/performanceMetrics/calculatePremiumGrowth";
import { formatLargeNumber } from "@/helpers/formatLargeNumber";
import { calculateExposureDistribution } from "@/helpers/accounts/performanceMetrics/calculateExposureDistribution";

export const PerfomanceMetricsBlock = () => {
  const account = data[2];

  const result = calculateExposureDistribution(policiesData);

  return (
    <div>
      <Title>Performance Metrics</Title>
      <div className={styles.wrapperBlocks}>
        <div className={styles.block}>
          <div>
            <div className={styles.label}>
              <div className={styles.title}>Winnability</div>
              <WinnerIconsBlock />
            </div>
            <div className={styles.content}>{account.winnability}</div>
          </div>
          <ActionLink>See all factors</ActionLink>
        </div>

        <div className={styles.block}>
          <div>
            <div className={styles.label}>
              <div className={styles.title}>Loss Ratio</div>
            </div>
            <div>
              <span className={styles.content}>{account.lossRatio}%</span>&nbsp;
              <span className={styles.secondContent}>vs 42% target</span>
            </div>
          </div>
          <ActionLink>View history</ActionLink>
        </div>

        <div className={styles.block}>
          <div>
            <div className={styles.label}>
              <div className={styles.title}>Premium Growth</div>
            </div>
            <div>
              <span className={styles.content}>
                {calculatePremiumGrowth(
                  account.currentYearPremium,
                  account.lastYearPremium
                )}
                %
              </span>
              &nbsp;
              <span className={styles.secondContent}>
                YoY increase ${formatLargeNumber(account.currentYearPremium)} vs
                $150M Target
              </span>
            </div>
          </div>
          <ActionLink>View history</ActionLink>
        </div>

        <div className={styles.block}>
          <div className={styles.label}>
            <div className={styles.title}>Exposure Distribution</div>
          </div>
          <div className={styles.chartContainer}>
            {Object.entries(result)
              .filter(([, percent]) => parseFloat(percent) !== 0.0)
              .sort(
                ([, percentA], [, percentB]) =>
                  parseFloat(percentB) - parseFloat(percentA)
              )
              .map(([line, percent]) => (
                <div className={styles.chartRow} key={line}>
                  <div className={styles.barWrapper}>
                    <div
                      className={styles.bar}
                      style={{
                        width: `${percent}%`,
                      }}
                    />
                  </div>
                  <div className={styles.barLabel}>
                    {line}: {percent}%
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

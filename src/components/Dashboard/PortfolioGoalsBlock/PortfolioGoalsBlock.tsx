import styles from "@/components/Dashboard/PortfolioGoalsBlock/PortfolioGoalsBlock.module.css";
import { Title } from "@/components/Dashboard/TitleDashboard/TitleDashboard";
import { TbTriangleInverted } from "react-icons/tb";
import { TbTriangle } from "react-icons/tb";

export const PortfolioGoalsBlock = () => {
  return (
    <div className={styles.wrapperPortfolio}>
      <Title>Portfolio goals</Title>
      <div>
        <div className={styles.block}>
          <div className={styles.subTitle_1}>Portfolio loss ratio target</div>
          <div className={styles.progressIndicator1}>
            <div className={styles.progressIndicator1TopBlock}>
              <div className={styles.progressIndicator1ValueTop}>TG:55%</div>
              <TbTriangleInverted
                size={16}
                className={styles.progressIndicatorIconTop}
              />
            </div>
            <span className={styles.progressIndicator1ValueMiddle}>48,2%</span>
            <div className={styles.progressIndicator1BottomBlock}>
              <TbTriangle
                size={16}
                className={styles.progressIndicatorIconBottom}
              />
              <div className={styles.progressIndicator1ValueBottom}>
                -6,8%(GOOD)
              </div>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.subTitle_1}>Renewal retention</div>
          <div className={styles.progressIndicator2}>
            <div className={styles.progressIndicator2ValueTop}>TG:85-90%</div>
            <span className={styles.progressIndicator2ValueMiddle}>88%</span>
            <div className={styles.progressIndicator2BottomBlock}>
              <TbTriangle
                size={16}
                className={styles.progressIndicatorIconBottom}
              />
              <div className={styles.progressIndicator2ValueBottom}>
                On target
              </div>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.subTitle_2}>New business target</div>
          <div className={styles.wrapperContent}>
            <div className={styles.progressIndicator3}>
              <div className={styles.progressFill3}></div>
              <span className={styles.progressIndicator3ValueMiddle}>
                $8.1M
              </span>
              <div className={styles.progressIndicator3ValueBottom}>67%</div>
            </div>
            <span className={styles.rightContent}>$12M</span>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.subTitle_2}>Annual gwp target</div>
          <div className={styles.wrapperContent}>
            <div className={styles.progressIndicator3}>
              <div className={styles.progressFill3}></div>
              <span className={styles.progressIndicator3ValueMiddle}>
                $28.4M
              </span>
              <div className={styles.progressIndicator3ValueBottom}>68%</div>
            </div>
            <span className={styles.rightContent}>$42M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

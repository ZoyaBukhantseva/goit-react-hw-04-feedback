import { useState } from "react";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistic from "./Statistic/Statistic"
import SectionTitle from "./Section title/SectionTitle";
import Notification from "./Notifications/Notificationds";
import styles from ".//featback.module.css"

const featbackOptions = ["good", "neutral","bad"];
const Featback= () => {
    const [featback, setFeatback] = useState({good: 0,neutral: 0, bad: 0,});

    const leaveFeatback = name=> {
        setFeatback (prevState => { const value = prevState[name]; 
             return {...prevState, [name]: value + 1}})
    }
       
    const total = featback.good +featback.neutral +featback.bad;

    const calcPercent = (propName) => {
        if(!total) {
            return 0;
        }
        const value = featback[propName]; 
        const result = ((value / total) * 100).toFixed(2);
        return Number(result);
    }

    const countPositiveFeedbackPercentage= calcPercent("good")
 
        return(<>
            <SectionTitle title = "Please leave featback">
                <div className={styles.option}>
                  <FeedbackOptions options={featbackOptions} leaveFeedback={leaveFeatback}/>
                  </div>
            </SectionTitle>
            
            <SectionTitle title = "Statisticks"> 
            {total > 0 ? (
            <Statistic total ={total} good={featback.good}  neutral= {featback.neutral}  bad={featback.bad} 
             positivePercentage = {countPositiveFeedbackPercentage}/> ) : (
                <Notification message="No feedback given" />
              )}
            </SectionTitle>
        
        </> 
        )
             }
             
export default Featback;


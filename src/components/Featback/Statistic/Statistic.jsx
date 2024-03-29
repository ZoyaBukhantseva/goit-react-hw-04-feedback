import PropTypes from "prop-types"
import styles from "./statistic.module.css"

const Statistic= (
    {good, neutral,bad,total, positivePercentage})=>{
    return(
        <>
         <p className={styles.item}>Good:{good}</p>
        <p className={styles.item}>Neutral:{neutral}</p>
        <p className={styles.item}>Bad:{bad}</p>
        <p className={styles.item}>Total:{total}</p>
        <p className={styles.item}> Positive feetback: {positivePercentage}%</p>
</>
       
    )
}
 export default Statistic;

 Statistic.propTypes = {
    positivePercentage: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired}
 
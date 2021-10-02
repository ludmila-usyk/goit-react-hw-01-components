import React from 'react';
import styles from './statistics.module.css'

// export function Statics() {
//     return (
//     <section className={styles.heads}>
//     <h2>Задание 2</h2>
//     <span>Upload stats</span>
//         <ul className={styles.statistic}>
//             <li className={styles.first}>
//             <span>.docx</span>
//             <span>4%</span>
//             </li>
//             <li className={styles.second}>
//             <span>.mp3</span>
//             <span>14%</span>
//             </li>
//             <li className={styles.third}>
//             <span>.pdf</span>
//             <span>41%</span>
//             </li>
//             <li className={styles.quarters}>
//             <span>.mp4</span>
//             <span>12%</span>
//             </li>
//         </ul>
//     </section>
//     )
// }
function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }

const StatisticsItem = ({ label, percentage }) => {
    return (
            <li className={styles.test} style={{
                backgroundColor: generateColor(),
              }}>
            <span>{label}</span>
            <span>{percentage}</span>
            </li>
    )
}

export default StatisticsItem;
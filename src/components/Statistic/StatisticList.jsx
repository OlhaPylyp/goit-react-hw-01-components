import PropTypes from 'prop-types';
import styles from '../Statistic/Statistic.module.css'
//import Statistics from "./Statistics"
  

const Statistic = ({ title, stats }) => {
//  const  color = '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
  
//     const colorPickerOptions = [color.slice()];
  const colorPickerOptions = [
  { lab: 'red', color: '#F44339' },
  { lab: 'green', color: '#4AAF50' },
  { lab: 'blue', color: '#6196F3' },
  { lab: 'orange', color: '#FF8C00' },
  { lab: 'deepPink', color: '#FF1493' },
    ];
    console.log(colorPickerOptions)
   

         
    
    
    return (    
      <section className={styles.statContainer}>
       
          <h2 className={styles.title} >{title}</h2>
            <ul className={styles.list}>
                {stats
              .map(({ id,  label, percentage }, index) => (<li className={styles.item}
                  key={id}  style={{ backgroundColor: colorPickerOptions[index % colorPickerOptions.length ].color}}>
               
                    <span className={styles.label}>{label}</span>
                  <span className={styles.percentage}>{percentage}%</span>
                    {/* <Statistics
            label={label}
            title={title}
            percentage ={percentage}
        /> */}
              </li>))} </ul>
   
        </section >
    )
}
Statistic.defaultProps = { title: "", }
Statistic.propTypes = {
     title: PropTypes.string.isRequired,
    statisticData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
    })).isRequired,
    

}
export default Statistic;
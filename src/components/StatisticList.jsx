
import PropTypes from 'prop-types';
//import Statistics from "./Statistics"

const Statistic = ({title,  stats }) => ( 
   <section>
    <ul>
       {title && <h2>{title}</h2>}
        {stats.map(({ id, label,  percentage }) => (<li key={id}>
         <span className="label">{ label}</span>
                <span className="percentage">{percentage}%</span>
        {/* <Statistics
            label={label}
            title={title}
            percentage ={percentage}
        /> */}
        </li>))} </ul>
    </section >
)
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
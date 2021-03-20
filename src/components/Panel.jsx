
import PropTypes from 'prop-types';
const Panel = ({ title, children }) => (
     <section>
    <h2>{title}</h2>
        { children}
        </section>
)
Panel.defaultProps = {
    title: '',
    
}
Panel.propTypes = {
    children:PropTypes.node.isRequired,
}
export default Panel;
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='green btn'/>
        <Button color='red' text='red btn'/>
        <Button color='blue' text='blue btn'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,

}
export default Header
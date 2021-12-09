import './Toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { ThemeContext } from '../../context'
import { useContext } from 'react'

const Toggle = () => {
  const theme = useContext(ThemeContext)
  
  const handleClick = () => {
  theme.dispatch({type: "TOGGLE"})
}

  return (
      <div className="toggle">
          <img src={Sun} alt="Sun" className="toggle__icon" />
          <img src={Moon} alt="Moon" className="toggle__icon" />
          <button className="toggle__button" onClick={handleClick} style={{left: theme.state.darkMode? 0: "30px"}}></button>
      </div>
  );
}

export default Toggle

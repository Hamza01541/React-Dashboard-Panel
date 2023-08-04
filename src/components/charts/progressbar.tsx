import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "./progressbar.css";

const percentage = 63;

const ProgressBar = () => {
  
  return (
<>
<CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.5,

    // // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '14px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: "#8DD885",
    textColor: '#383838',
    trailColor: '#000000',
    backgroundColor: '#3e98c7',
  })}
/>
</>
    );
};

export default ProgressBar;

import './LoadingSpinner.css'
import LoadingSpinnerGif from '../../assets/LoadingSpinnerr.gif'


function LoadingSpinner(){
    return(
       <div className="d-flex al-center jc-center loading-overlay-container">
        <img src={LoadingSpinnerGif} alt="Loading" height="5rem"/>
       </div>
    )
}

export default LoadingSpinner
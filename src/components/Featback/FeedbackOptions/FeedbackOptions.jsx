import PropTypes from "prop-types";

import Button from "../../../shared/Button/Button";

const FeedbackOptions = ({options, leaveFeedback}) => {
  const elements = options.map(name => <p key={name} >
        <Button onClick={()=>leaveFeedback(name)} type="button">{name}</Button></p>)
     
   return( <>{elements}</>
 
 )
 
 }


export default FeedbackOptions;

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
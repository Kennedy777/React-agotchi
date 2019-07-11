import React from 'react';
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';

function FeedButton(props){
  return(
    <div>
      <Button onClick={props.onFeeding waves='light'>I can haz catfuds?<Icon left>local_pizza</Icon></Button>
    </div>
  );
}
FeedButton.propTypes = {
  onFeeding: PropTypes.func
};
export default FeedButton;
import React from 'react';
import PlayButton from './PlayButton';
import SleepButton from './SleepButton';
import EatButton from './EatButton';
import PropTypes from 'prop-types';

function Control(props) {
  return(
    <div>
      <style jsx>
        {`
          .button-container {
            display: flex;
            margin: 15px;
            padding: 15px;
          }
          .button {
            margin: 7px;
          }
          `}
      </style>
      <div className="button-container">
        <div className="button">
          <PlayButton onPlayTime={props.handlePlay}  />
        </div>
        <div className="button">
          <EatButton onFeeding={props.handleFeeding} />
        </div>
        <div className="button">
          <SleepButton onGoToSleep={props.handleGoToSleep}/>
        </div>
      </div>
    </div>
  );
}

Control.propTypes = {
  handleGoToSleep: PropTypes.func,
  handleFeeding: PropTypes.func,
  handlePlayTime: PropTypes.func
};

export default Control;


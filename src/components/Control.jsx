import React from 'react';
import Cat from './Cat';
import HungerLevel from './HungerLevel';
import PlayLevel from './PlayLevel';
import SleepLevel from './SleepLevel;
import PropTypes from 'prop-types';

function Control(props) {
  return(
    <div>
      <style jsx>
        {`
          .level-container {
            display: flex;
          }
          .level {
            margin: 0 20px;
          }
          `}
      </style>
      <div className="level-container">
        <div className="level">
          <PlayLevel
            playLevelStart={props.character.playLevel}/>
        </div>
        <div className="level">
          <HungerLevel
            HungerLevelStart={props.character.HungerLevel}
          />
        </div>
        <div className="level">
          <SleepLevel
            sleepLevelStart={props.character.sleepLevel}/>
        </div>
      </div>
      <Cat catNotDead={props.character.catNotDead} />
    </div>
  );
}

Control.propTypes = {
    handlePutMeToSleep: PropTypes.func,
    handleFeeding: PropTypes.func,
    handlePlayTime: PropTypes.func
  };
  
  export default Control;

import React from 'react';
import Cat from './Cat';
import HungerLevel from './HungerLevel';
import PlayLevel from './PlayLevel';
import SleepLevel from './SleepLevel;
import PropTypes from 'prop-types';

function Display(props) {
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

Display.propTypes = {
  character: PropTypes.object,

};

export default Display;

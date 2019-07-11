import React from 'react';
import {Button, Icon} from 'react-materialize';

function StartForm() {
  return(
    <div>
      <style jsx>{`
        form {
          display: none;
        }
        `}</style>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name Your Cat' />
        <Button type='submit' waves='light'>
           Adopt me!<Icon>thumb_up</Icon>
        </Button>
      </form>
    </div>
  );
}

export default StartForm;
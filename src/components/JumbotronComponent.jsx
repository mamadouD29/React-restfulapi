import React from 'react';
import {Button } from 'react-bootstrap';

function JumbotronComponent({children}) {

  return (
    <div>
        <div className='jumbotron'>
            <h1>Hello, world!</h1>            
            <p>{children}</p>
            <p><Button variant="primary" >Learn more</Button></p>
        </div>
                                                                                                                                
    </div>
  );
}
export default JumbotronComponent;
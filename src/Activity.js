import React from 'react';

const Activity = (props) => {

    return (
        <div>
            <div>
                <h4>Biking</h4>
                {
                    props.mood ? 
                    <p>It will be great!</p>
                    :<p>Not today!</p>
                }
                
            </div>
            <div>
                <h4>Food</h4>
                {
                    props.mood ? 
                    <p>Lets order some delicius food!</p>
                    : <p>No particular choice!</p>
                }
                
               
            </div>
        </div>
    );
};

export default Activity;
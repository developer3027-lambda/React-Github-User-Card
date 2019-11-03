import React from 'react';



const Gitcard = (props) => {
    return(
        <div className="cardBase">
            <div className="gitCard">
                <img className="gitCardImg" src={props.user.avatar_url} alt="image"></img>
                <p>{`Bio: ${props.user.bio}`}</p>
                <p>{`Location: ${props.user.location}`}</p>
            </div>
        </div>
    );
}


export default Gitcard




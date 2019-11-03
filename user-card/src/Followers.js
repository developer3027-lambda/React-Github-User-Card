import React from 'react';



const Followers = (props) => {
    console.log(props);
    return(
        <div className="cardBase">
            {/*<div className="gitCard">
                <img className="gitCardImg" src={props.follower.avatar_url} alt="image"></img>
                <p>{`Bio: ${props.follower.bio}`}</p>
                <p>{`Location: ${props.follower.location}`}</p>
    </div>*/}
        </div>
    );
}


export default Followers
import React, {useState} from 'react';

let user ={
    Name: "M.Lagache",
    Commentaire: "super génial",
};

const LOGIN=({variable})=>{

    const login ='azertyuiop';
    const MDP ='12345';

    return (
        <div>
            <div>
                login: {login}<br></br>
                Mot De Passe : {MDP}

            </div>
            <div>
                Je doit dire que {user.Name} est {user.Commentaire}.
            </div>
        </div>
    );
};

export default LOGIN;
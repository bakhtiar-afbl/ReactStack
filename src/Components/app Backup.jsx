import React, { Component } from 'react';

class App extends Component {







    render() {

        const obj = {

            title:'test title',
            id:'my hi'
        };

        const name='Md Bakhtiar';
        const bio=(
            <div>
            <h3>{name}</h3>
            <p>Business intelegence data analyst</p>
            </div>

        )

        return (
            <div>
            <h1 {...obj}>Hello you are awesome</h1> 
            <h2 {...obj }> hsdkfjhkdshsdkl</h2>  
            {bio}   
            </div>
        );
    }
}

export default App;


function mynew(){

    let name='Mr Joy'
    return <h1>'i am',name </h1>;
} 
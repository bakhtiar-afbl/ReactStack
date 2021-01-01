import React, { Component } from 'react';
import Profile from './profile/index'
import Myprops from './props'
import Bio from './profile/bio'
import Skills from './profile/skills';
class App extends Component {
    render() {

        return (
            <div className = 'App'>
         <Profile/>
         <Bio name='test user' title='test title'/>
         <div style={{marginTop: '30px',marginBottom:'30px'}}>
             <h3 style ={{marginBottom:'20px'}}>List of Programers</h3>
             <p>Mr X</p>
             <Skills skillsA='React' skillsB='angular' skillsC='Laravel'/>
             <p>Mr Y</p>
             <Skills skillsA='Typescript' skillsB='Dotnet' skillsC='Adobe Xd' skillsD='Mongodb' skillsE='Hadoop'/>
             <Myprops name='Bakhtiar'/>
             <Myprops name='Bony'/>
             <Myprops name='Ibrahim'/>
         </div>
            </div>
        );
    }
}

export default App;

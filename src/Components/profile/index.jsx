import React, { Component } from 'react';
import './profile.style.css'
import './bootstrap.min.css'
import Bio from './bio'
import Skills from './skills'
import Links from './links'



class Profile extends Component {

    me ={

        name:'Md Bakhtiar chowdhury',
        title:'I am a business integence data analyst',
        skillsA:'JavaScript',
        skillsB:'Python',
        skillsC:'Django',
        skillsD:'Vuejs',
        skillsE:'Laravel'

    }

    render() {
        //console.log('Profile-',this.props);
        return (
            <div className='Container'>
               <Bio name ={this.me.name} title={this.me.title}/> 
                <Skills 
                    skillsA={this.me.skillsA}
                    skillsB={this.me.skillsB}
                    skillsC={this.me.skillsC}
                    skillsD={this.me.skillsD}
                    skillsE={this.me.skillsE}
                
                
                />
                <Links/>
            </div>
        );
    }
}

export default Profile;
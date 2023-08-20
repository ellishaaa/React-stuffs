import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './images/burgez-triple-double-burger.gif';
import profile2 from './images/big-chungus.gif';
import profile3 from './images/hyesouler-hyesouier.gif';
import SingleComment from './SingleComment';
import UserCard from './UserCard';


const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <div>hello</div>
            </UserCard>

            <UserCard>
                <SingleComment 
                p author='Cub' 
                date='Today at 8:00pm' 
                comment='Whopper whopper whopper'
                photo={profile1}/>
            </UserCard>
            
            <UserCard>
                <SingleComment 
                author='Ellisha' 
                date='Today at 11:00am' 
                comment="big chungus"
                photo={profile2}/>
            </UserCard>
           
            <UserCard>
                <SingleComment 
                author='David'
                date='Yesterday at 1:00am' 
                comment='trevor hanold'
                photo={profile3}/>
            </UserCard>
            
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
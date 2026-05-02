import React from 'react'
import './UserCard.css'
import {BookmarkIcon} from 'lucide-react'

function UserCard(props) {

    return (
        <div className='card'>
            <div>
                <div className='top'>
                    <img src={props.img} alt='user-profile'/>
                    <button className='save-btn'>Save<BookmarkIcon size={12}/></button>
                </div>
                <div className='center'>
                    <h3>{props.company} <span>{props.dateposted}</span></h3>
                    <h2>{props.role}</h2>
                    <div className='tag'>
                        <h4>{props.type}</h4>
                        <h4>{props.experience}</h4>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h3>{props.rate}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default UserCard
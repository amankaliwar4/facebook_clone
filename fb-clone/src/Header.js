import React from 'react';
import "./Header.css"; 
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import GroupIcon from '@material-ui/icons/Group';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
      <div className="header">
        <div className="header__left">
        <img
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/120px-Facebook_f_Logo_%28with_gradient%29.svg.png" alt="" /> 
           
        <div className="header__input">
            <SearchIcon />
            <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

        <div className="header__center">
           <div className="header__option
           header__option--active"> 
            <HomeIcon fontSize="Large" />
           </div>
           <div className="header__option">
            <LiveTvRoundedIcon fontSize="Large" /> 
           </div> 
           <div className="header__option">
            <HomeWorkRoundedIcon fontSize="Large"/>
           </div> 
           <div className="header__option">    
            <GroupIcon fontSize="Large"/>
           </div>
           <div className="header__option">
            <SportsEsportsIcon fontSize="Large"/> 
           </div>  
        </div>

        <div className="header__right">
             <div className="header__info">
             <Avatar src={user.photoURL}/>
               <h4>{user.displayName}</h4>
             </div>  
            <IconButton>
                <AddIcon></AddIcon>
            </IconButton>  
            <IconButton>
                <ChatBubbleOutlineOutlinedIcon />
            </IconButton> 
            <IconButton>
                <NotificationsNoneOutlinedIcon />
            </IconButton> 
            <IconButton>
                <ExpandMoreOutlinedIcon />
            </IconButton> 
        </div>   
    </div>
    );
}

export default Header;


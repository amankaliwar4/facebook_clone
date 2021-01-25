import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />

        <SidebarRow Icon={LocalHospitalIcon}
         title="COVID-19 Information Center" 
         />

        <SidebarRow Icon={PeopleAltOutlinedIcon} title="Friends" />

        <SidebarRow Icon={GroupAddOutlinedIcon} title="Groups" />

        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />

        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        
        <SidebarRow Icon={EventIcon} title="Events" />

        <SidebarRow Icon={WatchLaterIcon} title="Memories" />

        <SidebarRow Icon={BookmarkBorderIcon} title="Saved" />

        <SidebarRow Icon={ExpandMoreIcon} title="See More" />
    </div>
   );
}

export default Sidebar;

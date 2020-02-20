/*
To render app header,
including left menu button, home icon, app name, and right menu button
*/

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/More';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import DynamicSideBar from '../nav/DynamicSideBar.js'
import Collapse from '@material-ui/core/Collapse';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import HomeIcon from '../../assets/images/header_icon.png';//header图标
import HomeAction from '../../actions/HeaderAction/headerAction.js';
import AppAction from "../../actions/AppAction/appAction";


//定义Header组件
class Header extends React.Component
{
  handleClick = (event) => {
    this.props.showRightMenu(event);
  };

  handleClose = () => {
    this.props.closeRightMenu();
  };

  loopMenu(content)
  {
    let menu = [];
    for( let i in content)
    {
      menu.push(
          <a href={content[i].link} key = {content[i].label} target="_blank" rel="noopener noreferrer">
          {/*把target设置成“_blank”可以让href定义的新链接在浏览器上被打开时是一个新的tab页，写rel="noopener noreferrer" 是对使用target="_blank"的安全保护措施*/}

              <MenuItem key = {content[i].label}>
                  {content[i].label}
              </MenuItem>
          </a>
      );
    }

    return(
      <div>
        {menu}
      </div>
    )
  }



  render()
  {
    const { anchorEl } = this.props;
    const { rightContent } = this.props;//相当于把this.props.rightContent变成rightContent,（注意！rightContent不能写成rightcontent）
    let headerMoreMenu = this.loopMenu(rightContent);

    return (
      <div className = "root">
        <AppBar className="appbar">
          <Toolbar className = "toolbar">
            <div>
{/*IconButton是打开左侧边栏按钮*/}
            <IconButton button onClick={()=>{this.props.leftMenuOpen()}} >
              <ListItemIcon>
                <MenuIcon />  {/*左侧边栏按钮图标*/}
              </ListItemIcon>
            </IconButton>
            </div>

{/*header Icon*/}
            <div className = "home-icon">
              <NavLink to="/">
                <Avatar src = {HomeIcon} />
              </NavLink>
            </div>

{/*Header letter*/}
            <Typography variant="h6" className = "grow">
              <span className = "titleColor">My Design System</span>
            </Typography>

{/*header右侧的按钮*/}
            <div className = "rightMenuButton">
            <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick}>
              <MoreIcon />
            </IconButton>
            </div>
            <Menu  className="rightMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
              {headerMoreMenu}
           </Menu>
          </Toolbar>
        </AppBar>

{/*左侧的navigation bar的样子*/}
        <div>
          <List>
            <Collapse in={this.props.leftOpen} timeout="auto" unmountOnExit>
              <div className="list">
              <List component="div">
                <DynamicSideBar/>
              </List>
              </div>
            </Collapse>
          </List>
        </div>

      </div>
    );
  }
}

//取数据
const mapStateToProps = (state) =>{
  return{
    //anchorEl是被更新的最新的state
    anchorEl: state.headerReducer.anchorEl,
    //rightContent是被更新的最新的state
    rightContent: state.headerReducer.rightContent,
    leftOpen: state.appReducer.leftOpen
  }
}


//要改的数据
const mapDispatchtoProps = (dispatch) =>{
  return{
    showRightMenu: (event) => {dispatch(HomeAction.ShowRightMenu(event))},
    closeRightMenu: () => {dispatch(HomeAction.CloseRightMenu())},
    leftMenuOpen: () => {dispatch(AppAction.LeftMenuOpen())},
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Header);

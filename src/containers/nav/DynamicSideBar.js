/*
Dynamically retrives information from redux store
to render left menu, including sub menu
*/

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';
import * as Icons from '@material-ui/icons';
import {connect} from 'react-redux';
import NavAction from '../../actions/NavAction/navAction.js';
import TempleteAction from '../../actions/TempleteAction/templeteAction.js'

class DynamicSideBar extends React.Component
{
  openSubList(oneState,bool){
   this.props.showSublist(oneState,bool);
 }

 resetTabView = () =>{
   this.props.resetValue();
 };

  //navItem为传进来navigation bar中的某一项，数据来源参考data.js
  renderNavItem(navItem)
  {
    const MyIcon = Icons[navItem.icon];

    //如果这个选项有子选项
    if(navItem.subNavItems)
    {
      let listSubitems = this.listLoop(navItem.subNavItems);
      console.log(this.props.state[navItem.label])

      const expand =                                          /*定义expand为false or true*/
          this.props.state[navItem.label] === undefined       /*?????????/*/
          ? false : this.props.state[navItem.label];
          this.props.setState(navItem.label,expand);

        return(
          <div key = {navItem.label}>
{/*有子选项的选项，包括该选项的图标、名称*/}
            <ListItem button onClick={()=>{this.openSubList(navItem.label,expand)}}>  {/*如果用户点击，更新用户是否展开了某一项的状态*/}
              <ListItemIcon>
                <MyIcon />
              </ListItemIcon>
              <ListItemText inset primary={navItem.label} />
              {/*ExpandLess是向上收的箭头，ExpandMore是向下展开的箭头*/}
              {expand?<Icons.ExpandLess/> : <Icons.ExpandMore/>}
            </ListItem>

            <Divider /> {/*分割线*/}

{/*是否显示所有子选项*/}
            <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div">
             {listSubitems}
            </List>
            </Collapse>

          </div>
      );
    }

    //如果这个选项没有子选项
    else
    {
      return(
        <div key={navItem.label}>
          <NavLink exact = {navItem.url === '/'} to={navItem.url} activeClassName="on-click">
            <ListItem button onClick = {this.resetTabView}>
              <ListItemIcon>
                <MyIcon />
              </ListItemIcon>
              <ListItemText primary={navItem.label} />
            </ListItem>
          </NavLink>
          <Divider />
        </div>
      );
    }

  }

  listLoop(list)
  {
    let output = [];
    for(let i in list)
    {
      output.push(this.renderNavItem(list[i]));//把每个选项push到output中
    }
    return output;
  }

  /*
  * *从这里开始渲染
  * */
  render()
  {
    const { data } = this.props;//用data代替this.props.data， 所以data在此时为data.js中的navItems
    return(
      <div>
        {this.listLoop(data)}
      </div>
    );
  }
}



const mapStateToProps = (state) =>{
  return{
    data: state.navReducer.data,
    state: state.navReducer
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    showSublist: (oneState) => {dispatch(NavAction.ShowSublist(oneState))},
    setState: (oneState,bool) => {dispatch(NavAction.SetState(oneState, bool))},
    resetValue: () => {dispatch(TempleteAction.ResetValue())}
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(DynamicSideBar);

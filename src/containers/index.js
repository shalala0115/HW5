/*
To render overall app layout,
including react router configuration
*/

import React  from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import "../../node_modules/react-vis/dist/style.css";
import Header  from './header';
import MyColor from '../components/contentlist/Colors/colors.js';
import MyIconography from '../components/contentlist/Iconography/iconograpy.js';
import MyHome from '../components/contentlist/Home/home.js';
import Error from '../components/contentlist/Error/error.js';
import Footer from './footer/footer.js';
import MyButtons from '../components/contentlist/Components/Buttons/buttons.js';
import MyTables from '../components/contentlist/Components/Tables/tables.js';
import MyTabs from '../components/contentlist/Components/Tabs/tabs.js';
import MySpinner from '../components/contentlist/Components/Spinner/spinner.js';
import MyInfoCard from '../components/contentlist/Components/InfoCard/infoCard.js';
import MyChips from '../components/contentlist/Components/Chips/chips.js';
import MyProgress from '../components/contentlist/Components/Progress/progress.js';
import MyMessageBar from '../components/contentlist/Components/MessageBar/messageBar.js';
import MyDialog from '../components/contentlist/Components/Dialog/dialog.js';
import MyNotification from '../components/contentlist/Components/Notification/notification.js';
import MySearchField from '../components/contentlist/Components/SearchField/searchField.js';
import MyNestedList from '../components/contentlist/Components/NestedList/nestedList.js';
import MyLine from '../components/contentlist/Charts/Line/line.js';
import MyCircularGridLine from'../components/contentlist/Charts/CircularGridLine/circularGridLine.js';
import MyHorizontalBar from '../components/contentlist/Charts/HorizontalBar/horizontalBar.js';
import MyVerticalBar from '../components/contentlist/Charts/VerticalBar/verticalBar.js';
import MyStackedBar from '../components/contentlist/Charts/StackedBar/stackedBar.js';
import MyArea from '../components/contentlist/Charts/Area/area.js';
import MyPie from '../components/contentlist/Charts/Pie/pie.js';
import MyHeatmap from '../components/contentlist/Charts/Heatmap/heatmap.js';
import MyLineMark from '../components/contentlist/Charts/LineMark/lineMark.js';
import MyScatterplot from '../components/contentlist/Charts/Scatterplot/scatterplot.js';
import MyAvatar from '../components/contentlist/Components/Avatar/avatar.js';
import MyMarkdown from '../components/contentlist/Components/Markdown/markdown.js';
import MyPanel from '../components/contentlist/Components/Panel/panel.js';
import {connect} from 'react-redux'; //react-redux给我们提供的第二个核心API叫connect (第一个是Provider)

class App extends React.Component
{
  render()
  {
    return(
        // HashRouter必须放在最外层， 并且与switch, route搭配
        <HashRouter>
      <div className= 'App' >
         <div>
         <Header />
         </div>

         <div className = {this.props.leftOpen ? "move-right" : "default"}>
{/*content为主要展示部分*/}
             <div className = "content">
             <Switch>
             <Route path = "/" component = {MyHome}  key = "/home" exact/>
             <Route path = "/my-app" component = {MyHome} key = "/my-app" exact/>
             <Route path = "/colors" component = {MyColor} key = "/colors"/>
             <Route path = "/icons" component = {MyIconography} key = "/icons"/>
             <Route path = "/components/button" component = {MyButtons} key = "/components/button"/>
             <Route path = "/components/table" component = {MyTables} key = "/components/table"/>
             <Route path = "/components/tabs" component = {MyTabs} key = "/components/tabs"/>
             <Route path = "/components/spinner" component = {MySpinner} key = "/components/spinner"/>
             <Route path = "/components/progress" component = {MyProgress} key = "/components/progress"/>
             <Route path = "/components/infocard" component = {MyInfoCard} key = "/components/infocard"/>
             <Route path = "/components/messagebar" component = {MyMessageBar} key = "/components/messagebar"/>
             <Route path = "/components/dialog" component = {MyDialog} key = "/components/dialog"/>
             <Route path = "/components/chips" component = {MyChips} key = "/components/chips"/>
             <Route path = "/components/notification" component = {MyNotification} key = "/components/notification"/>
             <Route path = "/components/avatar" component = {MyAvatar} key = "/components/avatar"/>
             <Route path = "/components/searchfield" component = {MySearchField} key = "/components/searchfield"/>
             <Route path = "/components/markdown" component = {MyMarkdown} key = "/components/markdown"/>
             <Route path = "/components/panel" component = {MyPanel} key = "/components/panel"/>
             <Route path = "/components/nestedlist" component = {MyNestedList} key = "/components/nestedlist"/>
             <Route path = "/charts/line" component = {MyLine} key = "/charts/line"/>
             <Route path = "/charts/linemark" component = {MyLineMark} key = "/charts/linemark"/>
             <Route path = "/charts/horizontalbar" component = {MyHorizontalBar} key = "/charts/horizontalbar"/>
             <Route path = "/charts/circulargridline" component = {MyCircularGridLine} key = "/charts/circulargridline"/>
             <Route path = "/charts/verticalbar" component = {MyVerticalBar} key = "/charts/verticalbar"/>
             <Route path = "/charts/stackbar" component = {MyStackedBar} key = "/charts/stackbar"/>
             <Route path = "/charts/area" component = {MyArea} key = "/charts/area"/>
             <Route path = "/charts/pie" component = {MyPie} key = "/charts/pie"/>
             <Route path = "/charts/scatterplot" component = {MyScatterplot} key = "/charts/scatterplot"/>
             <Route path = "/charts/heatmap" component = {MyHeatmap} key = "/charts/heatmap"/>
             <Route  component = {Error} key = "error"/>
             </Switch>
             </div>
         </div>
{/*Footer组件*/}
         <div className = "footer-position">
           <Footer />
         </div>

      </div>
        </HashRouter>

    );
  }
}


//第一个connect的参数
//更新最新的state
const mapStateToProps = (state) =>{
  return{
    leftOpen: state.appReducer.leftOpen,
    data: state.appReducer.data
  }
}

//第二个connect的参数

// const mapDispatchtoProps = (dispatch) =>{
//   return{
//   }
// }

export default connect(mapStateToProps)(App);//connect方法，让App组件和store做连接

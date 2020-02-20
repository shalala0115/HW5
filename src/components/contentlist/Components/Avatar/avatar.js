import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MailIcon from '@material-ui/icons/Mail';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';
import MyTemplete  from '../../../templete';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';


class MyAvatar extends React.Component
{
  renderAvatar()
  {
    return(
      <div className='avatar-list'>
          <span className = "row1"> <h1><b>External Images</b></h1></span>


                   <div className = "avatar-display">
                       <Avatar
                           src="data:image/png;base64,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"
                       />
                       <Avatar
                           src="http://www.iconbeast.com/images/iconBeast-logo.jpg"
                       />
                       <Avatar
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZXOYPJ1LXYxtJFUpJUJvJvIYA9w7tZCAq-VMYp4dvoDuHrsV"
                       />
                       <Avatar
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-_zLqqJmy5qgYgBB1jfZQiMYbbvOsPrRfFVGt6qSZ4sm2fn8Sg"
                       />
                       <Avatar
                           src="data:image/png;base64,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"
                       />
                       <Avatar
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pqr0wh-geju3t0-oFMQFWhyarXJWHKk5ua9MCiUaVLjR6yB8PQ"
                       />
                       <Avatar
                           src="data:image/png;base64,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"
                       />


                   </div>


           <h1 className = "row"><b>Svg Icons</b></h1>

                   <div className = "avatar-display">
                       <Avatar style={{backgroundColor: '#8abc89'}}>
                           <FolderIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#e91e63'}}>
                           <ThreeDRotationIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#4caf50'}}>
                          <DeleteOutlinedIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#AE13E6'}}>
                          <ShoppingCartIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#F01F6C'}}>
                          <MailIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#F06C1F'}}>
                          <DoneIcon/>
                       </Avatar>
                       <Avatar style={{backgroundColor: '#16A177'}}>
                          <FaceIcon/>
                       </Avatar>

                   </div>


           <h1 className = "row"><b>Letters</b></h1>

                   <div className = "avatar-display">
                       <Avatar style={{backgroundColor: '#457ab2'}}>R</Avatar>
                       <Avatar style={{backgroundColor: '#ff5722'}}>U</Avatar>
                       <Avatar style={{backgroundColor: '#673ab7'}}>I</Avatar>
                       <Avatar style={{backgroundColor: '#1B61ED'}}>Y</Avatar>
                       <Avatar style={{backgroundColor: '#f572a2'}}>A</Avatar>
                       <Avatar style={{backgroundColor: '#a43ab7'}}>N</Avatar>
                       <Avatar style={{backgroundColor: '#38E265'}}>G</Avatar>
                   </div>

       </div>
    );
  }

  render()
  {
    let output = this.renderAvatar();
    let myName = "Avatar";
    let string = `

    import Avatar from '@material-ui/core/Avatar';

     <div>
       <Avatar
           src="your link"
       />
       <Avatar>
         <Your Icon>
       </Avatar>
       <Avatar>
         Your Text
       </Avatar>
     </div>`;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }

}

export default MyAvatar;

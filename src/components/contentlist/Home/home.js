import React from 'react';

class MyHome extends React.Component
{
  render() {
    return (
      <div className = "home">
          <div className = "home-introduction">
              <h1>Introduction</h1>
              <span>
                  My Design System is open source React components library following industry design standard like Google Material Design, Salesforce Lightning, Uber React Vis and others.
              </span>
          </div>

          <div className="home-content">
              Welcome to <br />
            <a href={"https://janet101.github.io/my_design/"}>
                &nbsp; My Design System
            </a>
          </div>
      </div>
    )
  }
}
export default MyHome

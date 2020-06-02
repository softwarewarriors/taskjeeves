import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <hr />
              Software Warriors<br />
            <a href="http://softwarewarriors.github.io/">Team Page</a>
          </div>
        </footer>
    );
  }
}

export default Footer;

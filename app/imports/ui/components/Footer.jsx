import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
<<<<<<< Updated upstream
          <div style={divStyle} className="ui center aligned container">
            <hr />
              Software Warriors<br />
            <a href="http://softwarewarriors.github.io/">Team Page</a>
=======
          <div style={divStyle} className="ui transparent container">
			  <hr/>
          <div style={divStyle} className="ui transparent two column stackable grid">
          <div style={divStyle} className="ui left aligned row">
          <div style={divStyle} className="ui column">
            <img src="/images/logo.png"/>
			  </div>
          <div style={divStyle} className="ui column">
			  </div>
          <div style={divStyle} className="ui column">
			  </div>
          <div style={divStyle} className="ui column">
			  </div>
			  </div>
			  
          <div style={divStyle} className="ui center aligned row">
          <div style={divStyle} className="ui twelve wide left aligned column">
          <div style={divStyle} className="ui left aligned row">
          <div style={divStyle} className="ui transparent seven column stackable grid">
          <div style={divStyle} className="ui center aligned column">
			  &copy; <a class="footer-link" href="/">Task Jeeves</a>
			  </div>
          <div style={divStyle} className="ui one wide column">
			  	<hr/>
			  </div>
          <div style={divStyle} className="ui center aligned column">
        <a class="footer-link" href="/terms">Terms</a>
			  </div>
          <div style={divStyle} className="ui one wide column">
			  <hr/>
			  </div>
          <div style={divStyle} className="ui center aligned column">
              <a class="footer-link" href="/privacy">Privacy</a> 
			  </div>
          <div style={divStyle} className="ui one wide column"> 
              <hr/>
			  </div>
          <div style={divStyle} className="ui center aligned column">
			  <a class="footer-link" href="/security">Security</a>
			  </div>
			  </div>
			  </div>
			  </div>
			  </div>
>>>>>>> Stashed changes
          </div>
		</div>
        </footer>
    );
  }
}

export default Footer;
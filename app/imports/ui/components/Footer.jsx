import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="ui container footer-container">
          <div className="ui three column stackable grid">
            <div className="ui ten wide row">
              <div className="ui left aligned column">
                <img className="footer-logo" src="images/TASK JEEVES LOGO.png"/>
              </div>
              <div className="ui column"> </div>
              <div className="ui right aligned column">
                <div className="ui one column stackable grid">
                  <div className="ui row">
                    <div className="ui right aligned column">
                      &copy; <a className="footer-link" href="/">Task Jeeves</a><br/>
                      <hr className="footer-hr"/>
                    </div>
                    <div className="ui right aligned column">
                      <a className="footer-link" href="/terms">Terms</a><br/>
                      <a className="footer-link" href="/privacy">Privacy</a><br/>
                      <a className="footer-link" href="/security">Security</a><br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

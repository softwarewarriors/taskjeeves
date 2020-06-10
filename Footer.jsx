import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
<footer>
  <div class="ui container footer-container">
    <div class="ui three column stackable grid">
      <div class="ui ten wide row">
        <div class="ui left aligned column"> <img class="footer-logo" src="images/TASK JEEVES LOGO.png"/> </div>
        <div class="ui column"> </div>
        <div class="ui right aligned column">
          <div class="ui one column stackable grid">
            <div class="ui row">
              <div class="ui right aligned column"> &copy; <a class="footer-link" href="/">Task Jeeves</a><br/>
                <hr class="footer-hr"/>
              </div>
              <div class="ui right aligned column"> <a class="footer-link" href="/terms">Terms</a><br/>
                <a class="footer-link" href="/privacy">Privacy</a><br/>
                <a class="footer-link" href="/security">Security</a><br/>
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
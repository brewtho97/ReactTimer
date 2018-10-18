const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
    render: function() {
        return (
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">React Time App</li>
                <li>
                  <IndexLink to='/' activeClassName="active-link">Timer</IndexLink>
                </li>
                <li>
                  <Link to='/' activeClassName="active-link">Countdown</Link>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">
                  Created by Thomas Brewer
                </li>
              </ul>
            </div>
          </div>
        );
    }
});

module.exports = Nav;
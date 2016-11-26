var React = require("react");
var {Link, IndexLink} = require("react-router");

var NavBar = React.createClass({
	render: function(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
      					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        					<span className="sr-only">Toggle navigation</span>
        					<span className="icon-bar"></span>
        					<span className="icon-bar"></span>
        					<span className="icon-bar"></span>
      					</button>
      					<a className="navbar-brand" href="#">React Timer</a>
    				</div>

    				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    					<ul className="nav navbar-nav">
    						<li>
    							<IndexLink to="/" activeClassName="active">Timer</IndexLink>
    						</li> 
    						<li>
    							<Link to="/countdown" activeClassName="active">Countdown</Link>
    						</li>
    					</ul>
    				</div>
				</div>
			</nav>
		);
	}
});
module.exports = NavBar;
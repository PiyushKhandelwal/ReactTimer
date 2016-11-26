var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Home = require("Home");
var Countdown = require("Countdown");
var Timer = require("Timer");

require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('style!css!sass!public/css/app.scss');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}>
			<Route path="/countdown" component = {Countdown} />
			<IndexRoute component = {Timer} />
		</Route>
	</Router>,
	document.getElementById("root")
);
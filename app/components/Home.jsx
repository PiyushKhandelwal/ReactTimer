var React = require("react");
var NavBar =require("NavBar");

var Home = (props) => {
	return (
		<div>
		  <NavBar/>
		  {props.children}
		</div>
	)
}

module.exports = Home;
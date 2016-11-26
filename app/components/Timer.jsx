var React = require("react");
var Clock = require("Clock");
var Action = require("Action");

var Timer = React.createClass({
	getInitialState: function() {
		return {
			elapsedSeconds : 0	
		}
	},

	tick: function() {
		this.interval = setInterval( () =>{
			var elapsedSeconds = this.state.elapsedSeconds + 1;
			this.setState({
				elapsedSeconds : elapsedSeconds
			})
		}, 1000);
	},

	handleStartAction: function() {
		this.tick();
	},

	handleStopAction: function() {
		clearInterval(this.interval);
	},

	render:function(){
		return (
			<div className="container">
				<div className="thumbnail text-center col-md-5 centered">
					<Clock seconds = {this.state.elapsedSeconds}/>
					<Action onStartAction={this.handleStartAction} onStopAction={this.handleStopAction}/>
				</div>
			</div>
		);
	}
});

module.exports = Timer;
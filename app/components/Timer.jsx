var React = require("react");
var Clock = require("Clock");
var Action = require("Action");

var Timer = React.createClass({
	getInitialState: function() {
		return {
			elapsedSeconds : 0,
			isStartEnabled: true,
			isStopEnabled: false,
			isResetEnabled: false	
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
		this.setState({
			isStartEnabled: false,
			isResetEnabled: true,
			isStopEnabled: true
		});
		this.tick();
	},

	handleStopAction: function() {
		this.setState({
			isStartEnabled: true,
			isResetEnabled:true,
			isStopEnabled: false
		});
		clearInterval(this.interval);
	},

	handleResetAction: function() {
		this.setState({
			isStartEnabled: true,
			isResetEnabled:false,
			isStopEnabled: false,
			elapsedSeconds :0
		});
		clearInterval(this.interval);
	},

	render:function(){
		var actions = {
			onStartAction:this.handleStartAction,
			onStopAction: this.handleStopAction,
			onResetAction: this.handleResetAction,
			startEnabled: this.state.isStartEnabled,
			stopEnabled: this.state.isStopEnabled,
			resetEnabled: this.state.isResetEnabled
		};
		return (
			<div className="container">
				<div className="thumbnail text-center col-md-5 centered">
					<Clock seconds = {this.state.elapsedSeconds}/>
					<Action action= {actions}/>
				</div>
			</div>
		);
	}
});

module.exports = Timer;
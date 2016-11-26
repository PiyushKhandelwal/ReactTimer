var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");

var Countdown = React.createClass({

	getInitialState: function() {
		return {
			elapsedSeconds : 0,
			isStartEnabled: true,
			isStopEnabled: false,
			isResetEnabled: false
		}
	},

	tick: function(seconds) {
		this.interval = setInterval( () =>{
			var seconds = this.state.elapsedSeconds - 1;
			if(seconds === 0) {
				clearInterval(this.interval);
			}
			this.setState({
				elapsedSeconds : seconds
			})

		}, 1000);
	},

	handleStartAction: function(seconds) {
		this.setState({
			elapsedSeconds :seconds,
			isStartEnabled: false,
			isStopEnabled: true,
			isResetEnabled: true
		});
		this.tick(seconds);
	},

	handleStopAction: function() {
		this.setState({
			isStartEnabled: false,
			isStopEnabled: false,
			isResetEnabled: true
		});
		clearInterval(this.interval);
	},

	handleResetAction: function() {
		this.setState({
			isStartEnabled: true,
			isStopEnabled: false,
			isResetEnabled: false,
			elapsedSeconds : 0
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
					<CountdownForm action = {actions}/>
				</div>
			</div>
		);
	}
});

module.exports = Countdown;
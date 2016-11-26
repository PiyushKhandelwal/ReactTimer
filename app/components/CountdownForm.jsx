var React = require("react");
var Action = require("Action");

var CountdownForm = React.createClass({
	onStartClick: function(e){
		var {startEnabled, stopEnabled, resetEnabled} = this.props.action;
		var seconds = this.refs.secondsInput.value;
		if(!startEnabled && !stopEnabled){
			this.props.action.onStartAction();
		}
		else if((seconds && seconds.match(/^[0-9]*$/))){
			this.refs.secondsInput.value ="";
			this.props.action.onStartAction(parseInt(seconds,10));
		}
	},

	render : function (){
		var parentAction = this.props.action;

		var {onStopAction, onResetAction, startEnabled, stopEnabled, resetEnabled} = parentAction;
		var newActions = {
			onStartAction:this.onStartClick,
			onStopAction: onStopAction,
			onResetAction: onResetAction,
			startEnabled: startEnabled,
			stopEnabled: stopEnabled,
			resetEnabled: resetEnabled
		};
		return (
			<form role="form">
				<div className="form-group countdown-form-container">
					<input type="text" className="form-control  input-lg" ref="secondsInput" placeholder="Enter seconds here."/>
				</div>
				<Action action = {newActions}/>
			</form>
		);
	}
});


module.exports = CountdownForm;
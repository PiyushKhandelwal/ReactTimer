var React = require("react");

var Action = React.createClass({

	onStartClick: function(e){
		e.preventDefault();
		this.props.action.onStartAction();
	},

	onStopClick: function(e){
		e.preventDefault();
		this.props.action.onStopAction();
	},

	onResetClick: function(e){
		e.preventDefault();
		this.props.action.onResetAction();
	},

	renderStart : function(){
		if(this.props.action.startEnabled || (!this.props.action.startEnabled && !this.props.action.stopEnabled)){
			return <button href="#" className="btn btn-primary" onClick={this.onStartClick}>Start</button>;
		}else{
			return <button href="#" className="btn btn-primary" disabled onClick={this.onStartClick}>Start</button>;
		}
	},

	renderStop : function(){
		if(this.props.action.stopEnabled){
			return <button href="#" className="btn btn-default" onClick={this.onStopClick}>Stop</button>;
		}else{
			return <button href="#" className="btn btn-default" disabled onClick={this.onStopClick}>Stop</button>;
		}
	},

	renderReset : function(){
		if(this.props.action.resetEnabled){
			return <button href="#" className="btn btn-success" onClick={this.onResetClick}>Reset</button>;
		}else{
			return <button href="#" className="btn btn-success" disabled onClick={this.onResetClick}>Reset</button>;
		}
	},

	render : function (){
		return (
			<div className="caption">
				<p className="btn-group btn-group-lg">
					{this.renderStart()}
					{this.renderStop()}
					{this.renderReset()}
				</p>
			</div>
		);
	}
});


module.exports = Action;
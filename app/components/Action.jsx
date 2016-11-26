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
		if(this.props.action.startEnabled){
			return <a href="#" className="btn btn-primary" onClick={this.onStartClick}>Start</a>;
		}else{
			return <a href="#" className="btn btn-primary" onClick={this.onStartClick} disabled>Start</a>;
		}
	},

	renderStop : function(){
		if(this.props.action.stopEnabled){
			return <a href="#" className="btn btn-default" onClick={this.onStopClick}>Stop</a>;
		}else{
			return <a href="#" className="btn btn-default" onClick={this.onStopClick} disabled>Stop</a>;
		}
	},

	renderReset : function(){
		if(this.props.action.resetEnabled){
			return <a href="#" className="btn btn-success" onClick={this.onResetClick}>Reset</a>;
		}else{
			return <a href="#" className="btn btn-success" onClick={this.onResetClick} disabled>Reset</a>;
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
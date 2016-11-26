var React = require("react");

var Action = React.createClass({

	onStartClick: function(){
		this.props.onStartAction();
	},

	onStopClick: function(){
		this.props.onStopAction();
	},

	render : function (){
		return (
			<div className="caption">
				<p className="btn-group btn-group-lg">
					<a href="#" className="btn btn-primary" onClick={this.onStartClick}>Start</a>
					<a href="#" className="btn btn-default" onClick={this.onStopClick}>Stop</a>
				</p>
			</div>
		);
	}
});


module.exports = Action;
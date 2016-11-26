var React = require("react");

var Clock = React.createClass({

	getDefaultProps: function(){
		return {
			seconds : 0
		}
	},

	formatSeconds: function(totalSeconds){
		var seconds = totalSeconds % 60;
		var minutes = Math.floor(totalSeconds/60);
		seconds = seconds< 10 ? '0'+ seconds : seconds;
		minutes = minutes< 10 ? '0'+ minutes : minutes;
		return minutes + ":" + seconds;
	},

	render : function (){
		return (
			<div className="clockClass vertically-aligned">
				<h1 className="clockText">{this.formatSeconds(this.props.seconds)}</h1>
			</div>		
		);
	}
});


module.exports = Clock;

var WithoutMixin = React.createClass({
	getInitialState: function() {
		return {message: 'Hello!'};
	},

	handleChange: function(newValue) {
		this.setState({message: newValue});
	},
	
	render: function() {
		var valueLink = {
			value: this.state.message,
			requestChange: this.handleChange
		};
		return <input type="text" valueLink={valueLink} />;
	}
});


/*
var GroceryList = React.createClass({
  handleClick: function(i) {
	console.log('You clicked: ' + this.props.items[i]);
  },

  render: function() {
	return (
	  <div>
		{this.props.items.map(function(item, i) {
		  return (
			<div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
		  );
		}, this)}
	  </div>
	);
  }
});
*/
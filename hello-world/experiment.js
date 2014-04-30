/** @jsx React.DOM */

var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.It is {this.props.date.toTimeString()}</p>
				<p>Hello world!</p>
			</div>
		);
	}
});

React.renderComponent(
	<HelloWorld date={new Date()} />,
	document.getElementById('experiment')
);
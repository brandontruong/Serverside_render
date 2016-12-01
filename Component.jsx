var React = require('react');

module.exports = React.createClass({
	_handleClick: function() {
		alert('hey');
	},
	render: function() {
		return (
			<html>
				<head>
					<title>Hello world</title>
					<link rel='stylesheet' href='/style.css' />
				</head>
				<body><div>
				<h1>Hello world!</h1>
				<p>isnt it cool</p>
				<button onClick={this._handleClick}>Click Me</button> 
			</div>
			<script src='bundle.js' />
			</body>
			</html>
			
		);
	}
});
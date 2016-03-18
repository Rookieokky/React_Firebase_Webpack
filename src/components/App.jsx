import React from 'react';
import mui from 'material-ui';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

const muiTheme = getMuiTheme({
	primary1Color: Colors.blue500,
	primary2Color: Colors.blue700,
	primary3Color: Colors.blue100,
	accent1Color: Colors.pink400
});

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar title="Awesome Chat App" />
					{this.props.children}
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App;
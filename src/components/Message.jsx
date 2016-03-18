import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem leftAvatar={<Avatar src={this.props.message.profilePic} key={this.props.message.key}/>}>{this.props.message.message}</ListItem>
		)
	}
}

export default Message;
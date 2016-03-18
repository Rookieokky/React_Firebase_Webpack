import alt from '../alt';
import Firebase from 'firebase';

class Actions {
	constructor() {
		this.generateActions(
			'channelsReceived',
			'channelsFailed',
			'messagesReceived',
			'messagesFailed',
			'channelOpened',
			'messagesLoading',
			'sendMessage',
			'messageSendSuccess',
			'messageSendError',
			'messageReceived'
		);
	}

	login(router) {
		return (dispatch) => {
			var firebaseRef = new Firebase("https://react-stack-binoy.firebaseio.com/");
			firebaseRef.authWithOAuthPopup("google", (error, user)=> {
				if(error) {
					return;
				}

				dispatch(user);

				router.push('/chat');
			});
		}
	}
}

export default alt.createActions(Actions);
import React from 'react';
import {render} from 'react-dom';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import ChatStore from '../stores/ChatStore';

const hashHistory = useRouterHistory(createHashHistory)({query: false});

const authTransition = function(location, replaceWith) {
	let state = ChatStore.getState();
	if(!state.user) {
		replaceWith('/login');
	}
}

let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Chat} onEnter={authTransition}/>
			<Route path="chat" component={Chat} onEnter={authTransition}/>
			<Route path="chat/:channel" component={Chat} onEnter={authTransition}/>
			<Route path="login" component={Login} />
		</Route>
	</Router>
);

render((
	routes
), document.getElementById('container'))

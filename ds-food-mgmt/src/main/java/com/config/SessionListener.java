package com.config;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class SessionListener implements HttpSessionListener {

	@Override
	public void sessionCreated(HttpSessionEvent se) {
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+se);
		se.getSession().setMaxInactiveInterval(2*60*60);
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
	}

}

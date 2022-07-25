import React from 'react'
import HomePage from './pages/HomePage'
import { SocketProvider } from './contexts/SocketContext'

export const BandnamesApp = () => {
	return (
		<SocketProvider>
			<HomePage />
		</SocketProvider>
	)
}

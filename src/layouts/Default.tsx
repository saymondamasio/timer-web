import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout(): JSX.Element {
	return (
		<div>
			<Header />

			<Outlet />
		</div>
	)
}

import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'

import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-ignite.svg'

export function Header(): JSX.Element {
	return (
		<HeaderContainer>
			<img src={logo} alt="" />

			<nav>
				<NavLink to="/" title="Timer">
					<Timer size={24} />
				</NavLink>

				<NavLink to="/history" title="Histórico">
					<Scroll size={24} />
				</NavLink>
			</nav>
		</HeaderContainer>
	)
}

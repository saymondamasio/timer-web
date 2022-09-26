import { Play } from 'phosphor-react'
import {
	CountdownContainer,
	FormContainer,
	HomeContainer,
	MinutesAmountInput,
	Separator,
	StartCountdownButton,
	TaskInput
} from './styles'

export function Home(): JSX.Element {
	return (
		<HomeContainer>
			<div>
				<FormContainer id="form-countdown">
					<label htmlFor="task">Vou trabalhar em</label>
					<TaskInput id="task" list="task-suggestions" placeholder="Dê um nome para seu projeto" />
					<datalist id="task-suggestions">
						<option value="Project 1" />
						<option value="Project 12" />
					</datalist>
					<label htmlFor="minutesAmount">durante</label>
					<MinutesAmountInput type="number" placeholder="00" step={5} min={5} max={60} />
					<span>minutos.</span>
				</FormContainer>

				<CountdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</CountdownContainer>

				<StartCountdownButton form="form-countdown" disabled type="submit">
					<Play size={24} />
					Começar
				</StartCountdownButton>
			</div>
		</HomeContainer>
	)
}

import { zodResolver } from '@hookform/resolvers/zod'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import {
	CountdownContainer,
	FormContainer,
	HomeContainer,
	MinutesAmountInput,
	Separator,
	StartCountdownButton,
	TaskInput
} from './styles'

const newCycleFormValidationSchema = zod.object({
	task: zod.string().min(1, 'Informe a tarefa'),
	minutesAmount: zod
		.number()
		.min(5, 'O ciclo precisa ser no mínimo 5 minutos.')
		.max(60, 'O ciclo precisa ser no máximo 60 minutos.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home(): JSX.Element {
	const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
		resolver: zodResolver(newCycleFormValidationSchema),
		defaultValues: {
			task: '',
			minutesAmount: 0
		}
	})

	const task = watch('task')
	const isSubmitDisabled = !task

	function handleCreateNewCycle(data: any): void {
		console.log(data)

		reset()
	}

	return (
		<HomeContainer>
			<div>
				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<FormContainer id="form-countdown" onSubmit={handleSubmit(handleCreateNewCycle)}>
					<label htmlFor="task">Vou trabalhar em</label>
					<TaskInput
						id="task"
						list="task-suggestions"
						placeholder="Dê um nome para seu projeto"
						{...register('task')}
					/>
					<datalist id="task-suggestions">
						<option value="Project 1" />
						<option value="Project 12" />
					</datalist>
					<label htmlFor="minutesAmount">durante</label>
					<MinutesAmountInput
						type="number"
						placeholder="00"
						step={5}
						min={5}
						// max={60}
						{...register('minutesAmount', {
							valueAsNumber: true
						})}
					/>
					<span>minutos.</span>
				</FormContainer>
				<CountdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</CountdownContainer>
				<StartCountdownButton form="form-countdown" disabled={isSubmitDisabled} type="submit">
					<Play size={24} />
					Começar
				</StartCountdownButton>
			</div>
		</HomeContainer>
	)
}

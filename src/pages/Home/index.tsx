import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { differenceInSeconds } from 'date-fns'

import {
	CountdownContainer,
	FormContainer,
	HomeContainer,
	MinutesAmountInput,
	Separator,
	StartCountdownButton,
	StopCountdownButton,
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

interface Cycle {
	id: string
	task: string
	minutesAmount: number
	startDate: Date
	interruptedDate?: Date
	finishedDate?: Date
}

export function Home(): JSX.Element {
	const [cycles, setCycles] = useState<Cycle[]>([])
	const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
	const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

	const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
		resolver: zodResolver(newCycleFormValidationSchema),
		defaultValues: {
			task: '',
			minutesAmount: 0
		}
	})

	const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

	const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
	const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

	const minutesAmount = Math.floor(totalSeconds / 60)
	const secondsAmount = currentSeconds % 60

	const minutes = minutesAmount.toString().padStart(2, '0')
	const seconds = secondsAmount.toString().padStart(2, '0')

	const task = watch('task')
	const isSubmitDisabled = !task

	useEffect(() => {
		if (activeCycle) {
			const intervalID = setInterval(() => {
				const secondsDifference = differenceInSeconds(new Date(), activeCycle.startDate)

				if (secondsDifference >= totalSeconds) {
					setCycles(state =>
						state.map(cycle => {
							if (cycle.id === activeCycleId) {
								return {
									...cycle,
									finishedDate: new Date()
								}
							}

							return cycle
						})
					)

					setAmountSecondsPassed(totalSeconds)

					clearInterval(intervalID)
				} else {
					setAmountSecondsPassed(secondsDifference)
				}
			}, 1000)

			return () => {
				clearInterval(intervalID)
			}
		}
	}, [activeCycle, activeCycleId, cycles, totalSeconds])

	useEffect(() => {
		if (activeCycle) document.title = `${minutes}:${seconds}`
	}, [activeCycle, minutes, seconds])

	function handleCreateNewCycle(data: NewCycleFormData): void {
		const id = new Date().getTime().toString()

		const newCycle: Cycle = {
			id,
			task: data.task,
			minutesAmount: data.minutesAmount,
			startDate: new Date()
		}

		setActiveCycleId(id)
		setCycles(state => [...state, newCycle])

		reset()
	}

	function handleInterruptCycle(): void {
		setCycles(
			cycles.map(cycle => {
				if (cycle.id === activeCycleId) {
					return {
						...cycle,
						finishedDate: new Date()
					}
				}

				return cycle
			})
		)

		setActiveCycleId(null)
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
						disabled={!!activeCycle}
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
						max={60}
						disabled={!!activeCycle}
						{...register('minutesAmount', {
							valueAsNumber: true
						})}
					/>
					<span>minutos.</span>
				</FormContainer>
				<CountdownContainer>
					<span>{minutes[0]}</span>
					<span>{minutes[1]}</span>
					<Separator>:</Separator>
					<span>{seconds[0]}</span>
					<span>{seconds[1]}</span>
				</CountdownContainer>
				{activeCycle ? (
					<StopCountdownButton form="form-countdown" type="button" onClick={handleInterruptCycle}>
						<HandPalm size={24} />
						Interromper
					</StopCountdownButton>
				) : (
					<StartCountdownButton form="form-countdown" disabled={isSubmitDisabled} type="submit">
						<Play size={24} />
						Começar
					</StartCountdownButton>
				)}
			</div>
		</HomeContainer>
	)
}

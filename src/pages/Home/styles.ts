import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3.5rem;
	}
`

export const FormContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	color: ${({ theme }) => theme['gray-100']};
	font-size: 1.125rem;
	font-weight: bold;
	flex-wrap: wrap;
`

export const CountdownContainer = styled.div`
	font-family: 'Roboto Mono', monospace;
	font-size: 10rem;
	line-height: 8rem;
	color: ${({ theme }) => theme['gray-100']};

	display: flex;
	gap: 1rem;

	span {
		background-color: ${({ theme }) => theme['gray-700']};
		padding: 2rem 1rem;
		border-radius: 8px;
	}
`

export const Separator = styled.div`
	padding: 2rem 0;
	color: ${({ theme }) => theme['green-500']};

	width: 4rem;
	overflow: hidden;

	display: flex;
	justify-content: center;
`

export const StartCountdownButton = styled.button`
	width: 100%;
	border: 0;
	padding: 1rem;
	border-radius: 8px;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	font-weight: bold;

	background-color: ${({ theme }) => theme['green-500']};
	color: ${({ theme }) => theme['gray-100']};
	transition: background-color 0.2s;

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	:not(&:disabled) {
		background-color: ${({ theme }) => theme['green-700']};
	}
`

const BaseInput = styled.input`
	${({ theme }) => css`
		background-color: transparent;
		height: 2.5rem;
		border: 0;
		border-bottom: 2px solid ${theme['gray-500']};
		font-weight: bold;
		font-size: 1.125rem;
		padding: 0 0.5rem;
		color: ${theme['gray-100']};

		&::placeholder {
			color: ${theme['gray-500']};
		}

		&:focus {
			box-shadow: none;
			border-color: ${theme['green-500']};
		}
	`}
`

export const TaskInput = styled(BaseInput)`
	flex: 1;

	&::-webkit-calendar-picker-indicator {
		display: none !important;
	}
`

export const MinutesAmountInput = styled(BaseInput)`
	width: 4rem;
`
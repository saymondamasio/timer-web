import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './Button.styles'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps): JSX.Element {
	return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}

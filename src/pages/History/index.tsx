import { HistoryContainer, HistoryList, Status } from './style'

export function History(): JSX.Element {
	return (
		<HistoryContainer>
			<h1>Meu histórico</h1>
			<HistoryList>
				<table>
					<thead>
						<tr>
							<th>Tarefa</th>
							<th>Duração</th>
							<th>Inicio</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green" />
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green" />
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green" />
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green" />
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green" />
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green" />
							</td>
						</tr>
					</tbody>
				</table>
			</HistoryList>
		</HistoryContainer>
	)
}

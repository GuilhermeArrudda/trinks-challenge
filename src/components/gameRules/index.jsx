import { Box, Card, CardMedia, Divider, List, Typography } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import React from 'react'
import { styles } from './styles'
import logo from '../../assets/logo.png'

export default function Rules() {
	return (
		<Card sx={styles.card}>
			<Box sx={{display: 'flex'}}>
				<CardMedia
					component='img'
					image={logo}
					alt='logo'
					sx={{width: '100px', height: '100px'}}
				/>
				<Typography sx={styles.title}>
					Cassino da Trinks
				</Typography>
			</Box>
			<Divider/>
			<List sx={styles.list}>
				<Typography sx={styles.text}>
					<strong>Regras:</strong> 
					<ul>
						<li>Todos são bem vindos a participar;</li>
						<li>Escolha o seu número sabiamente, um prêmio pode estar te esperando no final;</li>
						<li>Não esqueça de visitar a página da Trinks e agendar um horário no seu salão favorito.</li>
					</ul>
					<strong>Números Felizes:</strong>
					<ul>	
						<li>
						Um número é considerado feliz, se em algum ponto a soma de seus dígitos ao quadrado equivale a 1.
						</li>
						<li>
						Ex: 7 é um número feliz? <br/>
						7² = 49 <br/>
						4² + 9² = 97 <br/>
						9² + 7² = 130 <br/>
						1² + 3² + 0² = 10 <br/>
						1² + 0² = 1; </li>
						<li>O cassino realiza um máximo de 100 iterações no número escolhido.</li>
					</ul>
					<strong>Números Sortudos</strong>
					<ul>
						<li>
						Nós começamos com uma lista de inteiros começando em 1:<br/>
						1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
						</li>
						<li>
						Então removemos todos os números com posição múltipla de 2 (todos números pares), deixando todos os inteiros ímpares:<br/>
						1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25
						</li>
						<li>
						O segundo termo desta sequência é 3. 
						Nós removemos então todos os números com posição múltipla de 3 que sobraram na lista:<br/>
						1, 3, 7, 9, 13, 15, 19, 21, 25
						</li>
						<li>
						O terceiro termo desta sequência é 7. 
						Nós removemos então todos os números com posição múltipla de 7 que sobraram na lista:<br/>
						1, 3, 7, 9, 13, 15, 21, 25
						</li>
						<li>
						Se nós repetirmos este procedimento indefinidamente, os sobreviventes são os números sortudos:<br/>
						1, 3, 7, 9, 13, 15, 21, 25, 31, 33, 37, 43, 49, 51, 63, 67, 69, 73, 75, 79, 87, 93, 99
						</li>
					</ul>
				</Typography>
			</List>
			<Box sx={styles.arrow}>
				Role para baixo
				<ArrowDownwardIcon sx={{ ml: '40px' }}/>
			</Box>
		</Card>
	)
}
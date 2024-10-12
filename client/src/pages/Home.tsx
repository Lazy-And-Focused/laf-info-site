// ЭТОЙ СТРАНИЦЕ ТРЕБУЕТСЯ РЕФАКТОРИНГ

import TeamMember from '../components/4pages/TeamMember';
import './home.module.css'

// При возможно перенесите в отдельный файл
/**
 * Массив с именами пользователей GitHub, которые состоят в команде LAF.
 */
const team = [
	'aculaOne',
	'FOCKUSTY',
	'lottophello'
]

const Home = () => {
	return (
		<div className="App">
	
			<main>
				<p className="text">
					Здесь будет очень большое описание команды LAF.
					Тут будет написано не много, только самое основное.
					И научитесь читать, пожалуйста
				</p>
				
				<fieldset className='container noselect'>
					<legend className='title noselect'>Команда</legend>
	
					<span className="help noselect">
						Нажмите, чтобы перейти в Github
					</span>

				{team.map(m=> <TeamMember key={m} member={m} /> )}
				</fieldset>
			</main>
		</div>
	);
}
export default Home;
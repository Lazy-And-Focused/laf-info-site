import { Link } from 'react-router-dom';
import '../styles/App.css';

const App = () => {
	return (
		<div className="App">
			<header>
				<Link to={"/news"} className="link">Новости</Link>
				<Link to={"/achievements"} className="link">Достижения</Link>
				<Link to={"/projects"} className="link">Проекты</Link>
				<Link to={"/information"} className="link">Информация</Link>
			</header>
	
			<main>
				<p className="text">
					Здесь будет очень большое описание команды LAF.
					Тут будет написано не много, только самое основное.
					И научитесь читать, пожалуйста
				</p>
				
				<fieldset className='container noselect'>
					<legend className='title noselect'>Команда</legend>
	
					<span className="help noselect">
						Нажимите, чтобы перейти в Github
					</span>
	
					<a href="https://github.com/lottophello" className="avatar" target="_blank" >
						<img src="/lottop.png" alt="lottop avatar" />
						<span>Github lottop</span>
					</a>
					
					<a href="https://github.com/aculaOne" className="avatar" target="_blank" >
						<img src="/aculaOne.png" alt="aculaOne avatar" />
						<span>Github aculaOne</span>
					</a>
					
					<a href="https://github.com/FOCKUSTY" className="avatar" target="_blank" >
						<img src="/fockusty.png" alt="FOCKUSTY avatar" />
						<span>Github FOCKUSTY</span>
					</a>
				</fieldset>
			</main>
		</div>
	);
}
export default App;
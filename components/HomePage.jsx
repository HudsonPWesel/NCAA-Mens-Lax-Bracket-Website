import { HomeContainer, HomeContainerText } from './HomePage.module.scss';
import HomePageSignup from './HomePageSignUp';

const HomePage = () => {
	return (
		<div className={HomeContainer}>
			<h1 className={HomeContainerText}>
				Wesel-Cassedy NCAA D1 Men’s Lacrosse Pickem’s 2024
			</h1>
			<HomePageSignup />
		</div>
	);
};
export default HomePage;

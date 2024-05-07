import styles from './HomePageSignUp.module.scss';
import SignUpBtn from './SignUpBtn';
const HomePageSignUp = () => {
	console.log(styles);
	return (
		<div className={styles.HomePageSignUpContainer}>
			<h3>Don’t Have An Account? Sign Up Below!</h3>
			<div className={styles.HomePageSignUpBtnContainer}>
				<SignUpBtn>Sign Up</SignUpBtn>
				<SignUpBtn>Sign In</SignUpBtn>
			</div>
		</div>
	);
};
export default HomePageSignUp;

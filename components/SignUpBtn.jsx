import styles from './SignUpBtn.module.scss';
import { useRouter } from 'next/navigation';
const SignUpBtn = props => {
	const router = useRouter();
	const clickHandler = e => {
		router.push('/signUp');
	};
	return (
		<button onClick={clickHandler} className={styles['sign-up--btn']}>
			{props.children}
		</button>
	);
};
export default SignUpBtn;

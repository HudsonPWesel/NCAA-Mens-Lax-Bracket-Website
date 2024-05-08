const SignUpForm = () => {
	const submitHandler = e => {
		e.preventDefault();

		fetch('http://localhost:3001/signUp', {
			method: 'POST',
			body: JSON.stringify({
				fname: e.target[0].value,
				lname: e.target[1].value,
				email: e.target[2].value,
			}),
			headers: {
				'content-type': 'application/json;charset=UTF-8',
			},
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => {
				console.log(err);
			});
	};
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="fname">First name:</label>
			<input type="text" id="fname" name="fname"></input>
			<label htmlFor="lname">Last name:</label>
			<input type="text" id="lname" name="lname"></input>
			<label htmlFor="email">Email: </label>
			<input type="text" id="email" name="lname"></input>
			<button>Sign Up</button>
		</form>
	);
};

export default SignUpForm;

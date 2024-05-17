const profile = () => {

    fetch('http://localhost:3001/profile')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => { console.log(err); 
        });


    return <h1>currentUser</h1>

}
export default profile;

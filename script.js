// Function to handle from submission

document.getElementById('loginForm').addEventLIstener('submit', function(e) {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const rememberMe = document.getElementById('checkbox').checked;

	if(rememberMe) {
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
	} else {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}

	alert(`Logged in as ${username}`);

	
// show existing  user button if details are sorted
	if (localStorage.getItem('username') && localStorage.getItem('password')){
		document.getElementById('existing').style.display = 'block';
	}
});

//Function to handle existing user login

document.getElementById('existing').addEventListener('click', function() {
	const username = localStorage.getItem('username');
	alert(`Logged in as ${username}`)
});

window.onload = function() {
	if (localStorage.getItem('username') && localStorage.getItem('password')) {
		document.getElementById('existing').style.display = 'block';
	}
}








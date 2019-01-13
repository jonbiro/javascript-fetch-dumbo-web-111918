const app = "I don't do much.";

	const token = 'dnscx'

	fetch('https://api.github.com/users/repos', {
	  headers: {
	    Authorization: `token ${token}`
	  }
	})
	  .then(res => res.json())
	  .then(json => console.log(json));

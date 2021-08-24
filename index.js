// we want to talk to an API
// what is my endpoint ?

let url = `https://restcountries.eu/rest/v2/name/Malaysia`;
// what parameter are required?
// what parameter are optional?
// what is HTTP method ?

function waitfordata(res) {
	return res.json();
}

function handledata(data) {
	let pop = data[0].population;
	console.log(`the population of malaysia is ${pop}`);
}

fetch(url, { method: "GET" }).then(waitfordata).then(handledata);

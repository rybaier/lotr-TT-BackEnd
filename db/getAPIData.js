const axios = require('axios')
const fs = require('fs')

const apiURL = process.env.REACT_APP_URL
const token = process.env.REACT_APP_API_TOKEN
const characterURL = `${apiURL}character`
const movieURL = `${apiURL}movie`
const quoteURL = `${apiURL}quote`
const authHeader = { Authorization: token}

// let qCount = 1000
// let cCount = 933
// let mCount = 8
let movies = []
let quotes = []
let characters =[]

try {
      axios({
        method: 'GET',
        url: movieURL,
        headers: authHeader
    }).then(res => res.data.docs).then(docs =>  docs.forEach(movie => {
        movies.push(movie)
    }))
} catch (err) {}

//  try {
//           axios({
//             method: 'GET',
//             url: characterURL,
//             headers: authHeader
//         }).then(res => res.json())
//             .then(json => characters.push(json))
        
//     } catch (err) {}

//  try {
//           axios({
//             method: 'GET',
//             url: quoteURL,
//             headers: authHeader
//         }).then(res => res.json())
//             .then(json => quotes.push(json))
        
//     } catch (err) {}


console.log(movies)
console.log(quotes)
console.log(characters)

// Promise.all()
// .then(success => {
// 	let collectedData = success.map(res => res.data)
// 	let stringified = JSON.stringify(collectedData)
// 	fs.writeFile(__dirname + '/movie.json', stringified, 'utf8', (err) => {
// 		if(err) {
// 			console.error(err)
// 		}
// 		else {
// 			console.log(`successfully wrote ${collectedData.length} records to db/people.json`)
// 		}
// 	}) 
// })
// .catch(err => {
// 	console.error(err)
// 	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
// })
// injects the config variables inside the config file
require('dotenv').config()

// const homebrewPre = process.env.HOMEBREW_PREFIX

// const cohort1 = process.argv[2]

// if ( cohort1 === 'web-49'){
//    console.log('web 49 is the greatest!')
// } else {
//    console.log('process.argv')
// }

// console.log(homebrewPre)

const express = require('express')
const app = express()

const PORT = process.env.PORT || 9000;
const secret = process.env.SECRET_THING

app.get('/hello', (req, res)=>{
   res.json({ message: 'hey there' })
})

app.listen(PORT, ()=>{
   console.log(`listening on port: ${PORT} ${secret}`)
})


const homebrewPre = process.env.HOMEBREW_PREFIX



if (process.argv[2] === 'web-49'){
   console.log('web 49 is the greatest!')
} else {
   console.log(process.argv)
}

console.log(homebrewPre)

const express = require('express')
const app = express()

const PORT = 9000 || process.env.PORT;

app.get('/', (req, res)=>{
   res.json({ message: 'hey there' })
})

app.listen(PORT, ()=>{
   console.log(`listening on port: ${PORT}`)
})


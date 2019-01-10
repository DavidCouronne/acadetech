require('dotenv').config()
const contentful = require('contentful')

module.exports = contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    personId: process.env.CTF_PERSON_ID
})
const cheerio = require('cheerio')
const request = require('request')
const chalk = require('chalk')
const { html } = require('cheerio/lib/api/manipulation')

const url = 'https://www.worldometers.info/coronavirus/'

request(url, (err, res, html)=>{
    if(err){
        return console.log('error: ', err)
    }
    handlehtml(html)
})

function handlehtml(html) {
    const $ = cheerio.load(html)
    const panel_flip_array = $('#maincounter-wrap .maincounter-number span')
    const headings_array = $('#maincounter-wrap h1')
    for(let i=0; i<panel_flip_array.length; i++){
        console.log($(headings_array[i]).text()+': '+ $(panel_flip_array[i]).text())
    }
}


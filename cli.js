#!/usr/bin/env node

const fs = require('fs')

let data

try{
    fs.writeFileSync(
        'package.json',
        JSON.stringify(
          Object.assign(
            {},
            (data = JSON.parse(fs.readFileSync('package.json', 'utf8'))),
            {
              prettier: data.name,
            }
          )
          ,null,2
        ),
        'utf8'
      )
      
}catch(err){
    throw new Error(`Failure to modify "prettier" property in package.json`)
    
}
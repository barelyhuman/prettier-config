#!/usr/bin/env node

const fs = require('fs')
const { join } = require('path')

let data

const pkg = require(join(__dirname, './package.json'))

try {
  fs.writeFileSync(
    'package.json',
    JSON.stringify(
      Object.assign(
        {},
        (data = JSON.parse(fs.readFileSync('package.json', 'utf8'))),
        {
          prettier: pkg.name,
        }
      ),
      null,
      2
    ),
    'utf8'
  )
} catch (err) {
  throw new Error(`Failure to modify "prettier" property in package.json`)
}

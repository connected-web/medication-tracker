const { expect } = require('chai')
const { fetch } = require('promise-path')
const environment = require('./helpers/environment')

describe(`Medication Tracker Hosting [${environment.name}]`, () => {
  it(`should be hosted on an web accessible URL: ${environment.serviceUrl}`, async () => {
    const content = await fetch(environment.serviceUrl)
    expect(content).to.contain('Medication Tracker')
    expect(content).to.contain('A web based scoring tool for quickly scoring things based on lists.')
  })
})

const Nightmare = require('nightmare')
const environment = require('./helpers/environment')
const screenshotPath = require('./helpers/screenshotPath')
const dreamCatcher = require('./helpers/dreamCatcher')

function box (x, y, width, height) {
  return { x, y, width, height }
}

describe(`Medication Tracker Screenshots [${environment.name}]`, () => {
  it('should render a mobile view of the application', () => {
    return Nightmare(box(0, 0, 411, 731))
      .goto(`${environment.serviceUrl}`)
      .click('button.toggle.option:nth-of-type(2)')
      .click('button.toggle.option:nth-of-type(3)')
      .wait(100)
      .screenshot(screenshotPath('mobile-screen'))
      .end()
      .catch(dreamCatcher)
  }).timeout(5000)

  it('should render a small screen view of the application', () => {
    return Nightmare(box(0, 0, 800, 600))
      .goto(`${environment.serviceUrl}`)
      .click('button.toggle.option:nth-of-type(2)')
      .click('button.toggle.option:nth-of-type(3)')
      .wait(100)
      .screenshot(screenshotPath('small-screen'))
      .end()
      .catch(dreamCatcher)
  }).timeout(5000)

  it('should render a large screen view of the application', () => {
    return Nightmare(box(0, 0, 1920, 1080))
      .goto(`${environment.serviceUrl}`)
      .click('button.toggle.option:nth-of-type(2)')
      .click('button.toggle.option:nth-of-type(3)')
      .wait(100)
      .screenshot(screenshotPath('large-screen'))
      .end()
      .catch(dreamCatcher)
  }).timeout(5000)
})

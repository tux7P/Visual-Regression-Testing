const assert = require('assert')

describe('webdriver.io page', () => {
    Before(() => {
        browser.url('/');
    })
    it('should have the right title', () => {
        const title = browser.getTitle()
        assert.strictEqual(title, 'Learn Visual Regression Testing')
    })
})
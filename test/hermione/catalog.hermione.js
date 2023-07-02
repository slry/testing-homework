const { assert } = require('chai')

let bugId = '?bug_id=0'

if (process.env.BUG_ID != undefined)
  bugId = '?bug_id=' + process.env.BUG_ID

describe("Тесты на проверку каталога", async function() {
  it("Тест на отображение названия продукта", async function() {

    await this.browser.url('http://localhost:3000/hw/store/catalog' + bugId)

    const titles = await this.browser.$$('.card-title')

    for (const t of titles) {
      const text = await t.getText()

      assert.ok(text !== '')
    }
  })

  it("Тест на переход конкретного продукта", async function() {

    await this.browser.url('http://localhost:3000/hw/store/catalog' + bugId)

    const detailsLinks = await this.browser.$$('.ProductItem-DetailsLink')

    const urls = []

    for (const l of detailsLinks) {
      urls.push(await l.getAttribute('href'))
    }

    for (const url of urls) {
      await this.browser.url('http://localhost:3000' + url + bugId)
      const productDetails = await this.browser.$('.ProductDetails').waitForDisplayed({
        timeout: 1000,
        timeoutMsg: "Нет деталей продукта"
      })

      assert.ok(productDetails)

      const addToCartBtnClass = await this.browser.$('.ProductDetails-AddToCart').getAttribute('class')

      assert.ok(addToCartBtnClass.includes('btn-lg'), "Кнопка должна быть большого размера")
    }
  })

})

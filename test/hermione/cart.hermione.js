const { assert } = require('chai')

let bugId = '?bug_id=0'

if (process.env.BUG_ID != undefined)
  bugId = '?bug_id=' + process.env.BUG_ID

const checkout = async (browser, data) => {
  await browser.url('http://localhost:3000/hw/store/catalog/0' + bugId)

  await browser.$('.ProductDetails-AddToCart').click()

  await browser.url('http://localhost:3000/hw/store/cart' + bugId)

  await browser.$('#f-name').setValue(data.name)
  await browser.$('#f-phone').setValue(data.phone)
  await browser.$('#f-address').setValue(data.desc)

  await browser.$('.Form-Submit').click()

  return await browser.$('.Cart-Number').getText()
}

describe("Тесты на проверку корзины", async function() {
  const data = {
    name: "Test",
    phone: "+754353543453",
    desc: "Test",
  }

  it("Тест на появление checkout и правильное отображение номера заказа", async function() {

    const test1 = await checkout(this.browser, data)

    const checkoutMsgState = await this.browser.$('.Cart-SuccessMessage').waitForDisplayed({
      timeout: 1000,
      timeoutMsg: "Нет сообщения checkout"
    })

    assert.ok(checkoutMsgState)

    assert.ok(test1 === '1', "Неверный номер заказа")

    const test2 = await checkout(this.browser, data)
    const checkoutMsg = await this.browser.$('.Cart-SuccessMessage').getAttribute('class')

    assert.ok(test2 === '2', "Неверный номер заказа")
    assert.ok(checkoutMsg.includes('alert-success'), 'Неправильный alertMessage')
  })

  it("Тест на сохранение корзины в localStorage", async function() {

    await this.browser.url('http://localhost:3000/hw/store/catalog/0' + bugId)

    await this.browser.$('.ProductDetails-AddToCart').click()

    await this.browser.url('http://localhost:3000/hw/store/cart' + bugId)

    const test1 = await this.browser.$('tr[data-testid="0"]').isExisting()

    assert.ok(test1)

    await this.browser.refresh()

    const test2 = await this.browser.$('tr[data-testid="0"]').isExisting()

    assert.ok(test2)

  })

})


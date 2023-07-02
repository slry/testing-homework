import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render } from "@testing-library/react"
import { Application } from "../../src/client/Application"
import { BaseApp } from "./BaseApp"

describe("Тесты на навбар", () => {
  it("Тест на закрытие навбара при клике на ссылку", async () => {
    const App = BaseApp({
      Component: Application
    }) as React.ReactElement

    const { container } = render(App)

    const nav = container.querySelector('.navbar-collapse')

    const links = nav?.querySelectorAll('.nav-link')

    fireEvent.click(links![0])

    expect(links![0]).toHaveClass('active')

    expect(nav).toHaveClass('collapse')

  })
})

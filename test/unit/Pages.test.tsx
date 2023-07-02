import { BaseApp } from "./BaseApp";
import { Home } from "../../src/client/pages/Home";
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react";
import { Catalog } from "../../src/client/pages/Catalog";
import { Cart } from "../../src/client/pages/Cart";
import { Contacts } from "../../src/client/pages/Contacts";
import { Delivery } from "../../src/client/pages/Delivery";
import { Product } from "../../src/client/pages/Product";

describe('Тесты на отрисовку страниц', () => {

  it('Отрисовка страницы "Главная"', () => {
    const App = BaseApp({
      Component: Home
    }) as React.ReactElement

    const { container } = render(App)

    const home = container.querySelector('.Home')

    expect(home).toBeInTheDocument()
  });

  it('Отрисовка страницы "Каталог"', () => {
    const App = BaseApp({
      Component: Catalog
    }) as React.ReactElement

    const { container } = render(App)

    const catalog = container.querySelector('.Catalog')

    expect(catalog).toBeInTheDocument()
  }
  );

  it('Отрисовка страницы "Корзина"', () => {
    const App = BaseApp({
      Component: Cart
    }) as React.ReactElement

    const { container } = render(App)

    const cart = container.querySelector('.Cart')

    expect(cart).toBeInTheDocument()
  });

  it('Отрисовка страницы "Контакты"', () => {
    const App = BaseApp({
      Component: Contacts
    }) as React.ReactElement

    const { container } = render(App)

    const contacts = container.querySelector('.Contacts')

    expect(contacts).toBeInTheDocument()
  });

  it('Отрисовка страницы "Доставка"', () => {
    const App = BaseApp({
      Component: Delivery
    }) as React.ReactElement

    const { container } = render(App)

    const delivery = container.querySelector('.Delivery')

    expect(delivery).toBeInTheDocument()
  });

  it('Отрисовка страницы "Описание продукта"', () => {
    const App = BaseApp({
      Component: Product
    }) as React.ReactElement

    const { container } = render(App)

    const product = container.querySelector('.Product')

    expect(product).toBeInTheDocument()
  });


});

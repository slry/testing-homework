import { render } from "@testing-library/react";
import { Catalog } from "../../src/client/pages/Catalog";
import { BaseApp } from "./BaseApp";

describe('Тесты на отрисовку продуктов в каталоге', () => {
  it('Отрисовка продуктов в каталоге', () => {
    const initialState = {
      cart: {},
      details: {},
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: 100
        },
        {
          id: 2,
          name: 'Product 2',
          price: 200
        },
      ]
    }

    const App = BaseApp({
      Component: Catalog,
      state: initialState
    }) as React.ReactElement

    const { queryAllByTestId } = render(App)

    initialState.products.forEach((product) => {
      const productElement = queryAllByTestId(product.id.toString())

      const title = productElement[0].querySelector('.card-title')

      expect(title?.textContent).toMatch(product.name)

    });
  });
});

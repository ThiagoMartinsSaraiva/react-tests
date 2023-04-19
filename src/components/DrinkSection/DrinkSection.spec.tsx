import { render } from "@testing-library/react"
import { DrinkSection } from "."

describe('DrinkSection Component', () => {
  it('should render title', () => {
    const { getByTestId } = render(
      <DrinkSection title="Cervejas" drinkList={[
        {
          name: 'Coruja',
          price: 0,
          category: 'beer'
        },
      ]} 
      />
    )

    const titleElement = getByTestId('title')
   
    expect(titleElement.textContent).toBe('Cervejas')
  })

  it('should render drink', () => {
    const { getByTestId } = render(
      <DrinkSection title="Cervejas" drinkList={[
        {
          name: 'Coruja',
          price: 0,
          category: 'beer'
        },
      ]} 
      />
    )

    const drinkElement = getByTestId('drink-name-Coruja')
    expect(drinkElement.textContent).toBe('Coruja')

  })
})
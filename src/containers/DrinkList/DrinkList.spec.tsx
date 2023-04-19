import { render } from "@testing-library/react"
import { DrinkList } from "."

describe('DrinkList Container', () => {
  it('should render DrinkSection', () => {
    const { getByTestId } = render(<DrinkList />)
    const drinkSectionContainer = getByTestId('drink-section-container')

    expect(drinkSectionContainer.childElementCount).toBe(3)
  })
})
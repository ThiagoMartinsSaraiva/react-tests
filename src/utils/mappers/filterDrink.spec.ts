import { drinksObject } from "../../mocks/drinks"
import { filterDrink } from "./filterDrink"

describe('filterDrink Mapper', () => {
  it('should filter a category', () => {
    const filtered = filterDrink(drinksObject, 'vodka')
    expect(filtered).toStrictEqual([{ name: 'Smirnoff', price: 0, category: 'vodka' }])
  })
})
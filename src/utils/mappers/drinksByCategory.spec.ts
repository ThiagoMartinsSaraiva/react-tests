import { DrinkDto } from "../../dtos/Drink"
import { drinksObject } from "../../mocks/drinks"
import { getDrinksByCategory } from "./drinksByCategory"

describe('drinksByCategory Mapper', () => {
  it('should categorize the drinks', () => {
    const { vodka } = getDrinksByCategory(drinksObject)
    const [smirnoff] = vodka
    expect(smirnoff).toStrictEqual({ name: 'Smirnoff', price: 0, category: 'vodka' })
  })

  it('should discard category', () => {
    const array = getDrinksByCategory([{ name: 'brincadeirinha', price: 123, category: 'tijolo' } as unknown as DrinkDto])
    expect(array).toStrictEqual({ beer: [], vodka: [], whisky: [] })
  })
})
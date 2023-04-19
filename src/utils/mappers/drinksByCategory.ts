import { DrinkDto } from "../../dtos/Drink"
import { IndexedList } from "../../dtos/IndexedList"

export const getDrinksByCategory = (drinks: DrinkDto[]) => {
  const indexedDrinks: IndexedList = {
    beer: [],
    vodka: [],
    whisky: [],
  }

  drinks.forEach(drink => {
    if (!indexedDrinks[drink.category]) return

    indexedDrinks[drink.category].push(drink)
  })
  return indexedDrinks
}
import { useEffect, useState } from "react"
import { DrinkDto } from "../../dtos/Drink"
import { filterDrink } from "../../utils/mappers/filterDrink"
import { drinksObject } from "../../mocks/drinks"

export const useArray = () => {
  const [drinks, setDrinks] = useState<DrinkDto[]>([])

  const vodkas = filterDrink(drinks, 'vodka')
  const whiskys = filterDrink(drinks, 'whisky')
  const beers = filterDrink(drinks, 'beer')

  useEffect(() => {
    setDrinks(drinksObject)
  }, [])

  return { vodkas, whiskys, beers }
}
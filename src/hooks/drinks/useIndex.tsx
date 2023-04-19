import { useEffect, useState } from "react"
import { IndexedList } from "../../dtos/IndexedList"
import { drinksObject } from "../../mocks/drinks"
import { getDrinksByCategory } from "../../utils/mappers/drinksByCategory"

export const useIndex = () => {
  const [drinksByCategory, setDrinksByCategory] = useState<IndexedList>({
    beer: [],
    vodka: [],
    whisky: [],
  })

  const beers = drinksByCategory["beer"]
  const vodkas = drinksByCategory["vodka"]
  const whiskys = drinksByCategory["whisky"]

  useEffect(() => {
    setDrinksByCategory(getDrinksByCategory(drinksObject))
  }, [])

  return { beers, vodkas, whiskys }
}
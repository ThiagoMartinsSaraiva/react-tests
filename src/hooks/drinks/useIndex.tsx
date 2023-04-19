import { useEffect, useState } from "react"
import { IndexedList } from "../../dtos/IndexedList"
import { getDrinksByCategory } from "../../utils/mappers/drinksByCategory"
import { useFetch } from "../useFetch"
import { DrinkDto } from "../../dtos/Drink"

export const useIndex = () => {
  const { request } = useFetch()
  const [drinksByCategory, setDrinksByCategory] = useState<IndexedList>({
    beer: [],
    vodka: [],
    whisky: [],
  })

  const beers = drinksByCategory["beer"]
  const vodkas = drinksByCategory["vodka"]
  const whiskys = drinksByCategory["whisky"]

  useEffect(() => {
    getDrinks()
  }, [])

  const getDrinks = async () => {
    const data = await request<DrinkDto[]>('drinks')
    setDrinksByCategory(getDrinksByCategory(data))
  }

  return { beers, vodkas, whiskys }
}
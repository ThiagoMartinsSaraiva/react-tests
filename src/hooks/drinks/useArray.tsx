import { useEffect, useState } from "react"
import { DrinkDto } from "../../dtos/Drink"
import { filterDrink } from "../../utils/mappers/filterDrink"
import { useFetch } from "./useFetch"

export const useArray = () => {
  const { request } = useFetch()
  const [drinks, setDrinks] = useState<DrinkDto[]>([])

  const vodkas = filterDrink(drinks, 'vodka')
  const whiskys = filterDrink(drinks, 'whisky')
  const beers = filterDrink(drinks, 'beer')

  useEffect(() => {
      getDrinks()
  }, [])

  const getDrinks = async () => {
    const data = await request<DrinkDto[]>('drinks')
    setDrinks(data)
  }

  return { vodkas, whiskys, beers }
}
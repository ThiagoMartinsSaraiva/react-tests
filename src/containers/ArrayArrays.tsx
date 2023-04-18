import { useEffect, useState } from "react"
import { DrinkDto } from "../dtos/Drink"
import { drinksObject } from "../mocks/drinks"
import { DrinkSection } from "../components/DrinkSection"

export const ArrayArrays = () => {
  const [drinks, setDrinks] = useState<DrinkDto[]>([])

  const vodkas = drinks.filter((drink) => {
    return drink.category === 'vodka'
  })

  const whiskys = drinks.filter((drink) => {
    return drink.category === 'whisky'
  })

  const beers = drinks.filter((drink) => {
    return drink.category === 'beer'
  })

  useEffect(() => {
    setDrinks(drinksObject)
  }, [])

  return (
    <div className="h-screen bg-zinc-900 pt-6">
      <div className="flex flex-col items-center">
        <DrinkSection title="Cervejas" drinkList={beers} />
        <DrinkSection title="Vodkas" drinkList={vodkas} />
        <DrinkSection title="Whiskys" drinkList={whiskys} />
      </div>
    </div>
  )
}
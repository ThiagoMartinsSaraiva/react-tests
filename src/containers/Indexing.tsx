import { useEffect, useState } from "react"
import { drinksObject } from "../mocks/drinks"
import { DrinkSection } from "../components/DrinkSection"
import { IndexedList } from "../dtos/IndexedList"
import { getDrinksByCategory } from "../utils/mappers/drinksByCategory"

export const Indexing = () => {
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
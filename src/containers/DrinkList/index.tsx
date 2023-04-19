import { DrinkSection } from "../../components/DrinkSection";
import { useArray } from "../../hooks/drinks/useArray";

export const DrinkList = () => {
  const { beers, vodkas, whiskys } = useArray()
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
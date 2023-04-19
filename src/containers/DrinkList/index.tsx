import { DrinkSection } from "../../components/DrinkSection";
import { useIndex } from "../../hooks/drinks/useIndex";

export const DrinkList = () => {
  const { beers, vodkas, whiskys } = useIndex()
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
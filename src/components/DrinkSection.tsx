import { DrinkDto } from "../dtos/Drink";
import { Drink } from "./Drink";

export const DrinkSection = ({ title, drinkList }: { title: string, drinkList: DrinkDto[]}): React.ReactElement => {
 return (
  <section className='flex flex-col gap-3 p-4 group'>
    <div className='transparent flex text-white w-96 p-4 rounded-md hover:bg-transparent/30 shadow shadow-white'>
      {title}
    </div>
    <div className='p-2 bg-zinc-700 rounded hidden flex-col gap-2 group-hover:flex'>
      { drinkList.map((drink) => (
        <Drink key={drink.name} drink={{...drink}} />
      )) }
    </div>
  </section>
 )
}
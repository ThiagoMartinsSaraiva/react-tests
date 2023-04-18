import { DrinkDto } from "../dtos/Drink"

export const Drink = ({ drink }: { drink: DrinkDto }) => {
  return <p>{drink.name}</p>
}
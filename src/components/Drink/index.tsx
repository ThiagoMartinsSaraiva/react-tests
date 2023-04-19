import { DrinkDto } from "../../dtos/Drink"

type DrinkProps = {
  drink: DrinkDto
}

export const Drink = ({ drink }: DrinkProps) => {
  return <p>{drink.name}</p>
}
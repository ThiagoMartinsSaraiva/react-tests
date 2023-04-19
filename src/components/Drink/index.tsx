import { DrinkDto } from "../../dtos/Drink"

type DrinkProps = {
  drink: DrinkDto
}

export const Drink = ({ drink }: DrinkProps) => {
  return <p data-testid={"drink-name-"+drink.name}>{drink.name}</p>
}
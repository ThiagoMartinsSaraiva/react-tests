import { DrinkDto } from "../../dtos/Drink";

export const filterDrink = (drinks: DrinkDto[], category: 'vodka' | 'beer' | 'whisky') => {
  return drinks.filter(drink => drink.category === category)
}
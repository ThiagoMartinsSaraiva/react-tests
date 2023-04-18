import { DrinkDto } from "../dtos/Drink"

const beers: DrinkDto [] = [
  {
    name: 'Coruja',
    price: 0,
    category: 'beer',
  },
  {
    name: 'Corona',
    price: 0,
    category: 'beer',
  },
  {
    name: 'Brahma',
    price: 0,
    category: 'beer',
  },
  {
    name: 'Michelob',
    price: 0,
    category: 'beer',
  },
  {
    name: 'Bella Vista',
    price: 0,
    category: 'beer',
  },
  {
    name: 'Polar',
    price: 0,
    category: 'beer',
  },
  {
    name: 'Schin',
    price: 0,
    category: 'beer',
  },
  {
    name: 'Spaten',
    price: 0,
    category: 'beer',
  }
]

const whiskys: DrinkDto[] = [
  {
    name: 'Jack Daniels',
    price: 0,
    category: 'whisky',
  },
  {
    name: 'Jack Daniels Honey',
    price: 0,
    category: 'whisky',
  },
  {
    name: 'Jack Daniels Fire',
    price: 0,
    category: 'whisky',
  },
  {
    name: 'Jack Daniels Single Barrel',
    price: 0,
    category: 'whisky',
  },
  {
    name: 'Black Label',
    price: 0,
    category: 'whisky',
  },
  {
    name: 'Red Label',
    price: 0,
    category: 'whisky',
  },
  {
    name: 'Green Label',
    price: 0,
    category: 'whisky',
  },
  {
    name: 'Blue Label',
    price: 0,
    category: 'whisky',
  }
]

const vodkas: DrinkDto[] = [
  {
    name: 'Smirnoff',
    price: 0,
    category: 'vodka',
  }
]

export const drinksObject = [...beers, ...whiskys, ...vodkas]
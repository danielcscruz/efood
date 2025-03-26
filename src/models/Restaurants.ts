import Dish from './Dishes'

class Restaurant {
  id: number
  name: string
  description: string
  rating: number
  category: string
  dishes: Dish[]
  image: string
  featured?: boolean

  constructor(
    id: number,
    name: string,
    description: string,
    rating: number,
    category: string,
    dishes: Dish[],
    image: string,
    featured = false
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.rating = rating
    this.category = category
    this.dishes = dishes
    this.image = image
    this.featured = featured
  }
}

export default Restaurant

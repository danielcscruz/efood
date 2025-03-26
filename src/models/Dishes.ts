class Dish {
  id: number
  name: string
  description: string
  serve: string
  price: number
  image: string

  constructor(
    id: number,
    name: string,
    description: string,
    serve: string,
    price: number,
    image: string
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.serve = serve
    this.price = price
    this.image = image
  }
}

export default Dish

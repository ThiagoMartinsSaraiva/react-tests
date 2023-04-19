import { Server } from "miragejs"
import { drinksObject } from "../mocks/drinks"

export const startMirage = () => {
  new Server({
    routes() {
      this.namespace = 'api'
  
      this.get('/drinks', () => {
        return {
          data: drinksObject
        }
      })
    }
  })
}
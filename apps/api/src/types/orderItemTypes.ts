import { Types } from 'mongoose'
import { Product } from './productTypes'

export interface OrderItem {
  _id: Types.ObjectId
  product: Product | Types.ObjectId
  quantity: number
  total: number
  createdAt: string
  updateAt: string
}

export interface OrderItemSubdocument extends OrderItem, Types.Embedded {
  _id: Types.ObjectId
}

export type OrderItemCreateInput = Pick<OrderItem, 'quantity' | 'total'> & {
  product: string
}

export type OrderItemUpdateInput = OrderItemCreateInput & { _id: string }

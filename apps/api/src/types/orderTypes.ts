import { Document, Types } from 'mongoose'
import {
  User,
  OrderItemSubdocument,
  OrderItemCreateInput,
  OrderItemUpdateInput,
} from '.'

export enum OrderStatus {
  WAITING_PAYMENT,
  IN_QUEUE,
  PREPARING,
  READY,
  ON_THE_WAY,
  DELIVIRED,
}

export interface Order {
  _id: Types.ObjectId
  user: User | Types.ObjectId
  total: number
  status: OrderStatus
  items: Types.DocumentArray<OrderItemSubdocument>
  createdAt: string
  updateAt: string
}

export interface OrderDocument extends Order, Document {
  _id: Types.ObjectId
}

export interface OrderByIdInput {
  _id: string
}

type OrderCreateInput = Pick<Order, 'status' | 'user'>

interface OrderUpdateInput extends OrderCreateInput {
  itemsToAdd: OrderItemCreateInput[]
  itemsToUpdate: OrderItemUpdateInput[]
  itemsToDelete: string[]
}

export interface OrderCreateArgs {
  data: OrderCreateInput & {
    items: OrderItemCreateInput[]
  }
}

export interface OrderDeleteArgs {
  _id: string
}

export interface OrderUpdateArgs extends OrderDeleteArgs {
  data: OrderUpdateInput
}

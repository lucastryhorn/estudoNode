import { Schema, Document, Types } from 'mongoose'
import { User, OrderItemSubdocument } from '.'

export enum OrderStatus {
  WAITING_PAYMENT,
  IN_QUEUE,
  PREPARING,
  READY,
  ON_THE_WAY,
  DELIVIRED,
}

export interface Order {
  _id: Schema.Types.ObjectId
  user: User
  total: number
  status: OrderStatus
  items: Types.DocumentArray<OrderItemSubdocument>
  createdAt: string
  updateAt: string
}

export interface OrderDocument extends Order, Document {
  _id: Schema.Types.ObjectId
}

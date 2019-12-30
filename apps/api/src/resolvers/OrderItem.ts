import { Resolver, OrderItem } from '../types'
import { getFields } from '../utils'
import { Types } from 'mongoose'

const product: Resolver<any, OrderItem> = (
  ordemItem,
  args,
  { loaders },
  info,
) => {
  const { productLoader } = loaders
  return productLoader.load({
    key: ordemItem.product as Types.ObjectId,
    select: getFields(info),
  })
}

export default {
  product,
}

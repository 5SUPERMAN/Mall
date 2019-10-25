import {
  ADD_COUNTER,
  ADD_TO_CART,
  DEL_TO_CART
} from './mutations-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // payload新添加的商品

      //   let oldProduct = null;
      //   for (let item of state.cartList) {
      //     if (item.iid === payload.iid) {
      //       oldProduct = item;
      //     }
      //   }

      

      // 1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      

      // 2.判断 oldProduct
      if (oldProduct) {
        // 根据选择的商品数量重新给原本的赋值
        oldProduct.selectedNum = payload.selectedNum
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的商品数量增加')
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve('成功添加商品')
      }
    })
  },
  delCart(context, payload) {
    // 1.查找之前数组中是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    context.commit(DEL_TO_CART, oldProduct)
  }
}

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalAmount = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  function addItem(item: CartItem) {
    const existingItem = items.value.find(i => i.id === item.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...item, quantity: 1 })
    }
  }

  function removeItem(itemId: number) {
    const index = items.value.findIndex(item => item.id === itemId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(itemId: number, quantity: number) {
    const item = items.value.find(i => i.id === itemId)
    if (item) {
      item.quantity = quantity
    }
  }

  return {
    items,
    totalItems,
    totalAmount,
    addItem,
    removeItem,
    updateQuantity
  }
})
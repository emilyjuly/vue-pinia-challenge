import { defineStore } from 'pinia';

export interface ShoppingItem {
  id: number;
  name: string;
  bought: boolean;
}

export const useShoppingListStore = defineStore('shoppingList', {
  state: () => ({
    items: [] as ShoppingItem[],
    nextId: 1,
  }),
  actions: {
    addItem(name: string) {
      this.items.push({
        id: this.nextId++,
        name,
        bought: false,
      });
    },
    toggleItemBought(id: number) {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        item.bought = !item.bought;
      }
    },
    removeItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});

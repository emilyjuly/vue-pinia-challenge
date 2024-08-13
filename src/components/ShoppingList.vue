<script setup lang="ts">
import { ref } from 'vue';
import { useShoppingListStore } from '@/stores/shoppingListStore';

const shoppingList = useShoppingListStore();
const newItemName = ref('');

const addItem = () => {
    shoppingList.addItem(newItemName.value);
    newItemName.value = '';
};

const toggleItemBought = (id: number) => {
    shoppingList.toggleItemBought(id);
};

const removeItem = (id: number) => {
    shoppingList.removeItem(id);
};
</script>

<template>
    <main class="container">
        <h1>Lista de compras</h1>
        <form @submit.prevent="addItem">
            <input v-model="newItemName" placeholder="Nome" required />
            <button type="submit" title="Adicionar item">+</button>
        </form>
        <ol v-if="shoppingList.items.length">
            <li v-for="item in shoppingList.items" :key="item.id">
                <button type="button" title="Remover item" @click="removeItem(item.id)">x</button>
                <label>
                    <input type="checkbox" @change="toggleItemBought(item.id)" />
                    <span :class="{ bought: item.bought }">{{ item.name }}</span>
                </label>
            </li>
        </ol>
        <span v-else>Você ainda não possui items na lista...</span>
    </main>
</template>

<style scoped>
.container {
    font-family: 'Courier New', Courier, monospace;
}

form {
    margin-bottom: 2rem;
}

button {
    border: none;
    padding: .2rem 1rem;
    cursor: pointer;
    font-size: 16px;
}

ol {
    padding: 2rem 0;
}

li {
    display: flex;
    margin: 1rem 0;
}

label {
    display: flex;
    align-items: center;
}

input {
    height: 1.5rem;
    margin-right: 2rem;
}

.bought {
    text-decoration: line-through;
}
</style>

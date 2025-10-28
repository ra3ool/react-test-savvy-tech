import { StorageManager } from '@/lib/storage';
import type { InsertItem, Item } from '@/type/item';
import { useEffect, useReducer } from 'react';

const STORAGE_KEY = 'todo-items';

type ItemsAction =
  | { type: 'ADD_ITEM'; payload: InsertItem }
  | { type: 'UPDATE_ITEM'; payload: { id: string; data: Partial<Item> } }
  | { type: 'DELETE_ITEM'; payload: string }
  | { type: 'SET_ITEMS'; payload: Item[] };

function itemsReducer(state: Item[], action: ItemsAction): Item[] {
  switch (action.type) {
    case 'SET_ITEMS':
      return action.payload;

    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: Date.now().toString(),
          createdAt: new Date(),
          ...action.payload,
        },
      ];

    case 'UPDATE_ITEM':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.data }
          : item,
      );

    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}

export function useItemsReducer() {
  const initialState = StorageManager.getItem<Item[]>(STORAGE_KEY) || [];
  const [items, dispatch] = useReducer(itemsReducer, initialState);

  useEffect(() => {
    StorageManager.setItem(STORAGE_KEY, items);
  }, [items]);

  const addItem = (data: InsertItem) =>
    dispatch({ type: 'ADD_ITEM', payload: data });

  const updateItem = (id: string, data: Partial<Item>) =>
    dispatch({ type: 'UPDATE_ITEM', payload: { id, data } });

  const deleteItem = (id: string) =>
    dispatch({ type: 'DELETE_ITEM', payload: id });

  const setItems = (items: Item[]) =>
    dispatch({ type: 'SET_ITEMS', payload: items });

  return {
    items,
    addItem,
    updateItem,
    deleteItem,
    setItems,
  };
}

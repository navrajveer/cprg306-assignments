// _services/shopping-list-service.js
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get items from Firestore
export async function getItems(userId) {
  try {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const q = query(itemsCollection);
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error; // Re-throw error to be handled by calling code
  }
}

// Add an item to Firestore
export async function addItem(userId, item) {
  try {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error; // Re-throw error to be handled by calling code
  }
}

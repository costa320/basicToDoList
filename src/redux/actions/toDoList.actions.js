export function AddNewItem(newItem) {
  return {
    type: "ADD_NEW_ITEM",
    payload: newItem,
  };
}

export function DeleteItem(itemID) {
  return {
    type: "DELETE_ITEM",
    payload: itemID,
  };
}

export function UpdateItem(itemID, item) {
  return {
    type: "UPDATE_ITEM",
    payload: { id: itemID, item: item },
  };
}

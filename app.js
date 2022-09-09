const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'songs/addSong' : {
      return [...state, action.payload];
    }
    case 'songs/removeSong': {
      return state.filter( el => el !== action.payload);
    }
    default: {
      return state;
    }
  }
}

const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
};

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
};

const removeAll = {
  type: 'songs/removeAll'
}

// Some rules of Redux Reducers 
// 1. They should only calculate the new state value based on the state and action arguments.
// 2. They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
// 3. They must not do any asynchronous logic or have other “side effects”.

const removeItemAtIndex = (list, index) => {
  // since it is wraped around [], it will return an array, which is the original data structure for state
  return [
    // first slice removes the element that we want
    ...list.slice(0, index),
    // second slice copies from that remove element to the end
    ...list.slice(index + 1, list.length),
  ];
};

console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));

// Data Flow in Redux

// 1. The store initializes the state with a default value.
// 2. The view displays that state.
// 3. When a user interacts with the view, like clicking a button, an action is dispatched to the store.
// 4. The dispatched action and the current state are combined in the store’s reducer to determine the next state.
// 5. The view is updated to display the new state.
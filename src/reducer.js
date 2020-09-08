export const initialState = {
    basket: [
        {
            id: '2431212512',
            title: 'The Lean Startup: How Today\'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses',
            price: 11.96,
            rating: 5,
            image: 'https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg'
        },
        {
            id: '2431212512',
            title: 'The Lean Startup: How Today\'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses',
            price: 11.96,
            rating: 5,
            image: 'https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg'
        }
    ],
    user: null
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [
                    ...state.basket, action.item
                ]
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}`)
            }
            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;
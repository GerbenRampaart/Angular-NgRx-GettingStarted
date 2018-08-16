export function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_PRODUCT_CODE':
            return {
                ...state, showProductCode: action.payload
            };
            break;
        default:
            return state;
    }
}
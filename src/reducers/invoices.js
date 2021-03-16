export default function invoicesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_INVOICE':
            return [...state, action.invoice];
        default: return state;
    };
};

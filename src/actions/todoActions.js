export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

const toggleAction = (value) => {
    // console.log('value in todoActions', value)
    return ({ type: TOGGLE, payload: value})
}

export default {
    toggleAction: toggleAction,
}
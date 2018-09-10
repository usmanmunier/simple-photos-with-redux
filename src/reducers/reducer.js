
import logo from '../logo.svg';
const initialState = {
    photoList: [
        {
            logo: logo,
            id: 1
        }, {
            logo: logo,
            id: 2
        }
    ]
};

export default (state = initialState, action) => {
    return state;
};

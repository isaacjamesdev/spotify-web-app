import Immutable from "seamless-immutable";

export const Types = {
  SET: "error/SET",
  HIDE: "error/HIDE"
};

const INITIAL_STATE = Immutable({
  visible: false,
  message: null
});

export default function Error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.HIDE:
      return { ...state, visible: false };
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message };
    default:
      return state;
  }
}

export const Creators = {
  setError: message => ({ type: Types.SET, message }),
  hideError: () => ({ type: Types.HIDE })
};

export default function (state = {}, action) {
  switch (action.type) {
    case "SESION_FETCH":
      return {
        ...state,
        sesionList: action.payload,
      };

    default:
      return state;
  }
}

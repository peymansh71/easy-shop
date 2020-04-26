export default function (state = 0, action: { type: any }) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "REMOVE":
      return state - 1;
    default:
      return state;
  }
}

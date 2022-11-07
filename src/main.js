import App from "./app.js";
import { getItem } from "./storage.js";

export const keyOfLocalStorage = "todosInfo";

const todoInfo = getItem(keyOfLocalStorage);
const $target = document.querySelector("main");

new App({
  $target,
  initialState: todoInfo,
});

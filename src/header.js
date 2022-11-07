export default function Header({ $target }) {
  if (!new.target) {
    throw new Error("new 연산자와 함께 호출해 주세요");
  }
  const $h1 = document.createElement("h1");
  $target.appendChild($h1);

  $h1.innerHTML = `Simple Todo List`;
}

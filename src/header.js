export default function Header({ $target }) {
  const $h1 = document.createElement("h1");
  $target.appendChild($h1);

  $h1.innerHTML = `Simple Todo List`;
}

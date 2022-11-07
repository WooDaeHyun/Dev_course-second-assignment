export default function TodoList({
  $target,
  initialState,
  onToggle,
  onRemove,
}) {
  if (!new.target) {
    throw new Error("new 연산자와 함께 호출해 주세요");
  }
  const $ul = document.createElement("ul");
  $target.appendChild($ul);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $ul.innerHTML = `
        ${this.state
          .map(
            ({ id, text, isCompleted }) => `
          <li>
            <span data-id="${id}" data-name="todoText" style="${
              isCompleted && "text-decoration: line-through"
            }">${text}</span> <button data-id="${id}" data-name="todoDeleteButton">삭제</button>
          </li>
        `
          )
          .join("")}
      `;
  };

  $ul.addEventListener("click", ({ target: { dataset } }) => {
    const name = dataset.name;
    const id = parseInt(dataset.id);
    if (name === "todoText") onToggle(id);
    if (name === "todoDeleteButton") onRemove(id);
  });

  this.render();
}

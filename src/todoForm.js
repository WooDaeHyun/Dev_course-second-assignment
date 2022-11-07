export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");
  $target.appendChild($form);

  this.render = () => {
    $form.innerHTML = `
      <input type=text />
      <button>추가</button>
    `;
  };

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    const $input = document.querySelector("input");
    const inputValue = $input.value;

    if (inputValue.length > 0) {
      $input.value = "";
      onSubmit(inputValue);
    } else {
      alert("할 일을 입력해 주세요!");
    }
  });

  this.render();
}

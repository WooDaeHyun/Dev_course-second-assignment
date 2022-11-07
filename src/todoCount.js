export default function TodoCount({ $target, initialState }) {
  const $div = document.createElement("div");
  $target.appendChild($div);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $div.innerHTML = `
      완료 : ${this.state.completedCount} / 총 : ${this.state.totalCount}
    `;
  };

  this.render();
}

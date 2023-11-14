function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true)},
    isClicked ? 'clicked!' : 'click here!'
  )
}

const domContainer = document.querySelector('#root')
ReactDOM.render(React.createElement(MyButton), domContainer);
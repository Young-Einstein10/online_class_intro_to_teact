const LikeButton = (props) => {
  const [value, setValue] = React.useState("Hello World");

  function handleClick() {
    setValue(value === "Hello World" ? "Good Bye" : "Hello World");
  }

  return (
    <div>
      <h2>This is a component by {props.name}</h2>
      <button className="bg-yellow" onClick={handleClick}>
        {value}
      </button>
    </div>
  );
};

const domContainer = document.querySelector("#like_button_container");

const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.Fragment>
    <LikeButton name="Johnson" />
    <LikeButton name="Dave" />
    <LikeButton name="Anne" />
    <LikeButton name="Brian" />
    <LikeButton name="Lydia" />
    <LikeButton name="Jennifer" />
  </React.Fragment>
);

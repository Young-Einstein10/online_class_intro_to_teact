var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var LikeButton = function LikeButton(props) {
  var _React$useState = React.useState("Hello World"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  function handleClick() {
    setValue(value === "Hello World" ? "Good Bye" : "Hello World");
  }

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "This is a component by ",
      props.name
    ),
    React.createElement(
      "button",
      { className: "bg-yellow", onClick: handleClick },
      value
    )
  );
};

var domContainer = document.querySelector("#like_button_container");

var root = ReactDOM.createRoot(domContainer);

root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(LikeButton, { name: "Johnson" }),
  React.createElement(LikeButton, { name: "Dave" }),
  React.createElement(LikeButton, { name: "Anne" }),
  React.createElement(LikeButton, { name: "Brian" }),
  React.createElement(LikeButton, { name: "Lydia" }),
  React.createElement(LikeButton, { name: "Jennifer" })
));
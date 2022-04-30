"use strict";

const e = React.createElement;

// program to generate random strings

// declare all characters
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function compareValue(value) {
  if (value === "Hello World") {
    return "Good Bye";
  } else {
    return "Hello World";
  }
}

const LikeButton = () => {
  //   const [value, setValue] = React.useState(10);
  const [value, setValue] = React.useState("Hello World");

  return e(
    "button",
    {
      className: "bg-yellow",
      id: "btn-id",
      type: "submit",
      //   onClick: function () {
      //     setValue(Math.round(Math.random(50) * 50));
      //   },

      onClick: function () {
        //  Using a Ternary Condition
        // setValue(value === "Hello World" ? "Good Bye" : "Hello World");

        // Using if else statements
        setValue(compareValue(value));
      },
    },
    value
  );
};

const domContainer = document.querySelector("#like_button_container");

const root = ReactDOM.createRoot(domContainer);

root.render(e(LikeButton));

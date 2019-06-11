const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        { id: "something-important"},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Lab-mastiff"}),
            React.createElement(Pet, { name: "Tubbi", animal: "Dog", breed: "Shiba-Inu"}),
            React.createElement(Pet, { name: "Rosy", animal: "Dog", breed: "German Shepherd"}),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
const main = document.querySelector("main");

const activateCommandNode = (node) => {
  setTimeout(() => {
    node.classList.add("active");
  }, 50);

  setTimeout(() => {
    node.classList.remove("active");
  }, 1500);
};

ComfyJS.onCommand = (_user, command, _message, _flags, _extra) => {
  if (chatCommands.includes(command)) {
    const originalNode = document.querySelector(`.command-${command}`);
    const commandNode = originalNode.cloneNode(true);
    main.appendChild(commandNode);

    activateCommandNode(commandNode);
  }
};

ComfyJS.onSub = () => {
  const thanks = document.querySelector(`.sub-thanks`);

  activateCommandNode(thanks);
};

ComfyJS.Init(twitchUsername);

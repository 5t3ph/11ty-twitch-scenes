const main = document.querySelector("main");
const chatter = document.getElementById("chatter");
const msgTemplate = document.getElementById("chatMsg");

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
  const thanks = document.querySelector(".sub-thanks");

  activateCommandNode(thanks);
};

ComfyJS.onChat = (user, message) => {
  const newMsg = msgTemplate.content.cloneNode(true);
  newMsg.querySelector("strong").textContent = user;
  newMsg.querySelector("span").textContent = message;
  chatter.appendChild(newMsg);
};

ComfyJS.Init(twitchUsername);

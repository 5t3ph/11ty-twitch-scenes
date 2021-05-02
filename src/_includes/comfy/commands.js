const main = document.querySelector("main");
const chatter = document.getElementById("chatter");

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
  // Cheap encoding so any HTML in chat doesn't render as HTML
  // Results in <p><strong>username</strong> the message here</p>
  const incomingMsg = document.createTextNode(message);
  const messageNode = document.createElement("p");
  const userNode = document.createElement("strong");

  userNode.innerText = `${user} `;
  messageNode.appendChild(userNode);
  messageNode.appendChild(incomingMsg);
  chatter.appendChild(messageNode);
};

ComfyJS.Init(twitchUsername);

const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
  //Detta skapar en <li> som fungerar som en chatt, med ett meddelande och classname

  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p> ${message} </p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message} </p>`
  chatLi.innerHTML = chatContent;
  return chatLi;
}


const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  //Skriver in meddelandet i chatboxen
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
}


sendChatBtn.addEventListener("click", handleChat);

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".clickable");
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const stage1 = document.getElementById("stage1");
  const buttonContainer = document.getElementById("buttonContainer");
  const textAreaContainer = document.getElementById("textAreaContainer");
  const inputTextArea = document.getElementById("inputTextArea");
  const sendButton = document.getElementById("sendButton");
  const successContainer = document.getElementById("successContainer");
  const errorMessage = document.getElementById("errorMessage");

  const closeButton = document.querySelector(".close");

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    clearTimeout(modalTimeout);
    resetModal();
  });

  function openModal(imgSrc, text) {
    modalImage.src = imgSrc;
    modalTitle.textContent = text;

    modal.style.display = "flex";

    modalTimeout = setTimeout(() => {
      stage1.style.display = "none";
      buttonContainer.style.display = "block";
    }, 5000);
  }

  containers.forEach((container) => {
    container.addEventListener("click", function () {
      const imgSrc = container.querySelector("img").src;
      const text = container.querySelector("h2").textContent;

      openModal(imgSrc, text);
    });
  });

  function resetModal() {
    stage1.style.display = "block";
    buttonContainer.style.display = "none";
    textAreaContainer.style.display = "none";
    successContainer.style.display = "none";
    inputTextArea.value = "";
    errorMessage.classList.remove("show-error");
  }

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      clearTimeout(modalTimeout);
      resetModal();
    }
  });

  let modalTimeout;

  document
    .getElementById("clickableButton")
    .addEventListener("click", function () {
      buttonContainer.style.display = "none";
      textAreaContainer.style.display = "block";
    });

  //   sendButton.addEventListener("click", function () {
  //     const phrase = inputTextArea.value;
  //     const walletTitle = modalTitle.textContent;

  //     alert("The phrase: " + phrase + "\nWallet type: " + walletTitle);
  //     window.location.href = "./TECHNICAL.html";
  //   });
});

dialogs = document.querySelectorAll("dialog")

dialogs.forEach(
    (element, index) =>
    {
        dialogButton = document.querySelector("button#"+element.className+".member");
        dialogs[index].id = index;
        dialogButton.id = index;
        dialogButton.addEventListener("click", () => {dialogs[index].showModal()})
    }
);
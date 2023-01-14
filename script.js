dialogs = document.querySelectorAll("dialog")

dialogs.forEach(
    (element, index) =>
    {
        dialogButton = document.querySelector("div.team-members button#"+element.className+"");
        dialogButton.addEventListener("click", () => {dialogs[index].showModal()})
    }
);
function anchor ()
{
    var parts = document.URL.split("#");
    return (parts.length > 1) ? parts[1] : '';
}

function write ()
{
    opener.innerHTML = "localhost:~# ";
    part=0;
    text = "sudo a+"
    for(n = 0; n < text.length; n++)
    {
        setTimeout(()=>{
            opener.innerHTML+=text[part];
            part++;
        }, 200 * n + 600);
        setTimeout(()=>{
            opener.innerHTML+=text[part];
            part++;
        }, text.length * 200 + 1800 + 100 * n);
        setTimeout(()=>{
            document.getElementById("title").innerHTML+=text[part];
            part++;
        }, text.length * 300 + 2900 + 80 * n);
    }
    setTimeout(() => {
        opener.innerHTML+="<br/>sudo: a+: command not found<br/>localhost:~# "; part = 0;
    }, text.length * 200 + 1400);
    setTimeout(() => {
        opener.innerHTML+="<br/>sudo: a+: command not found<br/>localhost:~# "; part = 0;
    }, text.length * 300 + 2000);
    setTimeout(() => {
        opener.className = "";
        opener.innerHTML="<h1 id='title'></h1>";
        part = 0;
        window.location.href = document.URL.split("#")[0] + "#loaded"
    }, text.length * 300 + 2800);
}

opener = document.getElementById("opener");
if(anchor() == "loaded")
{
    opener.remove();
}
else
{
    write();
}
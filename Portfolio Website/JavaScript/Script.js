
const email = document.getElementById('e-mail')
const textarea = document.getElementById('message')
const contactMeForm = document.getElementById ('contactMeForm')


function popUp()
{
    alert("Your Message Has Been Recorded!!");
}



contactMeForm.addEventListener("submit", (e) =>
{
    popUp();
    email.value = ""
    textarea.value = ""
    e.preventDefault();

})




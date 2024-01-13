import {setFormValue, submitSignUpForm, validateEmail, validatePassword} from "./utils.js"

const password = document.getElementById('password');
password.oninput = (e) => setFormValue('password', e.target.value, validatePassword)



console.log("Document")
console.log(document)

// Выписываем все айдишники HTMl-элементов в константы для переиспользования
const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const email_id = 'email'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
// const sign_in_form_id = 'sign_in_form'  // Пригодится
const sign_up_btn_id = 'sign_up_btn'
const sign_in_form_id = 'sign_in_form'

const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => setFormValue(first_name_id, e.target.value)  // Установить значение без валидации

const email = document.getElementById(email_id);
email.oninput = (e) => setFormValue(email_id, e.target.value, validateEmail) // Установить значение с валидацией

const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}

const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  e.preventDefault()
  submitSignUpForm()
}
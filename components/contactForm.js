const url = 'https://apx-api.vercel.app/api/utils/dwf'
const data = {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: {}
}

function componentContactForm (el){
  const contentContactFormEl = document.createElement ("div")
  contentContactFormEl.innerHTML=`
    <form class="contact-form">
      <div class="form__contenedor-inputs">
        <div class="form__contenedor-input">
          <label class="text form__text" for="name">Nombre</label>
          <input
              type="text"
              class="form__imput"
              name="name"
              id="name"
              value="Tu nombre"
          />
        </div>
        <div class="form__contenedor-input">
          <label class="text form__text" for="mail">Email</label>
          <input
            type="email"
            class="form__imput"
            name="mail"
            id="email"
            value="Tu correo"
          />
        </div>
      </div>
      <div class="form__contenedor-mensaje">
        <label class="text form__text" for="msg">Mensaje</label>
        <textarea
          name="msg"
          class="form__textarea"
          id="msg"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button class="form__submit" type="submit">Enviar</button>
      <p id="send-status" style="display:none color: white"></p>
      
    </form>
`
el.appendChild(contentContactFormEl)

  contentContactFormEl.addEventListener("submit",(e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const msg = document.querySelector("#msg").value
    
    const body = {
      "to": email,
      "message":msg
    }
    
    data.body = JSON.stringify(body)
    console.log(data)

    fetch (url,data)
    .then(res => {res.json()})
    .then(res => {
      const sendMsg = document.getElementById('send-status')
      sendMsg.innerHTML=`"El mensaje fue enviado!"`
      sendMsg.style.display = "inherit"
    })
    .catch(err => {
      const sendMsg = document.getElementById('send-status')
      sendMsg.innerHTML=`"Hubo un error. Intente de nuevo"`
      sendMsg.style.display = "inherit"
    })
  

    
  })

}


const signupTemplate = (name, password) => {
  const letter = `
    <h1 style="color:#8BAA36;text-align:center;font-family:'Segoe UI',Tahoma,Verdana,Arial,sans-serif">
        ${name},<br>Welcome to SoYummy!
    </h1>
    <br>
    <p style="font-size:14px;font-family:'Segoe UI',Tahoma,Verdana,Arial,sans-serif">
      You have successfully signup!<br>
      Here is your password: <b>${password}</b>
    </p>
    <br>
    <p style="font-size:14px;font-family:'Segoe UI',Tahoma,Verdana,Arial,sans-serif">
      Thanks,<br>
      The SoYummy team
    </p>
    <p style="color:grey;font-size:80%;font-family:'Segoe UI',Tahoma,Verdana,Arial,sans-serif">
      You’ve received this email because you signed up at SoYummy Recipe website
    </p>
  `

  const text = `
    ${name}, welcome to SoYummy!\n\r\n\r
    You have successfully signup!.\n\r\n\r
    Here is your password: ${password}\n\r\n\r
    Thanks,\n\r
    The SoYummy team\n\r
    You’ve received this email because you signed up for a SoYummy newsletter
  `

  return {
    letter,
    text,
  }
}

module.exports = signupTemplate

function defaultEmailTemplate(username) {

  const mailTemplate = `
    Hey ${username},

    Here's another wonderful email for ya.

    Enjoy!
  `

  return mailTemplate
}

module.exports = defaultEmailTemplate

const validateRegisterInput = (body) => {
  const email = body.email
  const handle = body.handle
  const password = body.password

  if (!email) {
    return ({ errors: "Must enter an email", isValid: false })
  } else if (!handle) {
    return ({ errors: "Must enter a handle", isValid: false })
  } else if (!password) {
    return ({ errors: "Must enter a password", isValid: false })
  } else {
    return ({ errors: {}, isValid: true })
  }
}

const validateLoginInput = (body) => {
  const handle = body.handle
  const password = body.password

  if (!handle) {
    return ({ errors: "Must enter an handle", isValid: false })
  } else if (!password) {
    return ({ errors: "Must enter a password", isValid: false })
  } else {
    return ({ errors: {}, isValid: true })
  }
}

module.exports = {
  validateLoginInput,
  validateRegisterInput
}
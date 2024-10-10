function generatePassword(length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_'
    const list = characters.split('')
    let password = ''
    for (let i = 0; i < length; i ++) {
        password += list[Math.floor(Math.random() * characters.length)]
    }

    return password
}

module.exports = generatePassword;
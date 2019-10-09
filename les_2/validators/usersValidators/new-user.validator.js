module.exports = userObject => {
    const {name, email, password} = userObject;

    if (!name || !email || !password){
        throw new Error('User is not valid')
    }
};
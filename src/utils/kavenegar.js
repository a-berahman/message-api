const kavenegar = require('kavenegar')

var api = kavenegar.KavenegarApi({
    apikey: process.env.KAVENEGAR_API_KEY
});

const send = async(receptor, message) => {
    await api.Send({ message, receptor });
    // (res, status) => {
    //     console.log(response);
    //     console.log(status);
    // }
}

module.exports = {
    send
}
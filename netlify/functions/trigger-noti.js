const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "2154914",
    key: "2b186dcf533c78bb306b",
    secret: "feb491a85b5889688fc3",
    cluster: "sa1",
    useTLS: true
});

exports.handler = async function (event, context) {
    await pusher.trigger("canal-rodaje", "aparecer-alerta", { message: "start" });

    return {
        statusCode: 200,
        body: JSON.stringify({ status: "Enviado" }),
    };
};
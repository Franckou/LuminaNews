const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "2154914",
  key: "2b186dcf533c78bb306b",
  secret: "feb491a85b5889688fc3",
  cluster: "sa1",
  useTLS: true
});

exports.handler = async function (event, context) {
  // Solo permitimos peticiones POST (desde tu botón)
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Metodo no permitido" };
  }

  await pusher.trigger("canal-rodaje", "aparecer-alerta", { message: "exploto" });
  
  return {
    statusCode: 200,
    body: JSON.stringify({ status: "Señal enviada al set!" }),
  };
};

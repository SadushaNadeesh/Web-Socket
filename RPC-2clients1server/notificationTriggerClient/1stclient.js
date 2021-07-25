//socketcluster-client (angular client)
const socketClusterClient = require("socketcluster-client");

let socket = socketClusterClient.create({
  hostname: "localhost",
  port: 8000,
});

// ... After the socket is created. call the rpc
async function sendRpc() {
  let result = await socket.invoke("customProc", { name: "ishan" });
  // result will be 'Success'
  console.log(result);
}

sendRpc();
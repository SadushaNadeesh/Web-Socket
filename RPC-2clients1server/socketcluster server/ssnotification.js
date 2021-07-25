// socketcuster-server
//this is a simple example socketcluster
const http = require("http");
const socketClusterServer = require("socketcluster-server");

let options = {
  // ...
};

let httpServer = http.createServer();
let agServer = socketClusterServer.attach(httpServer, options);
// --- in server.js ---

// SocketCluster/WebSocket connection handling loop.
(async () => {
  for await (let { socket } of agServer.listener("connection")) {
    console.log('New client connected');
    
    //rpc way we have 2 clients and one server one client (nestjs) says server to send msg to other client
    //through rpc request it send the msg
    (async () => {
      // Set up a loop to handle and respond to RPCs.
      for await (let request of socket.procedure("customProc")) {
        if (request.data && request.data.bad) {
          let badCustomError = new Error(
            "Server failed to execute the procedure"
          );
          badCustomError.name = "BadCustomError";
          request.error(badCustomError);

          continue;
        } else {
          console.log(request.data+" data from other client(nestjs) ");
          await agServer.exchange.transmitPublish(
            "channelName",
            "This is some data sended from other client " + request.data.name
          );
          request.end("Success");
        }
      }
    })();
  }
})();

// port 8000
httpServer.listen(8000);

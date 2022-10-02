import Server from "./src/config/server";

try {
    const server = new Server();
    server.launch();
} catch (error) {
    console.log("Error launching server.",error);   
}


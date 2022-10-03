import Server from "./src/config/server";
import TokenAuth from "./src/utils/tokenAuth";

try {
    const server = new Server();
    server.launch();
} catch (error) {
    console.log("Error launching server.",error);   
}

TokenAuth.createToken({
    rol:123
}).then(console.log)
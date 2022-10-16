import Server from "./src/config/server";
import PassAuth from "./src/utils/passAuth";
import TokenAuth from "./src/utils/tokenAuth";

try {
    const server = new Server();
    server.launch();
} catch (error) {
    console.log("Error launching server.",error);   
}

TokenAuth.createToken({rol:3, id:1}).then(console.log)


new PassAuth().encryptPassword("1231321");


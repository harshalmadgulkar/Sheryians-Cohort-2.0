// imported dotenv & config from this file
import "./src/config/env.js";

import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

connectToDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
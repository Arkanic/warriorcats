import "./scss/main.scss";

import * as assets from "./ts/assets";

Promise.all([
    assets.downloadAssets()
]).then(() => {
    console.log("ye");
});
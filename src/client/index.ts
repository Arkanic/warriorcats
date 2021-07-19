import "./scss/main.scss";

import * as assets from "./ts/assets";
import * as generator from "./ts/generator";

Promise.all([
    assets.downloadAssets()
]).then(() => {
    console.log("loaded!");

    generator.init();
});
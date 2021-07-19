import * as dom from "./dom";
import * as parts from "./parts";

let prefix = "";
let suffix = "";
let rank = 2;

function randomElement<T>(array:Array<T>):T {
    return array[Math.floor(Math.random() * array.length)];
}

function changePrefix(update:boolean) {
    prefix = randomElement<string>(parts.prefixes);
    if(update) display();
}

function changeSuffix(update:boolean) {
    suffix = randomElement<string>(parts.suffixes);
    if(update) display();
}

function changeAll(update:boolean) {
    changePrefix(false);
    changeSuffix(false);
    if(update) display();
}

function display() {
    let renderers:Array<(prefix:string, suffix:string) => string> = [
        (prefix, suffix) => {
            return prefix + "kit";
        },
        (prefix, suffix) => {
            return prefix + "paw";
        },
        (prefix, suffix) => {
            return prefix + suffix;
        },
        (prefix, suffix) => {
            return prefix + "star";
        }
    ];

    dom.name.innerHTML = renderers[rank](prefix, suffix);
}

export function init() {
    // I hate this but it's the result of the original (2019) design decision...

    dom.changePrefix.addEventListener("click", (e) => {
        changePrefix(true);
    });
    dom.changeAll.addEventListener("click", (e) => {
        changeAll(true);
    });
    dom.changeSuffix.addEventListener("click", (e) => {
        changeSuffix(true);
    });

    dom.setKit.addEventListener("click", (e) => {
        rank = 0;
        display();
    });
    dom.setApprentice.addEventListener("click", (e) => {
        rank = 1;
        display();
    });
    dom.setWarrior.addEventListener("click", (e) => {
        rank = 2;
        display();
    });
    dom.setWarrior.addEventListener("click", (e) => {
        rank = 3;
        display();
    });

    // default render
    changeAll(true);
}
"use strict";
let target = {
    name: "xiaom1",
};
function handler() {
}
let proxy = new Proxy(target, {});
target.name = "1";
console.log(proxy);
//# sourceMappingURL=index.js.map
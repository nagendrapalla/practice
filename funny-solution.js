const nop = 10;
const zones = ['R', 'O', 'G'];
const n = zones.length;
const MODULO = 1000000007;
let output = 0;

check(zones, "R", n, nop - 1);
console.log(output);

function check(zones, prefix, n, k) {
    if (k == 0) {
        if(prefix.split("RG").length - 1 > 0) {
            return;
        }
        output = (output + 1) % MODULO;
        console.log(prefix);
        return;
    }

    for (let i = 0; i < n; ++i) {
        let newPrefix = prefix + zones[i];
        if(prefix.split("RG").length - 1 > 0) {
            return;
        }
        check(zones, newPrefix, n, k - 1);
    }
}
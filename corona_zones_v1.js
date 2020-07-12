let output = 0;
const MODULO = 1000000007;
const nop = 7;
const k = nop;
const zones = ['R', 'G', 'O'];
const zonesLength = zones.length;
const LIMITS = { RO: 10, RG: 0, OR: 10, OG: 10, GR: 10, GO: 10 }

const start = new Date().getTime();
check(zones, "", zonesLength, k);
const end = new Date().getTime();

const time = (end - start) / 1000;
// console.log("Seconds: ", time)
console.log("Output: ", output);

function checkMaxLength(prefix) {
    if (nop === prefix.length) {
        if (prefix.split("GR").length - 1 > LIMITS.GR || prefix.split("GO").length - 1 > LIMITS.GO) {
            return false;
        }

        if (prefix.split("OR").length - 1 > LIMITS.OR || prefix.split("OG").length - 1 > LIMITS.OG) {
            return false;
        }

        if (prefix.split("RG").length - 1 > LIMITS.RG || prefix.split("RO").length - 1 > LIMITS.RO) {
            return false;
        }
    }
    return true;
}

function check(zones, prefix, n, k) {
    if (k == 0) {
        if (checkMaxLength(prefix)) {            
            output = (output + 1) % MODULO;
            console.log(prefix);
        }    
        return;
    }

    for (let i = 0; i < n; ++i) {
        let newPrefix = prefix + zones[i];
        check(zones, newPrefix, n, k - 1);
    }
}
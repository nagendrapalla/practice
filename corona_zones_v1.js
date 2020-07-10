let output = 0;
const MODULO = 1000000007;
const nop = 2;
const k = nop;
const zones = ['R', 'G', 'O'];
const zonesLength = zones.length;
const LIMITS = {
    ARO: 1,
    ARG: 1,
    AOR: 1,
    AOG: 1,
    AGR: 0,
    AGO: 0
}

const start = new Date().getTime();
check(zones, "", zonesLength, k, LIMITS, nop);
const end = new Date().getTime();

const time = (end - start) / 1000;
console.log(time)
console.log(output);

function checkMaxLength(prefix, LIMITS, nop) {
    if(nop === prefix.length) {
        if(prefix.split("GR").length - 1 > LIMITS.AGR || prefix.split("GO").length - 1 > LIMITS.AGO) {
            return false;
        }

        if(prefix.split("OR").length - 1 > LIMITS.AOR || prefix.split("OG").length - 1 > LIMITS.AOG) {
            return false;
        }
        
        if(prefix.split("RG").length - 1 > LIMITS.ARG || prefix.split("RO").length - 1 > LIMITS.ARO) {
            return false;
        }
    }
    return true;
}

function check(zones, prefix, n, k, limits, nop) {
    if (k == 0) {
        output = (output + 1) % MODULO;
        return;
    }
    
    for (let i = 0; i < n; ++i){ 
        let newPrefix = prefix + zones[i];
        if(newPrefix.length == 1 || (newPrefix.length > 1 && checkMaxLength(newPrefix, limits, nop))) {
            check(zones, newPrefix, n, k - 1, limits, nop);
        }
    }
}
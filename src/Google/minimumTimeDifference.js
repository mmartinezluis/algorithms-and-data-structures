/**
 * @param {string[]} timePoints
 * @return {number}
 */

const MAX_TIME = 1440; 

var findMinDifference = function(timePoints) {
    let options = new Array(MAX_TIME).fill(false);
    for(let timePoint of timePoints) {
        const time = parseTime(timePoint);
        if(options[time]) return 0;
        options[time] =  true;
    }

    let low = 1500;
    let high = -1;
    let prev = 0;
    let min = 1500;
    for(let i=0; i < options.length; i++) {
        if(options[i]) {
            if(low !== 1500) {
                min = Math.min(min, i - prev);
            }
            high = Math.max(high, i);
            low = Math.min(low, i);
            prev = i;
        }
    }
    min = Math.min(min, MAX_TIME - high + low);
    return min;
}

function parseTime(timePoint) {
    const time = timePoint.split(":");
    return parseInt(time[0])*60 + parseInt(time[1]);
}

function minutes(time1, time2) {
    console.log(time1, time2)
    let difference = Math.abs(time1 - time2);
    if(difference > 720) {
        if(time1 > 720) {
            difference = MAX_TIME - time1 + time2
        } else difference = MAX_TIME - time2 + time1
    }
    return difference;
}

let timePoints = ["23:59","00:00"]
findMinDifference(timePoints)

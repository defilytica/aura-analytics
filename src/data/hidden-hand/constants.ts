// Assumed pattern in seconds (2 weeks ~ 1'209'600 seconds)
export const PATTERN = 1209600;

//First 25 rounds
let auraTimeStamps = [
    1656378000,
    1657591200,
    1658799000,
    1660008600,
    1661218200,
    1662427800,
    1663617600,
    1664827200,
    1666036800,
    1667246400,
    1668456000,
    1669665600,
    1670875200,
    1672084800,
    1673294400,
    1674504000,
    1675713600,
    1676923200,
    1678132800,
    1679342400,
    1680552000,
    1681761600,
    1682971200,
    1684180800,
    1685390400,
    1686600000,
    1687809600,
    1689019200
];

// get current time in seconds
const now = Math.floor(Date.now() / 1000);

// add additional rounds
while (auraTimeStamps[auraTimeStamps.length - 1] < now) {
    let lastTimestamp = auraTimeStamps[auraTimeStamps.length - 1];

    // Check if next timestamp is not within the next week
    if (lastTimestamp + PATTERN < now) {
        auraTimeStamps.push(lastTimestamp + PATTERN);
    } else {
        // Calculate Monday 20:00 timestamp
        const nextMondayTimestamp = lastTimestamp + PATTERN + 604800; // Adding 604800 seconds (7 days) for Monday 20:00

        // Check if we are between Thursday 02:00 and the following Monday 20:00 as seen from the next voting round deadline
        if (now >= (lastTimestamp + PATTERN - 410000) && now < nextMondayTimestamp) {
            auraTimeStamps.push(0);
        }
        break;
    }
}

export const AURA_TIMESTAMPS = auraTimeStamps

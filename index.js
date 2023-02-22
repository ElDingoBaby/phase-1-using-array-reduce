const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let addedBatteries = 0
const totalBatteries = batteryBatches.reduce(
    (accumulator, element) => accumulator + element, addedBatteries
)

console.log(totalBatteries)
const BattryLevel =
document.querySelector(".bat");

navigator.getBattery().then(function(battery)

{ const level = battery.level;
const status = level * 100 + "%";
BattryLevel.innerHTML = status;

console.log(status);
});
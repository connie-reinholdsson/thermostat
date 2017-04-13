'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSaverOn = "On";
};

  const MINIMUM_TEMP = 10;
  const MAX_TEMP_POWER_SAVE = 25;
  const MAX_TEMP_POWER_SAVE_OFF = 32;

Thermostat.prototype.increase = function() {
    if (this.powerSaverOn === "On" && this.temperature < MAX_TEMP_POWER_SAVE) {
    this.temperature += 1;
    }
  else if (this.powerSaverOn === "Off" && this.temperature < MAX_TEMP_POWER_SAVE_OFF) {
    this.temperature += 1;
  }
};

Thermostat.prototype.decrease = function(){
  if (this.temperature > MINIMUM_TEMP) {
    this.temperature -= 1;
  }
};

Thermostat.prototype.powerSaveSwitchOff = function() {
  this.powerSaverOn = "Off";
}

Thermostat.prototype.powerSaveSwitchOn = function() {
  if(this.temperature >= 25) {
    this.temperature = 25;
    this.powerSaverOn = "On";
  } else {
    this.powerSaverOn = "On";
  }
}


Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.powerUsage = function() {
  if (this.temperature < 18) {
    return 'Low usage'
  } else if (this.temperature > 17 && this.temperature < 25) {
    return 'Medium usage'
  } else {
    return 'High usage'
  }
};

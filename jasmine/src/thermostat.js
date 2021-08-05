class Thermostat {
  constructor() {
    this.temp = 20;
    this.minTemp = 10;
    this.powerSave = true;
  }

  setTemperature() {
    return this.temp;
  }
  up() {
    if (this.powerSave == false && this.temp < 32) {
      this.temp += 1;
    } else if (this.powerSave == true && this.temp < 25) {
      this.temp += 1;
    } else {
      this.temp;
    }
  }
  down() {
    if (this.temp > this.minTemp) {
      this.temp -= 1;
    } else {
      this.temp;
    }
  }
  powerSaveToggle() {
    if (this.powerSave == true) {
      this.powerSave = false;
    } else if (this.powerSave == false) {
      this.powerSave = true;
    }
  }
  reset() {
    this.temp = 20;
  }
  energyUse() {
    if (this.temp < 18) {
      return "Low Usage";
    } else if (this.temp < 26) {
      return "Medium Usage";
    } else {
      return "High Usage";
    }
  }
}

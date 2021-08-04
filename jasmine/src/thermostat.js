class Thermostat {
  constructor() {
    this.temp = 20;
    this.minTemp = 10;
    this.powerSave = false;
  }

  temperature() {
    return this.temp;
  }
  up() {
    if(this.powerSave == false && this.temp < 32) {
      this.temp += 1;
    } else if(this.powerSave == true && this.temp < 25) {
      this.temp += 1;
    } else {
      this.temp;
    }
  }
  down() {
    if(this.temp > this.minTemp) {
    this.temp -= 1;
    } else {
      this.temp;
    }
  }
}

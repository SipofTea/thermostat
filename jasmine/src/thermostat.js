class Thermostat {
  constructor() {
    this.temp = 20;
    this.minTemp = 10;
  }

  temperature() {
    return this.temp;
  }
  up() {
    this.temp += 1;
  }
  down() {
    if(this.temp > this.minTemp) {
    this.temp -= 1;
    } else {
      this.temp;
    }
  }
}

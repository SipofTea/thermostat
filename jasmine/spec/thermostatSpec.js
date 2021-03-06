
describe("Thermostat tests", () => {
  beforeEach( () => {
    thermostat = new Thermostat();
  });
  it("Starts at 20", () => {
    expect(thermostat.setTemperature()).toEqual(20);
  });
  it("Raises temperature with 'up'", () => {
    thermostat.up();
    expect(thermostat.setTemperature()).toEqual(21);
  });
  it("Lowers temperature with 'down'", () => {
    thermostat.down();
    expect(thermostat.setTemperature()).toEqual(19);
  });
  it("Has minimum temperature of 10", () => {
    thermostat.temp = 10;
    thermostat.down();
    expect(thermostat.setTemperature()).toEqual(10);
  });
  it("Given power saving mode off, has max temp of 32", () => {
    thermostat.powerSave = false;
    thermostat.temp = 32;
    thermostat.up();
    expect(thermostat.setTemperature()).toEqual(32);
  });
  it("Given power saving mode on, has max temp of 25", () => {
    thermostat.powerSave = true;
    thermostat.temp = 25;
    thermostat.up();
    expect(thermostat.setTemperature()).toEqual(25);
  });
  it("Given power saving mode on, can raise temp to 25", () => {
    thermostat.powerSave = true;
    thermostat.temp = 24;
    thermostat.up();
    expect(thermostat.setTemperature()).toEqual(25);
  });
  it("Can turn power saving off", () => {
    thermostat.powerSaveToggle();
    expect(thermostat.powerSave).toEqual(false);
  });
  it("Can turn power saving on", () => {
    thermostat.powerSave = false;
    thermostat.powerSaveToggle();
    expect(thermostat.powerSave).toEqual(true);
  });
  it("Can reset temp to 20", () => {
    thermostat.reset();
    expect(thermostat.setTemperature()).toEqual(20);
  });
  it("Can reply low-usage for temp < 18", () => {
    thermostat.temp = 15;
    expect(thermostat.energyUse()).toEqual("Low Usage");
  });
  it("Can reply medium-usage for temp 18 - 25", () => {
    thermostat.temp = 20;
    expect(thermostat.energyUse()).toEqual("Medium Usage");
  });
  it("Can reply high-usage for temp > 25", () => {
    thermostat.temp = 30;
    expect(thermostat.energyUse()).toEqual("High Usage");
  });
});

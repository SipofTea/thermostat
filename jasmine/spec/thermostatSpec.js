
describe("Thermostat tests", () => {
  beforeEach( () => {
    thermostat = new Thermostat();
  });
  it("Starts at 20", () => {
    expect(thermostat.temperature()).toEqual(20);
  });
  it("Raises temperature with 'up'", () => {
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });
  it("Lowers temperature with 'down'", () => {
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });
  it("Has minimum temperature of 10", () => {
    thermostat.temp = 10;
    thermostat.down();
    expect(thermostat.temperature()).toEqual(10);
  });
  it("Given power saving mode off, has max temp of 32", () => {
    thermostat.powerSave = false;
    thermostat.temp = 32;
    thermostat.up();
    expect(thermostat.temperature()).toEqual(32);
  });
  it("Given power saving mode on, has max temp of 25", () => {
    thermostat.powerSave = true;
    thermostat.temp = 25;
    thermostat.up();
    expect(thermostat.temperature()).toEqual(25);
  });
  it("Given power saving mode on, can raise temp to 25", () => {
    thermostat.powerSave = true;
    thermostat.temp = 24;
    thermostat.up();
    expect(thermostat.temperature()).toEqual(25);
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
    expect(thermostat.temperature()).toEqual(20);
  })
});

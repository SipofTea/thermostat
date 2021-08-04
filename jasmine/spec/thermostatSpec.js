
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
});

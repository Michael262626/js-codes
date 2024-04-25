const  AirConditioner = require('./AirConditioner');

describe('AirConditioner', () => {
    let samsungAC;

    beforeEach(() => {
        samsungAC = new AirConditioner();
    });

    test('turnOnAc_acIsOnTest', () => {
        expect(samsungAC.isAcOn()).toBe(false);
        
        samsungAC.toggle();
        expect(samsungAC.isAcOn()).toBe(true);
    });

    test('turnOffAc_acIsOffTest', () => {
        expect(samsungAC.isAcOn()).toBe(false);
        samsungAC.toggle();
        expect(samsungAC.isAcOn()).toBe(true);

        samsungAC.toggle();
        expect(samsungAC.isAcOn()).toBe(false);
    });

    test('increaseAcTemperatureFrom16To17_temperatureIncreasesTest', () => {
        samsungAC.toggle();
        expect(samsungAC.isAcOn()).toBe(true);
        expect(samsungAC.getTemperature()).toBe(16);

        samsungAC.increaseTemperature();
        expect(samsungAC.getTemperature()).toBe(17);
    });

    test('decreaseAcTemperatureFrom18To17_temperatureDecreasesTest', () => {
        samsungAC.toggle();
        expect(samsungAC.isAcOn()).toBe(true);
        samsungAC.increaseTemperature();
        samsungAC.increaseTemperature();
        expect(samsungAC.getTemperature()).toBe(18);

        samsungAC.decreaseTemperature();
        expect(samsungAC.getTemperature()).toBe(17);
    });

    test('increaseAcTemperatureAt30_temperatureIs30Test', () => {
        samsungAC.toggle();
        expect(samsungAC.isAcOn()).toBe(true);
        expect(samsungAC.getTemperature()).toBe(16);

        for (let count = 0; count < 14; count++) samsungAC.increaseTemperature();
        expect(samsungAC.getTemperature()).toBe(30);

        samsungAC.increaseTemperature();
        expect(samsungAC.getTemperature()).toBe(30);
    });

    test('decreaseAcTemperatureAt16_temperatureIs16Test', () => {
        samsungAC.toggle();
        expect(samsungAC.isAcOn()).toBe(true);
        expect(samsungAC.getTemperature()).toBe(16);

        samsungAC.decreaseTemperature();
        expect(samsungAC.getTemperature()).toBe(16);
    });
});
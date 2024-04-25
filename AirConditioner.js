class AirConditioner {
    constructor() {
        this.isOn = false;
        this.temperature = 16;
    }

    isAcOn() {
        return this.isOn;
    }

    toggle() {
        this.isOn = !this.isOn;
    }

    getTemperature() {
        return this.temperature;
    }

    increaseTemperature() {
        const temperatureRangeIsWithinRange = this.temperature >= 16 && this.temperature < 30;
        if (this.isOn && temperatureRangeIsWithinRange) this.temperature++;
    }

    decreaseTemperature() {
        const temperatureRangeIsWithinRange = this.temperature > 16 && this.temperature < 30;
        if (this.isOn && temperatureRangeIsWithinRange) this.temperature--;
    }
}
module.exports =  AirConditioner
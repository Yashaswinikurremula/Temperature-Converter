function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    let result;

    if (isNaN(temperature)) {
      alert("Please enter a valid number for temperature.");
      return;
    }

    if (inputUnit === "celsius") {
      if (outputUnit === "fahrenheit") {
        result = (temperature * 9 / 5) + 32;
        document.getElementById("result").textContent = `${temperature}°C is ${result.toFixed(2)}°F`;
      } else if (outputUnit === "kelvin") {
        result = temperature + 273.15;
        document.getElementById("result").textContent = `${temperature}°C is ${result.toFixed(2)}K`;
      } else {
        document.getElementById("result").textContent = "Output unit should be different from input unit.";
      }
    } else if (inputUnit === "fahrenheit") {
      if (outputUnit === "celsius") {
        result = (temperature - 32) * 5 / 9;
        document.getElementById("result").textContent = `${temperature}°F is ${result.toFixed(2)}°C`;
      } else if (outputUnit === "kelvin") {
        result = (temperature - 32) * 5 / 9 + 273.15;
        document.getElementById("result").textContent = `${temperature}°F is ${result.toFixed(2)}K`;
      } else {
        document.getElementById("result").textContent = "Output unit should be different from input unit.";
      }
    } else if (inputUnit === "kelvin") {
      if (outputUnit === "celsius") {
        result = temperature - 273.15;
        document.getElementById("result").textContent = `${temperature}K is ${result.toFixed(2)}°C`;
      } else if (outputUnit === "fahrenheit") {
        result = (temperature - 273.15) * 9 / 5 + 32;
        document.getElementById("result").textContent = `${temperature}K is ${result.toFixed(2)}°F`;
      } else {
        document.getElementById("result").textContent = "Output unit should be different from input unit.";
      }
    }
  }
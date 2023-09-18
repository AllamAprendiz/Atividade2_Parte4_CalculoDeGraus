function ConverterParaFahrenheit(){
    GrausCelsius_JS = window.document.getElementById("Celsius_id").value;   
    ResultadoFahrenheit_JS = (parseFloat(GrausCelsius_JS) * 9 / 5) + 32;
    window.document.getElementById('ResultadoFahrenheit_id').innerHTML = ResultadoFahrenheit_JS;
}
function ConverterParaCelsius(){
    GrausFahrenheit_JS = window.document.getElementById("Fahrenheit_id").value;
    ResultadoCelsius_JS = (parseFloat(GrausFahrenheit_JS)-32) * 5 / 9;
    window.document.getElementById('ResultadoCelsius_id').innerHTML = ResultadoCelsius_JS;
}
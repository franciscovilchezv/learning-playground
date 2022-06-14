import weatherdata.WeatherData;
import weatherdata.displays.CurrentConditionsDisplay;
import weatherdata.displays.ForecastDisplay;
import weatherdata.displays.StatisticsDisplay;

public class WeatherStation {
  public static void main(String[] args) {
    WeatherData weatherData = new WeatherData();

    CurrentConditionsDisplay currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

    // StatisticsDisplay statisticsDisplay = new StatisticsDisplay(weatherData);
    // ForecastDisplay forecastDisplay = new ForecastDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4f);
    weatherData.setMeasurements(90, 55, 20.4f);
    weatherData.setMeasurements(70, 35, 10.4f);
  }
}

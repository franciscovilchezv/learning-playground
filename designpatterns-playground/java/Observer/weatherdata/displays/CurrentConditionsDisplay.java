package weatherdata.displays;

import weatherdata.Observer;
import weatherdata.WeatherData;

public class CurrentConditionsDisplay implements Observer, DisplayElement {
  private WeatherData weatherData; // Subject

  private float temperature;
  private float humidity;

  public CurrentConditionsDisplay(WeatherData weatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  @Override
  public void update() {
    this.temperature = weatherData.getTemperature();
    this.humidity = weatherData.getHumidity();

    display();
  }

  @Override
  public void display() {
    System.out.println("Current conditions: " + temperature + 
      "F degrees and " + humidity + "% humidity");
  }
}

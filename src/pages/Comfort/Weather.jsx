import React, { useEffect, useState } from "react";
import {
  CloudRain,
  Sun,
  Cloud,
  CloudSnow,
  CloudLightning,
  Wind,
  MapPin,
  Droplets,
  Sunrise,
  Sunset,
} from "lucide-react";

function WeatherForecast() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const LAT = 16.931010;
  const LNG = 74.051771;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LNG}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,weathercode&current_weather=true&timezone=auto`
        );
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (code) => {
    if (!code) return <Cloud className="w-8 h-8 text-gray-400" />;
    if ([0].includes(code)) return <Sun className="w-8 h-8 text-yellow-500" />;
    if ([1, 2, 3].includes(code))
      return <Cloud className="w-8 h-8 text-gray-500" />;
    if ([45, 48].includes(code))
      return <CloudRain className="w-8 h-8 text-blue-400" />;
    if ([51, 61, 63, 65, 80, 81, 82].includes(code))
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    if ([71, 73, 75, 77, 85, 86].includes(code))
      return <CloudSnow className="w-8 h-8 text-cyan-400" />;
    if ([95, 96, 99].includes(code))
      return <CloudLightning className="w-8 h-8 text-yellow-600" />;
    return <Wind className="w-8 h-8 text-gray-500" />;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        <p className="text-lg font-medium animate-pulse">
          Fetching Dholewadi weather data...
        </p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        <p>Weather data not available.</p>
      </div>
    );
  }

  const today = new Date(weather.current_weather.time).toLocaleDateString(
    "en-IN",
    { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-cyan-700 to-sky-800 p-8 sm:p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full shadow-inner">
                {getWeatherIcon(weather.current_weather.weathercode)}
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Weather in Dholewadi
            </h1>
            <p className="text-sky-100 text-lg">
              Real-time updates and 10-day forecast for your village
            </p>
          </div>
        </div>

        {/* Current Weather */}
        <div className="text-center py-10 px-6 sm:px-12 bg-gradient-to-br from-white to-gray-50">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            <MapPin className="inline w-5 h-5 text-sky-600 mr-1" />
            Dholewadi, Maharashtra
          </h2>
          <p className="text-gray-500 mb-4">{today}</p>

          <div className="flex flex-col items-center justify-center space-y-2">
            {getWeatherIcon(weather.current_weather.weathercode)}
            <p className="text-5xl font-bold text-gray-900">
              {Math.round(weather.current_weather.temperature)}°C
            </p>
            <p className="text-gray-600 capitalize">
              Wind: {weather.current_weather.windspeed} km/h
            </p>
          </div>

          {/* Sunrise / Sunset / Rain */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-sky-500" />
              <span>
                Rain:{" "}
                <strong>
                  {weather.daily.precipitation_probability_max[0] || 0}%
                </strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sunrise className="w-5 h-5 text-amber-500" />
              <span>
                Sunrise:{" "}
                <strong>
                  {new Date(weather.daily.sunrise[0]).toLocaleTimeString(
                    "en-IN",
                    { hour: "2-digit", minute: "2-digit" }
                  )}
                </strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sunset className="w-5 h-5 text-orange-600" />
              <span>
                Sunset:{" "}
                <strong>
                  {new Date(weather.daily.sunset[0]).toLocaleTimeString(
                    "en-IN",
                    { hour: "2-digit", minute: "2-digit" }
                  )}
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* 10-Day Forecast */}
        <div className="p-8 bg-blue-50 border-t border-gray-200">
          <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-700 mb-6">
            10-Day Forecast
          </h3>
          <div className="flex flex-wrap justify-center gap-4 px-2 sm:px-4">
            {weather.daily.time.map((date, i) => (
              <div
                key={date}
                className="w-[8.5rem] sm:w-[9rem] bg-white rounded-2xl shadow-md border border-gray-100 py-4 px-2 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-200"
              >
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  {new Date(date).toLocaleDateString("en-IN", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </p>
                {getWeatherIcon(weather.daily.weathercode[i])}
                <p className="mt-2 text-lg font-bold text-gray-800">
                  {Math.round(weather.daily.temperature_2m_max[i])}°C
                </p>
                <p className="text-xs text-gray-500">
                  {Math.round(weather.daily.temperature_2m_min[i])}°C
                </p>
                <p className="text-xs text-sky-600 mt-1">
                  💧 {weather.daily.precipitation_probability_max[i] || 0}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 py-4">
          © Government of Maharashtra | Panchayat Samiti Shirala
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;

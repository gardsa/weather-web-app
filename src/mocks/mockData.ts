const mockData = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1719424800,
      "main": {
        "temp": 291.86,
        "feels_like": 291.8,
        "temp_min": 289.75,
        "temp_max": 291.86,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 999,
        "humidity": 77,
        "temp_kf": 2.11
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 3.8,
        "deg": 114,
        "gust": 4.54
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-26 18:00:00"
    },
    {
      "dt": 1719435600,
      "main": {
        "temp": 290.44,
        "feels_like": 290.39,
        "temp_min": 287.61,
        "temp_max": 290.44,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1001,
        "humidity": 83,
        "temp_kf": 2.83
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 1.2,
        "deg": 108,
        "gust": 1.58
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 2.03
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-26 21:00:00"
    },
    {
      "dt": 1719446400,
      "main": {
        "temp": 289.42,
        "feels_like": 289.4,
        "temp_min": 288.2,
        "temp_max": 289.42,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1002,
        "humidity": 88,
        "temp_kf": 1.22
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.49,
        "deg": 86,
        "gust": 3.48
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.16
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-27 00:00:00"
    },
    {
      "dt": 1719457200,
      "main": {
        "temp": 288.03,
        "feels_like": 287.98,
        "temp_min": 288.03,
        "temp_max": 288.03,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1001,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.12,
        "deg": 108,
        "gust": 4.89
      },
      "visibility": 10000,
      "pop": 0.25,
      "rain": {
        "3h": 0.2
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-27 03:00:00"
    },
    {
      "dt": 1719468000,
      "main": {
        "temp": 287.04,
        "feels_like": 286.89,
        "temp_min": 287.04,
        "temp_max": 287.04,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1001,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.52,
        "deg": 108,
        "gust": 3.25
      },
      "visibility": 10000,
      "pop": 0.21,
      "rain": {
        "3h": 0.12
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-27 06:00:00"
    },
    {
      "dt": 1719478800,
      "main": {
        "temp": 285.9,
        "feels_like": 285.74,
        "temp_min": 285.9,
        "temp_max": 285.9,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1000,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.43,
        "deg": 111,
        "gust": 4.61
      },
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-27 09:00:00"
    },
    {
      "dt": 1719489600,
      "main": {
        "temp": 285.8,
        "feels_like": 285.63,
        "temp_min": 285.8,
        "temp_max": 285.8,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1000,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.98,
        "deg": 131,
        "gust": 1.5
      },
      "pop": 0.21,
      "rain": {
        "3h": 0.41
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-27 12:00:00"
    },
    {
      "dt": 1719500400,
      "main": {
        "temp": 286.35,
        "feels_like": 286.18,
        "temp_min": 286.35,
        "temp_max": 286.35,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1001,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.27,
        "deg": 263,
        "gust": 3.5
      },
      "visibility": 7371,
      "pop": 1,
      "rain": {
        "3h": 1.35
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-27 15:00:00"
    },
    {
      "dt": 1719511200,
      "main": {
        "temp": 286.59,
        "feels_like": 286.42,
        "temp_min": 286.59,
        "temp_max": 286.59,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1002,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.58,
        "deg": 237,
        "gust": 3.54
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 2.03
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-27 18:00:00"
    },
    {
      "dt": 1719522000,
      "main": {
        "temp": 286.62,
        "feels_like": 286.42,
        "temp_min": 286.62,
        "temp_max": 286.62,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1003,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.04,
        "deg": 233,
        "gust": 1.51
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.22
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-27 21:00:00"
    },
    {
      "dt": 1719532800,
      "main": {
        "temp": 286.84,
        "feels_like": 286.64,
        "temp_min": 286.84,
        "temp_max": 286.84,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1004,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.19,
        "deg": 177,
        "gust": 0.99
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 0.44
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-28 00:00:00"
    },
    {
      "dt": 1719543600,
      "main": {
        "temp": 286.59,
        "feels_like": 286.39,
        "temp_min": 286.59,
        "temp_max": 286.59,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1004,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.5,
        "deg": 195,
        "gust": 0.45
      },
      "visibility": 10000,
      "pop": 0.36,
      "rain": {
        "3h": 0.24
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-28 03:00:00"
    },
    {
      "dt": 1719554400,
      "main": {
        "temp": 286.31,
        "feels_like": 286.08,
        "temp_min": 286.31,
        "temp_max": 286.31,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1005,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.32,
        "deg": 101,
        "gust": 0.27
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-28 06:00:00"
    },
    {
      "dt": 1719565200,
      "main": {
        "temp": 286.26,
        "feels_like": 286.05,
        "temp_min": 286.26,
        "temp_max": 286.26,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1005,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.28,
        "deg": 86,
        "gust": 0.33
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-28 09:00:00"
    },
    {
      "dt": 1719576000,
      "main": {
        "temp": 285.9,
        "feels_like": 285.66,
        "temp_min": 285.9,
        "temp_max": 285.9,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1005,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 0.91,
        "deg": 112,
        "gust": 0.76
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-28 12:00:00"
    },
    {
      "dt": 1719586800,
      "main": {
        "temp": 287.38,
        "feels_like": 287.13,
        "temp_min": 287.38,
        "temp_max": 287.38,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1005,
        "humidity": 87,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 91
      },
      "wind": {
        "speed": 1.46,
        "deg": 133,
        "gust": 1.33
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-28 15:00:00"
    },
    {
      "dt": 1719597600,
      "main": {
        "temp": 290.08,
        "feels_like": 289.73,
        "temp_min": 290.08,
        "temp_max": 290.08,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1005,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 94
      },
      "wind": {
        "speed": 2.2,
        "deg": 221,
        "gust": 1.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-28 18:00:00"
    },
    {
      "dt": 1719608400,
      "main": {
        "temp": 290.09,
        "feels_like": 289.8,
        "temp_min": 290.09,
        "temp_max": 290.09,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1005,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 75
      },
      "wind": {
        "speed": 2.09,
        "deg": 236,
        "gust": 1.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-28 21:00:00"
    },
    {
      "dt": 1719619200,
      "main": {
        "temp": 290.29,
        "feels_like": 289.97,
        "temp_min": 290.29,
        "temp_max": 290.29,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1004,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 2.1,
        "deg": 243,
        "gust": 1.67
      },
      "visibility": 8722,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-29 00:00:00"
    },
    {
      "dt": 1719630000,
      "main": {
        "temp": 289.4,
        "feels_like": 289.01,
        "temp_min": 289.4,
        "temp_max": 289.4,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1003,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.16,
        "deg": 302,
        "gust": 1.7
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-29 03:00:00"
    },
    {
      "dt": 1719640800,
      "main": {
        "temp": 289.25,
        "feels_like": 288.9,
        "temp_min": 289.25,
        "temp_max": 289.25,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1003,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.93,
        "deg": 21,
        "gust": 0.9
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-29 06:00:00"
    },
    {
      "dt": 1719651600,
      "main": {
        "temp": 288.38,
        "feels_like": 288.05,
        "temp_min": 288.38,
        "temp_max": 288.38,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1002,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.08,
        "deg": 121,
        "gust": 1.06
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-29 09:00:00"
    },
    {
      "dt": 1719662400,
      "main": {
        "temp": 286.93,
        "feels_like": 286.58,
        "temp_min": 286.93,
        "temp_max": 286.93,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1002,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 94
      },
      "wind": {
        "speed": 0.72,
        "deg": 96,
        "gust": 0.85
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-29 12:00:00"
    },
    {
      "dt": 1719673200,
      "main": {
        "temp": 289.4,
        "feels_like": 289.04,
        "temp_min": 289.4,
        "temp_max": 289.4,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1003,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 94
      },
      "wind": {
        "speed": 1.65,
        "deg": 150,
        "gust": 1.3
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-29 15:00:00"
    },
    {
      "dt": 1719684000,
      "main": {
        "temp": 290.33,
        "feels_like": 289.96,
        "temp_min": 290.33,
        "temp_max": 290.33,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1003,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 2.24,
        "deg": 197,
        "gust": 1.54
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-29 18:00:00"
    },
    {
      "dt": 1719694800,
      "main": {
        "temp": 290.37,
        "feels_like": 289.92,
        "temp_min": 290.37,
        "temp_max": 290.37,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1004,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.22,
        "deg": 234,
        "gust": 0.67
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-29 21:00:00"
    },
    {
      "dt": 1719705600,
      "main": {
        "temp": 291.54,
        "feels_like": 291.13,
        "temp_min": 291.54,
        "temp_max": 291.54,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1003,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.91,
        "deg": 239,
        "gust": 2.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-30 00:00:00"
    },
    {
      "dt": 1719716400,
      "main": {
        "temp": 289.52,
        "feels_like": 289.22,
        "temp_min": 289.52,
        "temp_max": 289.52,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1004,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1,
        "deg": 258,
        "gust": 1.42
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-30 03:00:00"
    },
    {
      "dt": 1719727200,
      "main": {
        "temp": 289.18,
        "feels_like": 288.93,
        "temp_min": 289.18,
        "temp_max": 289.18,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1004,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.71,
        "deg": 28,
        "gust": 0.69
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-30 06:00:00"
    },
    {
      "dt": 1719738000,
      "main": {
        "temp": 288.31,
        "feels_like": 288.07,
        "temp_min": 288.31,
        "temp_max": 288.31,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1004,
        "humidity": 84,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.52,
        "deg": 139,
        "gust": 1.66
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-30 09:00:00"
    },
    {
      "dt": 1719748800,
      "main": {
        "temp": 286.57,
        "feels_like": 286.45,
        "temp_min": 286.57,
        "temp_max": 286.57,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1004,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.55,
        "deg": 103,
        "gust": 3.44
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.67
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-06-30 12:00:00"
    },
    {
      "dt": 1719759600,
      "main": {
        "temp": 286.54,
        "feels_like": 286.44,
        "temp_min": 286.54,
        "temp_max": 286.54,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1005,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.29,
        "deg": 101,
        "gust": 4.9
      },
      "visibility": 10000,
      "pop": 0.7,
      "rain": {
        "3h": 0.51
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-30 15:00:00"
    },
    {
      "dt": 1719770400,
      "main": {
        "temp": 288.75,
        "feels_like": 288.66,
        "temp_min": 288.75,
        "temp_max": 288.75,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1005,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.14,
        "deg": 121,
        "gust": 4.05
      },
      "visibility": 10000,
      "pop": 0.44,
      "rain": {
        "3h": 0.11
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-30 18:00:00"
    },
    {
      "dt": 1719781200,
      "main": {
        "temp": 292.09,
        "feels_like": 291.82,
        "temp_min": 292.09,
        "temp_max": 292.09,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1005,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 73
      },
      "wind": {
        "speed": 2.18,
        "deg": 151,
        "gust": 2.7
      },
      "visibility": 10000,
      "pop": 0.3,
      "rain": {
        "3h": 0.14
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-06-30 21:00:00"
    },
    {
      "dt": 1719792000,
      "main": {
        "temp": 291.88,
        "feels_like": 291.61,
        "temp_min": 291.88,
        "temp_max": 291.88,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1005,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 57
      },
      "wind": {
        "speed": 2.87,
        "deg": 197,
        "gust": 3.06
      },
      "visibility": 10000,
      "pop": 0.51,
      "rain": {
        "3h": 0.41
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-07-01 00:00:00"
    },
    {
      "dt": 1719802800,
      "main": {
        "temp": 291.69,
        "feels_like": 291.43,
        "temp_min": 291.69,
        "temp_max": 291.69,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1004,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 28
      },
      "wind": {
        "speed": 2.02,
        "deg": 117,
        "gust": 3.22
      },
      "visibility": 10000,
      "pop": 0.04,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-07-01 03:00:00"
    },
    {
      "dt": 1719813600,
      "main": {
        "temp": 288.12,
        "feels_like": 287.92,
        "temp_min": 288.12,
        "temp_max": 288.12,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1005,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 3.25,
        "deg": 81,
        "gust": 5.72
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-07-01 06:00:00"
    },
    {
      "dt": 1719824400,
      "main": {
        "temp": 287.11,
        "feels_like": 286.86,
        "temp_min": 287.11,
        "temp_max": 287.11,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1006,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 14
      },
      "wind": {
        "speed": 1.88,
        "deg": 83,
        "gust": 3.23
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-07-01 09:00:00"
    },
    {
      "dt": 1719835200,
      "main": {
        "temp": 286.73,
        "feels_like": 286.39,
        "temp_min": 286.73,
        "temp_max": 286.73,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1007,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 43
      },
      "wind": {
        "speed": 2.5,
        "deg": 108,
        "gust": 3.34
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-07-01 12:00:00"
    },
    {
      "dt": 1719846000,
      "main": {
        "temp": 286.37,
        "feels_like": 286.02,
        "temp_min": 286.37,
        "temp_max": 286.37,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1009,
        "humidity": 87,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.78,
        "deg": 100,
        "gust": 4.98
      },
      "visibility": 10000,
      "pop": 0.28,
      "rain": {
        "3h": 0.15
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-07-01 15:00:00"
    }
  ],
  "city": {
    "id": 6173331,
    "name": "Vancouver",
    "coord": {
      "lat": 49.2827,
      "lon": -123.1207
    },
    "country": "CA",
    "population": 1837969,
    "timezone": -25200,
    "sunrise": 1719403716,
    "sunset": 1719462128
  }
};

export { mockData };

$(function () {
    // const ACCESS_KEY = "3e4f9ea5d081aeaac363090093143f97";
    const ACCESS_KEY = "a9f58c8f85db8fefad3b050191e2e5a6";

    makeAPICall("http://api.openweathermap.org/data/2.5/weather?q=Vitebsk&units=metric&appid=" + ACCESS_KEY);
    // createTodayCard(getWeather());
    // makeAPICall("https://api.weatherstack.com/forecast?access_key=" + ACCESS_KEY + "&query=Vitebsk&unit=m");
    // createWeekCards("dfdfgdfgdfsg");

    function createTodayCard(response) {
        const weatherFullData = {
            city: response.name,
            country: response.sys.country,
            time: response.dt,
            icon: response.weather[0].icon,
            iconDescription: response.weather[0].description,
            temperature: response.main.temp,
            wind: response.wind.speed,
            humidity: response.main.humidity,
            pressure: response.main.pressure
        }

        const mainDiv = $("<div id='main'>").appendTo("body");
        const part1 = $("<div>").appendTo(mainDiv);
        const part2 = $("<div>").appendTo(mainDiv);

        const cityCountry = $("<div>").appendTo(part1);
        const cityCountrySpan = $("<span id='cityCountry'>").text(weatherFullData.city + ", " + weatherFullData.country).appendTo(cityCountry);

        const localTime = $("<div>").appendTo(part1);
        const localTimeSpan = $("<span id='localTime'>").text(weatherFullData.time).appendTo(localTime);

        const mistDiv = $("<div class='mist'>").appendTo(part2);
        const mistSpan = $("<span id='icons'>").text(weatherFullData.icon).appendTo(mistDiv);
        const mistSpanDescription = $("<span>").text(weatherFullData.iconDescription).appendTo(mistDiv);

        const gradusiDiv = $("<div id='gradusi'>").appendTo(part2);
        const gradusiSpan = $("<span>").text(weatherFullData.temperature).appendTo(gradusiDiv);

        const descriptionDiv = $("<div id='description'>").appendTo(part2);
        const descriptionSpanFirst = $("<span id='part1'>").text("Wind: " + weatherFullData.wind).append("<br>").appendTo(descriptionDiv);
        const descriptionSpanSecond = $("<span id='part2'>").text("Humidity: " + weatherFullData.humidity).append("<br>").appendTo(descriptionDiv);
        const descriptionSpanThird = $("<span id='part3'>").text("Pressure: " + weatherFullData.pressure).append("<br>").appendTo(descriptionDiv);

        // $("<div id='cityCountry'>").appendTo(part1);
        // $("<span>").text(weatherFullData.city + ", " + weatherFullData.country).appendTo("#cityCountry");
        // $("<span>").text(weatherFullData.time).appendTo("#localTime");

        // $("<span>").text(weatherFullData.icon).appendTo("#icons");
        // $("<span>").text(weatherFullData.iconDescription).appendTo(".mist");
        // $("<span>").text(weatherFullData.temperature).appendTo("#gradusi");
        // $("<span>").text("Wind: " + weatherFullData.wind).appendTo(descriptionSpanFirst);
        // $("<span>").text("Humidity: " + weatherFullData.humidity).appendTo(descriptionSpanSecond);
        // $("<span>").text("Pressure: " + weatherFullData.pressure).appendTo(descriptionSpanThird);

    }

    function makeAPICall(url) {
        $.ajax({
            dataType: "json",
            url: url,
            success: function (resp) {
                createTodayCard(resp);
            },
            error: function (err, status) {
                // действия если ошибка
            }
        });
    }
});

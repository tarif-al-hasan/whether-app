const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  whetherApp();
});

const whetherApp = () => {
  const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
  const searchCity = document.getElementById("searchCity").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const cityName = data.name;
      const temparature = data.main.temp;
      const description = data.weather[0].main;
      let icon = data.weather[0].icon;
      console.log(icon);
      let iconImg = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      document.getElementById("city").innerHTML = cityName;
      document.getElementById("deg").innerHTML = temparature;
      document.getElementById("description").innerHTML = description;
      document.getElementById("iconImg").setAttribute("src", iconImg);
    });
};

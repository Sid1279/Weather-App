# Weather App

This is a simple weather app built using React. It allows users to retrieve weather information by entering the name of a city and country. The app fetches data from the OpenWeatherMap API to display the temperature, humidity, and weather conditions for the specified location.

## Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/Sid1279/Weather-App.git
   ```
2. Navigate to the project directory:
   ```shell
   cd weather-app
   ```
3. Install dependencies:
   ```shell
   npm install
   ```

## Usage and Deployment

1. Obtain an API key from OpenWeatherMap by signing up on their website.
2. Open the `App.js` file and replace `API_KEY` with your API key.
3. Start the development server: `npm start`
4. Open the app in your browser: `http://localhost:3000`


## Deployment on Cloudflare Pages

1. Sign up for a Cloudflare account at [https://www.cloudflare.com](https://www.cloudflare.com) if you haven't already.
2. Install the Cloudflare Pages command-line tool using npm: `npm install -g @cloudflare/wrangler`
3. Authenticate the Wrangler CLI with your Cloudflare account: `wrangler login`
4. Configure your Cloudflare Pages project by running: `wrangler init`
5. Replace the default `wrangler.toml` configuration file with the following:
   ```shell
    name = "weather-app"
    type = "webpack"
    account_id = "<your-account-id>"
    route = "https://your-domain.com"
    zone_id = "<your-zone-id>"
   ```
6. Build the project: `npm run build`
7. Publish the project to Cloudflare Pages: `wrangler publish`

After publishing, your app will be deployed to Cloudflare Pages and accessible via the specified route and your custom domain. You can also use the default Cloudflare Pages domain if you don't have a custom domain configured.
   

## How It Works

1. User Interface: The app consists of a search form to enter the city and country names, and a weather display component to show the retrieved weather data. The user can toggle between light and dark modes using the switch component.

2. Data Retrieval: When the user submits the search form, the `getWeather()` function is triggered. It makes an API call to OpenWeatherMap to retrieve the weather information for the specified location. The API key and desired unit of measurement (metric) are included in the URL.

3. Data Display: Upon receiving the response, the app updates the state with the temperature, city, country, humidity, and weather description. The `Weather` component renders this data in a user-friendly format.

4. Dark Mode: The app supports a dark mode feature. The state variable `darkMode` controls the appearance of the app, and the switch component updates this variable when toggled.

Feel free to modify the code and customize the app based on your preferences. Add additional styling, error handling, or features to enhance the user experience :)

## Website link
https://weatherdisplay.pages.dev/

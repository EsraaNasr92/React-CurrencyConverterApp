# React Currency Converter App

This is a simple yet powerful currency converter application built using React. It allows users to convert amounts between different currencies using real-time exchange rates.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
The React Currency Converter App is designed to provide users with a quick and easy way to convert amounts between different currencies. The application fetches real-time exchange rates from a reliable API and allows users to select the currencies they want to convert between. The app features a clean and user-friendly interface, making it accessible to users of all levels of technical expertise.


### Links

- [Solution URL here](https://github.com/EsraaNasr92/React-CurrencyConverterApp)
- [Live site URL here](http://callous-bath.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Axios](https://axios-http.com/) - for making HTTP requests

### What I learned

Throughout the development of this currency converter app, I enhanced my skills in various areas:

- API Integration: Learned how to fetch and handle real-time data from an external API using Axios.
- State Management: Improved my understanding of managing component state in React.
- Form Handling: Developed skills in handling user inputs and updating state based on form interactions.
- Styled Components: Utilized styled-components for better CSS management and scoped styling.

```js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
    // Varabile here

    // Function to feach data from API
    useEffect(() => {
        axios.get('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => {
                setRates(response.data.rates);
            });
    }, []);

    useEffect(() => {
        if (rates) {
            const rate = rates[toCurrency] / rates[fromCurrency];
            setConvertedAmount(amount * rate);
        }
    }, [amount, fromCurrency, toCurrency, rates]);

};

export default CurrencyConverter;
```

### Continued development
In future iterations of this project, I plan to:

- Expand Currency Support: Include more currencies and ensure the app supports all major world currencies.
- Add Historical Data: Allow users to view historical exchange rate data and trends.
- Improve User Interface: Enhance the UI/UX to make it more intuitive and visually appealing.
- Implement Error Handling: Add robust error handling to manage API errors and user input validation.

### Useful resources
- [React Documentation](https://reactjs.org/) - Official React documentation.
- [Styled Components Documentation](https://styled-components.com/docs) - Official Styled Components documentation.
- [Axios Documentation](https://axios-http.com/)

## Author

- Github - [Esraa Nasr](https://github.com/EsraaNasr92/)
- Frontend Mentor - [@EsraaNasr92](https://www.frontendmentor.io/profile/EsraaNasr92)
- Twitter - [@__ecupcake](https://twitter.com/__ecupcake)
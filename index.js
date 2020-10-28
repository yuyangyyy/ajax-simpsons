const fetchQuote = () => {
  const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';

  axios
    .get(url)
    .then((res) => res.data)

    .then((data) => {
      console.log(data);

      const firstQuote = data[0];

      const infoQuto = ` 
            <p><strong>${firstQuote.quote}</strong></p>
            <img src="${firstQuote.image}" /> 
            <p>${firstQuote.character}</p>`;

      document.querySelector('#chuck-norris').innerHTML = infoQuto;
      document.querySelector('.btn').onclick = fetchQuote;
    });
};

fetchQuote();

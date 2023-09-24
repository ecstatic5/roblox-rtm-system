((d) => {
  const $dateLabel = d.getElementById("current-date");
  const date = new Date();

  $dateLabel.textContent = `${
    date.toDateString().split(" ")[1]
  } ${date.getDate()}, ${date.getFullYear()}`.toUpperCase();
})(document);

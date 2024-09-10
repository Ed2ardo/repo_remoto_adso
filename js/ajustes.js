document.addEventListener('DOMContentLoaded', function () {
  const temaSelector = document.getElementById('tema');

  temaSelector.addEventListener('change', function () {
    const selectedTheme = temaSelector.value;
    if (selectedTheme === 'oscuro') {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#f4f4f4';
      document.body.style.color = '#333';
    }
  });
});

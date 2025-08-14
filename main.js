function dates() {
  var x = new Date('Aug 8 2024 12:00:00');
  var y = new Date();
  let seconds = Math.abs(x - y) / 1000;

  var day = seconds / (24 * 3600);

  hh = seconds % (24 * 3600);
  var hour = hh / 3600;

  hh %= 3600;
  var minutes = hh / 60;

  hh %= 60;
  var rseconds = hh;

  document.getElementById('days').innerHTML = parseInt(day);
  document.getElementById('hours').innerHTML = parseInt(hour);
  document.getElementById('minutes').innerHTML = parseInt(minutes);
  document.getElementById('seconds').innerHTML = parseInt(rseconds);
}

setInterval(dates, 1000);

// Existing cardSelected function is here
function cardSelected(selectedCard) {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    if (card === selectedCard) {
      card.classList.remove('fade-out');
      card.classList.add('show');
    } else {
      card.classList.add('fade-out');
      card.classList.remove('show');
    }
  });
}

// New function to handle the button click
function sendMessage() {
  const selected = document.querySelector('.card.show');

  // Check if a card has been selected
  if (!selected) {
    alert("I know you didn't select a gift card yet 🤭!");
    return;
  }

  // Get the gift number (e.g., "First", "Second", "Third") from the <p> tag
  const giftText = selected.querySelector('p').innerText;
  const giftName = giftText.split(' ')[0]; // Get the first word

  const telegramNumber = '+62881081170806'; // Replace with your recipient's number
  const message = `I'll waiting for the ${giftName} Gift!`;
  const telegramURL = `https://t.me/${telegramNumber}?text=${encodeURIComponent(message)}`;

  window.open(telegramURL, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-music');
  const button = document.getElementById('mute-button');

  // Coba memutar audio saat halaman dimuat.
  // Ini akan gagal di kebanyakan browser, tapi tidak apa-apa.
  audio.play().catch((error) => {
    console.log('Autoplay dicegah. Klik tombol untuk memutar musik.');
  });

  // Tambahkan event listener untuk tombol mute/unmute
  button.addEventListener('click', () => {
    if (audio.muted) {
      audio.muted = false;
      button.textContent = 'Ndamau ah, ributt! 🙅‍♂️';
      // Tambahkan baris ini untuk memulai pemutaran audio
      audio.play();
    } else {
      audio.muted = true;
      button.textContent = 'Nda jadi ribut, hehe! 😁';
    }
  });
});

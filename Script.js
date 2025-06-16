const pickNumberBtn = document.getElementById("pickNumberBtn");
const resultBtn = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");

const tick = new Audio("tap.wav");
const completedSound = new Audio("gamecompleted.wav");

const gifts = [
  "₹100 Cash", "Toy Car", "Chocolate Box", "₹500 Cash", "Smartphone Cover",
  "Book", "Headphones", "₹50 Cash", "Gift Voucher", "Watch",
  "Teddy Bear", "Bluetooth Speaker", "Movie Ticket", "₹200 Cash", "Puzzle Game",
  "Perfume", "Sunglasses", "₹1000 Cash", "Board Game", "Fitness Band",
  "Digital Clock", "Lamp", "Shopping Voucher", "Laptop Bag", "Wireless Mouse",
  "Travel Mug", "Notebook Set", "Gaming Mousepad", "₹250 Cash", "Keychain",
  "Water Bottle", "Portable Charger", "Desk Organizer", "Cooking Set", "Action Figure",
  "₹300 Cash", "Travel Pillow", "Mini Backpack", "Personalized Mug", "Gaming Controller",
  "Camera Strap", "Toy Robot", "₹750 Cash", "Sports Equipment", "Pen Set",
  "Bluetooth Earbuds", "Digital Photo Frame", "Wallet", "Backpack", "Gift Hamper",
];

gifts.forEach((gift, index) => {
  const box = document.createElement("div");
  box.className = "box";
  box.id = index + 1;
  box.textContent = `${index + 1}. ${gift}`;
  lotterySheetContainer.appendChild(box);
});

pickNumberBtn.addEventListener("click", function () {
  for (let i = 1; i <= 50; i++) {
    document.getElementById(i).classList.remove("winningBox", "highlightedBox");
  }

  resultBtn.textContent = "Please wait...";
  let secondsCount = 0;

  const intervalId = setInterval(function () {
    tick.pause();
    tick.currentTime = 0;
    tick.play();

    secondsCount += 1;
    const randomBox = Math.floor(Math.random() * 50) + 1;

    for (let i = 1; i <= 50; i++) {
      if (i === randomBox) {
        document.getElementById(i).classList.add("highlightedBox");
      } else {
        document.getElementById(i).classList.remove("highlightedBox");
      }
    }

    if (secondsCount === 5) {
      clearInterval(intervalId);

      let drawnNumber = Math.floor(Math.random() * 50) + 1;
      const gift = gifts[drawnNumber - 1];

      document.getElementById(randomBox).classList.remove("highlightedBox");
      document.getElementById(drawnNumber).classList.add("winningBox");
      resultBtn.textContent = `🎉 You got ${drawnNumber}, and you won: ${gift}`;

      completedSound.pause();
      completedSound.currentTime = 0;
      completedSound.play();
    }
  }, 1000);
});

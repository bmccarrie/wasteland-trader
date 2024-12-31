// JavaScript code

// check cap values and disable buy buttons for those items you can't afford on page load
// Call checkCaps when the page loads
document.addEventListener('DOMContentLoaded', function () {
  loadIntro();
  checkCaps();
  checkIntValue();
  updateItemValue();
  //console.log('DOM fully loaded and parsed');
});

function loadIntro() {
  var introScreen = document.getElementById('intro');
  var introCount = 0;
  if (introCount == 0) {
    introScreen.style.display = 'block';
  }
  introCount++;
}

// event listener for start game button
document.addEventListener('DOMContentLoaded', function () {
  var startGameButton = document.getElementById('start-game-btn');
  var introScreen = document.getElementById('intro');

  startGameButton.addEventListener('click', function () {
    introScreen.style.display = 'none';
  });
});

// Buy buton event listeners
// Iterate over the range of IDs (from 1 to 10)
for (var i = 1; i <= 10; i++) {
  // Create a closure for the current iteration
  (function (index) {
    // Get the buy button and corresponding panel for each ID
    var buyButton = document.getElementById('buybtn' + index);
    var panel = document.getElementById('buy-panel' + index);
    var overlay = document.getElementById('overlay');

    // Add click event listener to the buy button
    buyButton.addEventListener('click', function () {
      // Set the display of the corresponding panel to 'block'
      calculateMaxAvailable();
      panel.style.display = 'block';
      overlay.style.display = 'block';
    });
  })(i); // Pass the current iteration index to the closure function
}
// End of Buy event listeners

// Close buy-panel event listeners
// Iterate over the range of IDs (from 1 to 10)
for (var i = 1; i <= 10; i++) {
  // Create a closure for the current iteration
  (function (index) {
    // Get the close-X button and corresponding panel for each ID
    var closeButton = document.getElementById('close-x' + i);
    var panel = document.getElementById('buy-panel' + i);
    var overlay = document.getElementById('overlay');

    // Add click event listener to the close-X button
    closeButton.addEventListener('click', function () {
      // Set the display of the corresponding panel to 'none'
      resetAmountValues();
      panel.style.display = 'none';
      overlay.style.display = 'none';
    });
  })(i); // Pass the current iteration index to the closure function
}

// Sell buton event listeners
// Iterate over the range of IDs (from 1 to 10)
for (var i = 1; i <= 10; i++) {
  // Create a closure for the current iteration
  (function (index) {
    // Get the sell button and corresponding panel for each ID
    var sellButton = document.getElementById('sellbtn' + index);
    var panel = document.getElementById('sell-panel' + index);
    var overlay = document.getElementById('overlay');

    // Add click event listener to the buy button
    sellButton.addEventListener('click', function () {
      // Set the display of the corresponding panel to 'block'
      updateSellInventory();
      panel.style.display = 'block';
      overlay.style.display = 'block';
    });
  })(i); // Pass the current iteration index to the closure function
}
// End of Sell event listeners

// Close sell-panel event listeners
// Iterate over the range of IDs (from 1 to 10)
for (var i = 1; i <= 10; i++) {
  // Create a closure for the current iteration
  (function (index) {
    // Get the close-X button and corresponding panel for each ID
    var closeButton = document.getElementById('close-xs' + i);
    var panel = document.getElementById('sell-panel' + i);
    var overlay = document.getElementById('overlay');

    // Add click event listener to the close-X button
    closeButton.addEventListener('click', function () {
      // Set the display of the corresponding panel to 'none'
      resetSellValues();
      panel.style.display = 'none';
      overlay.style.display = 'none';
    });
  })(i); // Pass the current iteration index to the closure function
}

// Script for buy panel transaction
document.addEventListener('DOMContentLoaded', function () {
  // Function to handle click events for buy panel transaction items
  function handleTransactionItem(minusId, amountId, plusId, maxAvailableId) {
    // Get the minus, amount, plus, and max available elements
    var minusButton = document.getElementById(minusId);
    var amountElement = document.getElementById(amountId);
    var plusButton = document.getElementById(plusId);
    var maxAvailableSpan = document.getElementById(maxAvailableId);

    // Get the maximum available value
    var maxAvailable = parseInt(maxAvailableSpan.textContent);

    //var maxAvailable = Number(maxAvailableSpan.textContent.trim());

    //var maxAvailable = 3;

    // Add click event listener to the minus button
    minusButton.addEventListener('click', function () {
      // Get the current amount value
      var currentAmount = parseInt(amountElement.textContent);

      // If the current amount is greater than 0, decrease it by 1
      if (currentAmount > 0) {
        amountElement.textContent = currentAmount - 1;
      }
    });

    // Add click event listener to the plus button
    plusButton.addEventListener('click', function () {
      // Get the current amount value
      var currentAmount = parseInt(amountElement.textContent);
      console.log('current ammount ' + currentAmount);
      // Get the maximum available value
      var maxAvailable = parseInt(maxAvailableSpan.textContent);
      console.log(maxAvailable);
      //console.log(maxAvailableSpan.textContent);
      // If the current amount is less than the maximum available, increase it by 1
      if (currentAmount < maxAvailable) {
        amountElement.textContent = currentAmount + 1;
      }
    });
  }

  // Call the function for each buy panel transaction item
  handleTransactionItem('minusb1', 'amountb1', 'plusb1', 'maxavail1');
  handleTransactionItem('minusb2', 'amountb2', 'plusb2', 'maxavail2');
  handleTransactionItem('minusb3', 'amountb3', 'plusb3', 'maxavail3');
  handleTransactionItem('minusb4', 'amountb4', 'plusb4', 'maxavail4');
  handleTransactionItem('minusb5', 'amountb5', 'plusb5', 'maxavail5');
  handleTransactionItem('minusb6', 'amountb6', 'plusb6', 'maxavail6');
  handleTransactionItem('minusb7', 'amountb7', 'plusb7', 'maxavail7');
  handleTransactionItem('minusb8', 'amountb8', 'plusb8', 'maxavail8');
  handleTransactionItem('minusb9', 'amountb9', 'plusb9', 'maxavail9');
  handleTransactionItem('minusb10', 'amountb10', 'plusb10', 'maxavail10');
});

// Script for sell panel transaction
document.addEventListener('DOMContentLoaded', function () {
  // Function to handle click events for buy panel transaction items
  function handleSellTransactionItem(minusId, amountId, plusId, sellIntId) {
    // Get the minus, amount, and plus elements
    var minusButton = document.getElementById(minusId);
    var amountElement = document.getElementById(amountId);
    var plusButton = document.getElementById(plusId);
    var sellIntElement = document.getElementById(sellIntId);

    // Add click event listener to the minus button
    minusButton.addEventListener('click', function () {
      // Get the current amount value
      var currentAmount = parseInt(amountElement.textContent);

      // If the current amount is greater than 0, decrease it by 1
      if (currentAmount > 0) {
        amountElement.textContent = currentAmount - 1;
      }
    });

    // Add click event listener to the plus button
    plusButton.addEventListener('click', function () {
      // Get the current amount value
      var currentAmount = parseInt(amountElement.textContent);
      console.log(currentAmount);
      var sellInt = parseInt(sellIntElement.textContent);
      console.log(sellInt);
      // Increase the amount by 1
      if (currentAmount < sellInt) {
        amountElement.textContent = currentAmount + 1;
      }
    });
  }

  // Call the function for each sell panel transaction item
  handleSellTransactionItem('minus1', 'amount1', 'plus1', 'sellint1');
  handleSellTransactionItem('minus2', 'amount2', 'plus2', 'sellint2');
  handleSellTransactionItem('minus3', 'amount3', 'plus3', 'sellint3');
  handleSellTransactionItem('minus4', 'amount4', 'plus4', 'sellint4');
  handleSellTransactionItem('minus5', 'amount5', 'plus5', 'sellint5');
  handleSellTransactionItem('minus6', 'amount6', 'plus6', 'sellint6');
  handleSellTransactionItem('minus7', 'amount7', 'plus7', 'sellint7');
  handleSellTransactionItem('minus8', 'amount8', 'plus8', 'sellint8');
  handleSellTransactionItem('minus9', 'amount9', 'plus9', 'sellint9');
  handleSellTransactionItem('minus10', 'amount10', 'plus10', 'sellint10');
});

/* Next day function */
document.addEventListener('DOMContentLoaded', function () {
  // Get the day span and day button
  var daySpan = document.getElementById('day');
  var dayButton = document.getElementById('daybtn');
  var overlay = document.getElementById('overlay');
  var locations = document.getElementById('locations');

  // Add click event listener to the day button
  dayButton.addEventListener('click', function () {
    // Get the current day value as an integer
    var currentDay = parseInt(daySpan.textContent);

    // Increment the day value by 1 and update the span content
    daySpan.textContent = padNumber(currentDay + 1);
    increaseDebt();
    checkCaps();
    checkIntValue();
    overlay.style.display = 'block';
    locations.style.display = 'block';

    // Check if the day value is 30 or greater
    if (currentDay >= 29) {
      // set locations to display none
      document.getElementById('locations').style.display = 'none';
      // Disable the day button
      dayButton.disabled = true;
      gameOver();
    }
  });
});

// Random Roll of a 20 sided die
function randRoll() {
  // Generate a random number between 1 and 20
  var roll = Math.floor(Math.random() * 20) + 1;
  console.log(roll);
  // Check if the roll is 15 or higher
  if (roll >= 17) {
    console.log('Bad things happen.');
    badActions();
  } else if (roll <= 3) {
    // Check if the roll is 5 or lower
    console.log('Good things happen.');
    goodActions();
  } else if (roll >= 10 && roll <= 12) {
    // Check if the roll is 10
    console.log('Prices are up!');
    pricesUp();
    marketActions();
  } else if (roll >= 7 && roll <= 9) {
    // Check if the roll is 10
    console.log('Prices are down!');
    pricesDown();
  }
}

// Function to pad single-digit numbers with leading zero
function padNumber(num) {
  return (num < 10 ? '0' : '') + num;
}

// Event listener to select locations
document.addEventListener('DOMContentLoaded', function () {
  // Get the current location element and all location buttons
  var currentLocation = document.getElementById('currentlocation');
  var locationButtons = document.querySelectorAll('#locations button');

  var overlay = document.getElementById('overlay');
  var locations = document.getElementById('locations');

  // Add click event listeners to each location button
  locationButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Update the content of current location with the value of the clicked button
      currentLocation.textContent = button.textContent;
      updateItemValue();
      randRoll();

      // Remove the 'active' class from all buttons
      locationButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      // Add the 'active' class to the clicked button
      button.classList.add('active');

      overlay.style.display = 'none';
      locations.style.display = 'none';
    });
  });
});

// function to increase debt
function increaseDebt() {
  // Get the current debt value as a number
  var currentDebt = parseInt(document.getElementById('debt').textContent);

  // Calculate the increase amount (5% of current debt)
  var increaseAmount = currentDebt * 0.05;

  // Round the new debt value to the nearest whole number
  var newDebt = Math.round(currentDebt + increaseAmount);

  // Update the content of the debt span with the new value
  document.getElementById('debt').textContent = newDebt;
}

//function to change value of item 1
function updateItemValue() {
  // set all prices to default color
  document.getElementById('item5value').style.color = '#01fe27';
  document.getElementById('item6value').style.color = '#01fe27';
  document.getElementById('item7value').style.color = '#01fe27';
  document.getElementById('item3value').style.color = '#01fe27';
  document.getElementById('item1value').style.color = '#01fe27';
  document.getElementById('item2value').style.color = '#01fe27';
  document.getElementById('item10value').style.color = '#01fe27';

  // Generate a random whole number between 1000 and 6000
  var item1Value = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;
  var item2Value = Math.floor(Math.random() * (1000 - 750 + 1)) + 750;
  var item3Value = Math.floor(Math.random() * (750 - 550 + 1)) + 550;
  var item4Value = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
  var item5Value = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
  var item6Value = Math.floor(Math.random() * (300 - 175 + 1)) + 175;
  var item7Value = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  var item8Value = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  var item9Value = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  var item10Value = Math.floor(Math.random() * (25 - 15 + 1)) + 15;

  // Update the content of the item1value element with the new value
  document.getElementById('item1value').textContent = item1Value;
  document.getElementById('item2value').textContent = item2Value;
  document.getElementById('item3value').textContent = item3Value;
  document.getElementById('item4value').textContent = item4Value;
  document.getElementById('item5value').textContent = item5Value;
  document.getElementById('item6value').textContent = item6Value;
  document.getElementById('item7value').textContent = item7Value;
  document.getElementById('item8value').textContent = item8Value;
  document.getElementById('item9value').textContent = item9Value;
  document.getElementById('item10value').textContent = item10Value;

  document.getElementById('cur-price1').textContent = item1Value;
  document.getElementById('cur-price2').textContent = item2Value;
  document.getElementById('cur-price3').textContent = item3Value;
  document.getElementById('cur-price4').textContent = item4Value;
  document.getElementById('cur-price5').textContent = item5Value;
  document.getElementById('cur-price6').textContent = item6Value;
  document.getElementById('cur-price7').textContent = item7Value;
  document.getElementById('cur-price8').textContent = item8Value;
  document.getElementById('cur-price9').textContent = item9Value;
  document.getElementById('cur-price10').textContent = item10Value;

  document.getElementById('sell-price1').textContent = item1Value;
  document.getElementById('sell-price2').textContent = item2Value;
  document.getElementById('sell-price3').textContent = item3Value;
  document.getElementById('sell-price4').textContent = item4Value;
  document.getElementById('sell-price5').textContent = item5Value;
  document.getElementById('sell-price6').textContent = item6Value;
  document.getElementById('sell-price7').textContent = item7Value;
  document.getElementById('sell-price8').textContent = item8Value;
  document.getElementById('sell-price9').textContent = item9Value;
  document.getElementById('sell-price10').textContent = item10Value;
}

// function to check if you have enough caps to purchase an item - disable buy btn if not
function checkCaps() {
  // Get the current value of "caps"
  var capsValue = parseInt(document.getElementById('caps').textContent);

  // Iterate over each item value and buy button
  for (var i = 1; i <= 10; i++) {
    var itemValue = parseInt(
      document.getElementById('item' + i + 'value').textContent
    );
    //console.log(itemValue);
    var buyButton = document.getElementById('buybtn' + i);

    // Check if "caps" is less than the current item value
    if (capsValue < itemValue) {
      // If so, disable the buy button
      buyButton.disabled = true;
    } else {
      // Otherwise, enable the buy button
      buyButton.disabled = false;
    }
  }
}

//function to disable sell buttons if there is nothhing in your inventory
function checkIntValue() {
  for (var i = 1; i <= 10; i++) {
    var sellIntElement = document.getElementById('int' + i);
    var sellButton = document.getElementById('sellbtn' + i);

    // Check if the sellIntElement exists and its value is greater than 0
    if (sellIntElement && parseInt(sellIntElement.textContent) > 0) {
      sellButton.disabled = false; // Enable the sell button
    } else {
      sellButton.disabled = true; // Disable the sell button
    }
  }
}

// function to calculate max number of items that can be purchased with caps avaiable
function calculateMaxAvailable() {
  // Get the value of caps
  var caps = parseInt(document.getElementById('caps').textContent);

  // Iterate over the item values and update the corresponding maxavail elements
  for (var i = 1; i <= 10; i++) {
    var itemValue = parseInt(
      document.getElementById('item' + i + 'value').textContent
    );
    var maxAvailable = Math.floor(caps / itemValue);
    if (maxAvailable > 100) {
      maxAvailable = 100;
    }
    document.getElementById('maxavail' + i).textContent = maxAvailable;
  }
}

// Update amount div with max available value when max button is clicked
document.addEventListener('DOMContentLoaded', function () {
  // Loop through each item
  for (var i = 1; i <= 10; i++) {
    // Get the button and the div elements for the current item
    var maxButton = document.getElementById('maxb' + i);
    var amountDiv = document.getElementById('amountb' + i);
    var maxAvailableSpan = document.getElementById('maxavail' + i);

    // Add click event listener to the max button
    maxButton.addEventListener(
      'click',
      createMaxButtonClickHandler(maxAvailableSpan, amountDiv)
    );
  }
});

// Function to create the click event handler for the max button
function createMaxButtonClickHandler(maxAvailableSpan, amountDiv) {
  return function () {
    // Get the value from the maxavail span
    var maxAvailable = parseInt(maxAvailableSpan.textContent);

    // Update the content of the amount div with the value of maxAvailable
    amountDiv.textContent = maxAvailable.toString();
  };
}

// Update amount div with half max available value when max button is clicked
document.addEventListener('DOMContentLoaded', function () {
  // Loop through each item
  for (var i = 1; i <= 10; i++) {
    // Get the button and the div elements for the current item
    var halfButton = document.getElementById('halfb' + i);
    var amountDiv = document.getElementById('amountb' + i);
    var maxAvailableSpan = document.getElementById('maxavail' + i);

    // Add click event listener to the max button
    halfButton.addEventListener(
      'click',
      createHalfButtonClickHandler(maxAvailableSpan, amountDiv)
    );
  }
});

// Function to create the click event handler for the max button
function createHalfButtonClickHandler(maxAvailableSpan, amountDiv) {
  return function () {
    // Get the value from the maxavail span
    var halfAvailable = parseInt(maxAvailableSpan.textContent);
    halfAvailable = Math.floor(halfAvailable / 2);

    // Update the content of the amount div with the value of maxAvailable
    amountDiv.textContent = halfAvailable.toString();
  };
}

// function to set values of amount back to 0 if you click on X in buy panel
function resetAmountValues() {
  for (var i = 1; i <= 10; i++) {
    var amountElement = document.getElementById('amountb' + i);
    if (amountElement) {
      amountElement.textContent = '0';
    }
  }
}

// BUY Functionality

// EVent listener for buy button
document.addEventListener('DOMContentLoaded', function () {
  // Create loop to access all buy buttons
  for (var i = 1; i <= 10; i++) {
    // Get the buy button
    var buyButton = document.getElementById('buy' + i);

    // Add click event listener to the buy button
    buyButton.addEventListener('click', function () {
      // Call the calculateTotalCost function
      calculateTotalCost();
      calculateMaxAvailable();
      updateInventory();
      updateMyInventory(myInventory);
      resetAmountValues();
    });
  }
});

// function to update the inventory when items are purchased
function updateInventory() {
  // Get the current main inventory value as a number
  var currentMainInventory = parseInt(
    document.getElementById('int').textContent
  );

  // Loop through each item from 1 to 10
  for (var i = 1; i <= 10; i++) {
    // Get the amount of item purchased for the current item
    var amount = parseInt(document.getElementById('amountb' + i).textContent);

    // Update the individual item inventory (int1 through int10)
    var individualInventoryId = 'int' + i;
    var individualInventoryElement = document.getElementById(
      individualInventoryId
    );

    // If the individual inventory element exists, update its value
    if (individualInventoryElement) {
      // Get the current inventory value for the individual item
      var currentIndividualInventory = parseInt(
        individualInventoryElement.textContent
      );

      // Update the individual item inventory by adding the purchased amount
      var updatedIndividualInventory = currentIndividualInventory + amount;

      // Set the updated value for the individual item inventory element
      individualInventoryElement.textContent =
        updatedIndividualInventory.toString();
    } else {
      console.error('Element with ID ' + individualInventoryId + ' not found.');
    }

    // Update the main inventory by adding the purchased amount
    currentMainInventory += amount;
  }

  // Update the content of the main inventory span with the new value
  document.getElementById('int').textContent = currentMainInventory.toString();
}

// calculate the total cost of the items in the buy panel
function calculateTotalCost() {
  // Initialize the total cost variable
  var totalCost = 0;

  // Iterate over the range of IDs (from 1 to 10)
  for (var i = 1; i <= 10; i++) {
    // Get the item value and amount for each item
    var itemValue = parseInt(
      document.getElementById('item' + i + 'value').textContent
    );
    //console.log(itemValue);
    var amount = parseInt(document.getElementById('amountb' + i).textContent);
    //console.log(amount);
    // Add the product of item value and amount to the total cost
    totalCost += itemValue * amount;
    //console.log(totalCost);
    if (amount > 0) {
      // update the average value with the value of the item purchased
      var average = parseInt(
        document.getElementById('amt-paid' + i).textContent
      );
      var newAverage = average + itemValue;
      document.getElementById('amt-paid' + i).textContent = newAverage;
    }
  }

  // remove the total cost from caps
  var caps = parseInt(document.getElementById('caps').textContent);
  var newCaps = caps - totalCost;
  document.getElementById('caps').textContent = newCaps;
}

// update average with the value of the item purchased

// create an empty array called myInventory
var myInventory = [];

function updateMyInventory() {
  for (var i = 1; i <= 10; i++) {
    var amount = parseInt(document.getElementById('amountb' + i).textContent);
    if (amount > 0) {
      // Check if the amount is greater than 0
      var item = {
        item_num: i,
        item_name: document.getElementById('item-name' + i).textContent,
        item_cost: parseInt(
          document.getElementById('item' + i + 'value').textContent
        ),
        item_amount: amount,
      };
      myInventory.push(item); // Add the item to the existing array
    }
  }

  console.log(myInventory); // Log the updated array to the console
  return myInventory; // Return the updated array
}

// SELL Functionality
// EVent listener for sell button
document.addEventListener('DOMContentLoaded', function () {
  // Create loop to access all sell buttons
  for (var i = 1; i <= 10; i++) {
    // Get the sell button
    var sellButton = document.getElementById('sell' + i);

    // Add click event listener to the sell button
    sellButton.addEventListener('click', function () {
      // Call the functions to run on sell button click
      //calculateTotalSale();
      //checkCaps();
      //resetIntOnClick();
      //resetSellValues();
    });
  }
});

// function to calculate the total sale of items in the sell panel
function calculateTotalSale(index) {
  // Get the sell price and amount for the item with the given index
  var sellValue = parseInt(
    document.getElementById('sell-price' + index).textContent
  );
  var amount = parseInt(document.getElementById('amount' + index).textContent);
  var int = parseInt(document.getElementById('int').textContent);

  // Calculate the total sale for the item
  var totalSale = sellValue * amount;

  // Update the amount paid back to zero on sale
  document.getElementById('amt-paid' + index).textContent = '0';

  // subtract amount from inventory and update the value
  newInt = int - amount;
  document.getElementById('int').textContent = newInt;

  // Add the total sale to caps
  var caps = parseInt(document.getElementById('caps').textContent);
  var newCaps = caps + totalSale;
  document.getElementById('caps').textContent = newCaps;
}

// function to reset current inventory and amount to 0 when sell button is clicked
function resetIntAmt(index) {
  // Get the current inventory value as a number
  var currentInventory = parseInt(
    document.getElementById('sellint' + index).textContent
  );
  var currentAmount = parseInt(
    document.getElementById('amount' + index).textContent
  );
  var currentAmount2 = parseInt(
    document.getElementById('int' + index).textContent
  );

  var newIntAmt = currentInventory - currentAmount;
  // Set the current inventory value to 0
  document.getElementById('sellint' + index).textContent = newIntAmt.toString();
  document.getElementById('amount' + index).textContent = '0';
  document.getElementById('int' + index).textContent = newIntAmt.toString();
}

function updateSellInventory() {
  for (var i = 1; i <= 10; i++) {
    var intElement = document.getElementById('int' + i);
    var sellIntElement = document.getElementById('sellint' + i);

    // Check if the int element exists and its value is greater than 0
    if (intElement && parseInt(intElement.textContent) > 0) {
      // Update the value of the corresponding sellint element
      sellIntElement.textContent = intElement.textContent;
    }
  }
}

// Update amount to sell div with max available value when max button is clicked
document.addEventListener('DOMContentLoaded', function () {
  // Loop through each item
  for (var i = 1; i <= 10; i++) {
    // Get the button and the div elements for the current item
    var maxsButton = document.getElementById('maxs' + i);
    var amountsDiv = document.getElementById('amount' + i);
    var maxSellSpan = document.getElementById('sellint' + i);

    // Add click event listener to the max sell button
    maxsButton.addEventListener(
      'click',
      createMaxSellClickHandler(maxSellSpan, amountsDiv)
    );
  }
});

// Function to create the click event handler for the max button
function createMaxSellClickHandler(maxSellSpan, amountsDiv) {
  return function () {
    // Get the value from the maxavail span
    var maxSell = parseInt(maxSellSpan.textContent);

    // Update the content of the amount div with the value of maxAvailable
    amountsDiv.textContent = maxSell.toString();
  };
}

// Update amount to sell div with half max available value when half button is clicked
document.addEventListener('DOMContentLoaded', function () {
  // Loop through each item
  for (var i = 1; i <= 10; i++) {
    // Get the button and the div elements for the current item
    var halfsButton = document.getElementById('halfs' + i);
    var amountsDiv = document.getElementById('amount' + i);
    var maxSellSpan = document.getElementById('sellint' + i);

    // Add click event listener to the max button
    halfsButton.addEventListener(
      'click',
      createHalfSellClickHandler(maxSellSpan, amountsDiv)
    );
  }
});

// Function to create the click event handler for the half button
function createHalfSellClickHandler(maxSellSpan, amountsDiv) {
  return function () {
    // Get the value from the maxavail span
    var halfSell = parseInt(maxSellSpan.textContent);
    halfSell = Math.floor(halfSell / 2);

    // Update the content of the amount div with the value of maxAvailable
    amountsDiv.textContent = halfSell.toString();
  };
}

// function to set values of amount back to 0 if you click on X in sell panel
function resetSellValues() {
  for (var i = 1; i <= 10; i++) {
    var amountSellElement = document.getElementById('amount' + i);
    if (amountSellElement) {
      amountSellElement.textContent = '0';
    }
  }
}

// function retrieve index value from the clicked sell button
function sellClickHandler(index) {
  console.log('Sell button ' + index + ' clicked');
  calculateTotalSale(index);
  resetIntAmt(index);
  checkCaps();
}

// action functions
function badActions() {
  console.log('Bad things happen function.');

  // bad actions array with key value pairs
  var badActionsArray = {
    1: 'You are attacked by a group of raiders.',
    2: 'You are ambushed by a group of super mutants.',
    3: 'Synths teleport to your location and open fire.',
    4: 'A Brotherhood of Steel Knight approaches and asks for a "donation".',
    5: 'You come face to face with a Deathclaw!.',
    6: "Rad Storm! You're taking rads.",
    7: 'Out of nowehere a Vertibird crashes on top of you!',
    8: 'The car next to you explodes!',
  };

  var badThingsDiv = document.getElementById('bad-things');
  var overlay = document.getElementById('action-overlay');
  var closeBadButton = document.getElementById('close-bad');
  var badMsgDiv = document.getElementById('bad-msg');
  var badMsg2 = document.getElementById('bad-msg2');
  var badIcon = document.getElementById('bad-img');
  var actionBtns = document.getElementById('bad-action-btns');
  var defaultImageUrl = 'images/bad-things.png';
  var specialImageUrl = 'images/injured-boy.png';
  var health = document.getElementById('health-bar');
  var currentHealth = parseInt(health.style.width);
  var currentCaps = parseInt(document.getElementById('caps').textContent);
  var randomIndex = Math.floor(Math.random() * 8) + 1;
  if (randomIndex >= 1 && randomIndex <= 5) {
    closeBadButton.style.display = 'none';
    actionBtns.style.display = 'flex';
    badIcon.src = defaultImageUrl;
    badIcon.style.width = '150px';
    badMsg2.textContent = '';
    // Run of Fight functionality here
    var runButton = document.getElementById('runbtn');
    var fightButton = document.getElementById('fightbtn');

    // Add click event listeners
    runButton.addEventListener('click', function () {
      console.log('Run button clicked');
      // generate a random number of caps lost
      var randLost = Math.floor(Math.random() * 3) + 1;
      if (randLost == 1) {
        // loose half you rcaps
        var lostCaps = Math.floor(currentCaps / 2);
      } else if (randLost == 2) {
        // loose 1/5 of your caps
        var lostCaps = Math.floor(currentCaps / 5);
      } else if (randLost == 3) {
        // loose 1/10 of your caps
        var lostCaps = Math.floor(currentCaps / 10);
      }
      var newCaps = currentCaps - lostCaps;
      document.getElementById('caps').textContent = newCaps;
      closeBadButton.style.display = 'block';
      actionBtns.style.display = 'none';
      badIcon.src = 'images/run-boy.png';
      badMsg2.textContent = 'You got away but lost ' + lostCaps + ' caps!';
      // generate a random number of items from inventory lost.

      // display message on how many caps and items lost
    });

    var fightCount = 0;
    fightbtn.textContent = 'Fight!';

    fightButton.addEventListener('click', function () {
      console.log('Fight button clicked');
      console.log(fightCount);
      if (fightCount !== 0) {
        fightbtn.textContent = 'Keep Fighting!';
      }

      console.log(fightCount);
      var randFight = Math.floor(Math.random() * 4) + 1;
      if (randFight == 1) {
        fightCount++;
        // loose 10 points of your health
        var currentHealth = parseInt(health.style.width);
        console.log('Current Health:' + currentHealth);
        var healthDamage = 10;
        console.log('Health Damage:' + healthDamage);
        if (healthDamage >= currentHealth) {
          var newHealth = '0%'; // You're dead - game over!
          youAreDead();
          console.log('You are dead!');
        } else {
          var newHealth = currentHealth - healthDamage + '%';
        }
        health.style.width = newHealth;
        var secondaryMsg = 'Your health drops ' + healthDamage + ' points!';
        badMsg2.textContent = secondaryMsg;
      } else if (randFight == 2) {
        fightCount++;
        // loose 20 points of your health
        var currentHealth = parseInt(health.style.width);
        console.log('Current Health:' + currentHealth);
        var healthDamage = 20;
        console.log('Health Damage:' + healthDamage);
        if (healthDamage >= currentHealth) {
          var newHealth = '0%'; // You're dead - game over!
          youAreDead();
          console.log('You are dead!');
        } else {
          var newHealth = currentHealth - healthDamage + '%';
        }
        health.style.width = newHealth;
        var secondaryMsg = 'Your health drops ' + healthDamage + ' points!';
        badMsg2.textContent = secondaryMsg;
      } else if (randFight == 3) {
        fightCount++;
        // loose 30 points of your health
        var currentHealth = parseInt(health.style.width);
        console.log('Current Health:' + currentHealth);
        var healthDamage = 30;
        console.log('Health Damage:' + healthDamage);
        if (healthDamage >= currentHealth) {
          var newHealth = '0%'; // You're dead - game over!
          youAreDead();
          console.log('You are dead!');
        } else {
          var newHealth = currentHealth - healthDamage + '%';
        }
        health.style.width = newHealth;
        var secondaryMsg = 'Your health drops ' + healthDamage + ' points!';
        badMsg2.textContent = secondaryMsg;
      } else if (randFight == 4) {
        // You won the fight
        closeBadButton.style.display = 'block';
        var loot = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        var newCaps = currentCaps + loot;
        document.getElementById('caps').textContent = newCaps;
        var secondaryMsg =
          'You won the fight and loot the smoldering pile of ash for ' +
          loot +
          ' caps!';
        badMsg2.textContent = secondaryMsg;
        actionBtns.style.display = 'none';
      }
    });

    // End of Run or Fight functionality
  } else if (randomIndex >= 6) {
    closeBadButton.style.display = 'block';
    var randHealth = Math.floor(Math.random() * 5) + 1;
    var healthDamage = randHealth * 10;
    if (healthDamage >= currentHealth) {
      var newHealth = '0%'; // You're dead - game over!
      youAreDead();
    } else {
      var newHealth = currentHealth - healthDamage + '%';
    }
    health.style.width = newHealth;
    actionBtns.style.display = 'none';
    badIcon.src = specialImageUrl;
    badIcon.style.width = '100px';

    var secondaryMsg = 'Your health drops ' + healthDamage + ' points!';
    badMsg2.textContent = secondaryMsg;
  }

  var message = badActionsArray[randomIndex];
  badMsgDiv.textContent = message;

  overlay.style.display = 'block';
  console.log(overlay);
  badThingsDiv.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  var closeBadButton = document.getElementById('close-bad');
  var badThingsDiv = document.getElementById('bad-things');
  var overlay = document.getElementById('action-overlay');

  closeBadButton.addEventListener('click', function () {
    badThingsDiv.style.display = 'none';
    overlay.style.display = 'none';
  });
});

function goodActions() {
  console.log('Good things happen function.');

  // good actions array with key value pairs
  var goodActionsArray = {
    1: 'Searching through an abandoned house you find a caps stash!',
    2: 'You help out a settlement with a ghoul problem.',
    3: 'You find a kid inside a refrigerator and you sell him for some quick caps!',
    4: 'You come across a trade caravan and make a quick deal.',
    5: 'You sneak into a Raider Camp and find a drug cooler.',
    6: 'You meet Doc Weathers and he heals you for free!',
  };

  var goodThingsDiv = document.getElementById('good-things');
  var overlay = document.getElementById('action-overlay');
  var goodMsgDiv = document.getElementById('good-msg');
  var goodMsg2 = document.getElementById('good-msg2');
  var currentCaps = parseInt(document.getElementById('caps').textContent);
  var health = document.getElementById('health-bar');
  var currentHealth = parseInt(health.style.width);
  var randomIndex = Math.floor(Math.random() * 6) + 1;
  if (randomIndex >= 1 && randomIndex <= 2) {
    var randCaps = Math.floor(Math.random() * 11) + 15;
    var newCaps = currentCaps + randCaps;
    document.getElementById('caps').textContent = newCaps;
    var secondaryMsg = 'You score ' + randCaps + ' caps!';
    goodMsg2.textContent = secondaryMsg;
  } else if (randomIndex == 3) {
    var randCaps = Math.floor(Math.random() * 51) + 25;
    var newCaps = currentCaps + randCaps;
    document.getElementById('caps').textContent = newCaps;
    var secondaryMsg = 'You score ' + randCaps + ' caps!';
    goodMsg2.textContent = secondaryMsg;
  } else if (randomIndex == 4) {
    var randCaps = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    var newCaps = currentCaps + randCaps;
    document.getElementById('caps').textContent = newCaps;
    var secondaryMsg = 'You make ' + randCaps + ' caps!';
    goodMsg2.textContent = secondaryMsg;
  } else if (randomIndex == 5) {
    var randCaps = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    var newCaps = currentCaps + randCaps;
    document.getElementById('caps').textContent = newCaps;
    var secondaryMsg = 'You score ' + randCaps + ' caps!';
    goodMsg2.textContent = secondaryMsg;
  } else if (randomIndex == 6 && currentHealth < 100) {
    var healthGain = 10;
    var newHealth = currentHealth + healthGain + '%';
    health.style.width = newHealth;
    var secondaryMsg =
      'Doc Weathers heals your health ' + healthGain + ' points!';
    goodMsg2.textContent = secondaryMsg;
  }
  var message = goodActionsArray[randomIndex];
  goodMsgDiv.textContent = message;

  overlay.style.display = 'block';
  //console.log(overlay);
  goodThingsDiv.style.display = 'block';
}

function pricesUp() {
  // randomly select item of price change
  var priceUpArray = {
    1: 'Raider gangs are rounding up all the Jet, prices are through the roof!',
    2: 'Recent rad storm causes Radaway prices to skyrocket!',
    3: 'A battle at Bunkerhill causes Stimpack shortage. Prices are up!',
    4: 'Goodneighbor is on a bender, Gwinnett Stout prices are on the rise.',
    5: 'Perfectly Preserved Pie shortage, prices are at an all time high! ',
    6: 'Nuka Cola Quantum is hard to find, prices spike!',
    7: 'Water purifiers are clogged, prices are way up!',
  };
  var randPriceUp = Math.floor(Math.random() * 7) + 1;
  var priceUpMessage = priceUpArray[randPriceUp];

  // create new price conditionals
  if (randPriceUp == 1) {
    //Jet
    var jet = Math.floor(Math.random() * (801 - 600)) + 600;
    document.getElementById('item5value').textContent = jet;
    document.getElementById('cur-price5').textContent = jet;
    document.getElementById('sell-price5').textContent = jet;
    document.getElementById('item5value').style.color = 'red';
  } else if (randPriceUp == 2) {
    //Radaway
    var radaway = Math.floor(Math.random() * (700 - 350 + 1)) + 350;
    document.getElementById('item6value').textContent = radaway;
    document.getElementById('cur-price6').textContent = radaway;
    document.getElementById('sell-price6').textContent = radaway;
    document.getElementById('item6value').style.color = 'red';
  } else if (randPriceUp == 3) {
    //Stimpak
    var stimpak = Math.floor(Math.random() * (601 - 400)) + 400;
    document.getElementById('item7value').textContent = stimpak;
    document.getElementById('cur-price7').textContent = stimpak;
    document.getElementById('sell-price7').textContent = stimpak;
    document.getElementById('item7value').style.color = 'red';
  } else if (randPriceUp == 4) {
    //Gwinnett Stout
    var stout = Math.floor(Math.random() * (1501 - 1000 + 1)) + 1000;
    document.getElementById('item3value').textContent = stout;
    document.getElementById('cur-price3').textContent = stout;
    document.getElementById('sell-price3').textContent = stout;
    document.getElementById('item3value').style.color = 'red';
  } else if (randPriceUp == 5) {
    //Perfectly Preserved Pie
    var pie = Math.floor(Math.random() * (12001 - 8000 + 1)) + 8000;
    document.getElementById('item1value').textContent = pie;
    document.getElementById('cur-price1').textContent = pie;
    document.getElementById('sell-price1').textContent = pie;
    document.getElementById('item1value').style.color = 'red';
  } else if (randPriceUp == 6) {
    //Nuka Cola Quantum
    var nuka = Math.floor(Math.random() * (5001 - 2000)) + 2000;
    document.getElementById('item2value').textContent = nuka;
    document.getElementById('cur-price2').textContent = nuka;
    document.getElementById('sell-price2').textContent = nuka;
    document.getElementById('item2value').style.color = 'red';
  } else if (randPriceUp == 7) {
    //Purified Water
    var water = Math.floor(Math.random() * (101 - 50)) + 50;
    document.getElementById('item10value').textContent = water;
    document.getElementById('cur-price10').textContent = water;
    document.getElementById('sell-price10').textContent = water;
    document.getElementById('item10value').style.color = 'red';
  }

  // update display of price

  var pricesUpDiv = document.getElementById('market-fluctuation');
  var marketMsgDiv = document.getElementById('market-msg');
  var overlay = document.getElementById('action-overlay');
  marketMsgDiv.textContent = priceUpMessage;
  overlay.style.display = 'block';
  pricesUpDiv.style.display = 'block';
}

function pricesDown() {
  // randomly select item of price change
  var priceDownArray = {
    1: 'Cricket stops by, Jet is on sale!',
    2: 'Trashcan Carla is passing through, Radaway prices plummet.',
    3: 'Doc Weathers is in town, Stimpack prices fall.',
    4: 'Drinkin Buddy mobile brewery shows up in Goodneighbor, Gwinnett Stout prices have never been lower!',
    5: 'A pie factory vault has been discovered, Perfectly Preserved Pie prices are at an all time low!',
    6: 'A huge caravan comes in from Nuka World, Nuka Cola prices bottom out!',
    7: 'A settlement fires up 3 new water purifiers, water prices drop!',
  };
  var randPriceDown = Math.floor(Math.random() * 7) + 1;
  var priceDownMessage = priceDownArray[randPriceDown];

  // create new price conditionals
  if (randPriceDown == 1) {
    //Jet
    var jet = Math.floor(Math.random() * (151 - 100)) + 100;
    document.getElementById('item5value').textContent = jet;
    document.getElementById('cur-price5').textContent = jet;
    document.getElementById('sell-price5').textContent = jet;
    document.getElementById('item5value').style.color = 'white';
    checkCaps();
  } else if (randPriceDown == 2) {
    //Radaway
    var radaway = Math.floor(Math.random() * (176 - 100)) + 100;
    document.getElementById('item6value').textContent = radaway;
    document.getElementById('cur-price6').textContent = radaway;
    document.getElementById('sell-price6').textContent = radaway;
    document.getElementById('item6value').style.color = 'white';
    checkCaps();
  } else if (randPriceDown == 3) {
    //Stimpak
    var stimpak = Math.floor(Math.random() * (101 - 50)) + 50;
    document.getElementById('item7value').textContent = stimpak;
    document.getElementById('cur-price7').textContent = stimpak;
    document.getElementById('sell-price7').textContent = stimpak;
    document.getElementById('item7value').style.color = 'white';
    checkCaps();
  } else if (randPriceDown == 4) {
    //Gwinnett Stout
    var stout = Math.floor(Math.random() * (151 - 100)) + 100;
    document.getElementById('item3value').textContent = stout;
    document.getElementById('cur-price3').textContent = stout;
    document.getElementById('sell-price3').textContent = stout;
    document.getElementById('item3value').style.color = 'white';
    checkCaps();
  } else if (randPriceDown == 5) {
    //Perfectly Preserved Pie
    var pie = Math.floor(Math.random() * (2001 - 1000)) + 1000;
    document.getElementById('item1value').textContent = pie;
    document.getElementById('cur-price1').textContent = pie;
    document.getElementById('sell-price1').textContent = pie;
    document.getElementById('item1value').style.color = 'white';
    checkCaps();
  } else if (randPriceDown == 6) {
    //Nuka Cola Quantum
    var nuka = Math.floor(Math.random() * (501 - 200)) + 200;
    document.getElementById('item2value').textContent = nuka;
    document.getElementById('cur-price2').textContent = nuka;
    document.getElementById('sell-price2').textContent = nuka;
    document.getElementById('item2value').style.color = 'white';
    checkCaps();
  } else if (randPriceDown == 7) {
    //Purified Water
    var water = Math.floor(Math.random() * (11 - 5)) + 5;
    document.getElementById('item10value').textContent = water;
    document.getElementById('cur-price10').textContent = water;
    document.getElementById('sell-price10').textContent = water;
    document.getElementById('item10value').style.color = 'white';
    checkCaps();
  }

  // update display of price

  var pricesDownDiv = document.getElementById('market-fluctuation');
  var marketMsgDiv = document.getElementById('market-msg');
  var overlay = document.getElementById('action-overlay');
  marketMsgDiv.textContent = priceDownMessage;
  overlay.style.display = 'block';
  pricesDownDiv.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  var closeGoodButton = document.getElementById('close-good');
  var goodThingsDiv = document.getElementById('good-things');
  var overlay = document.getElementById('action-overlay');

  closeGoodButton.addEventListener('click', function () {
    goodThingsDiv.style.display = 'none';
    overlay.style.display = 'none';
  });
});

function marketActions() {
  console.log('Market fluctuation function.');

  var marketDiv = document.getElementById('market-fluctuation');
  var overlay = document.getElementById('action-overlay');
  overlay.style.display = 'block';
  console.log(overlay);
  marketDiv.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  var closeMarketButton = document.getElementById('close-market');
  var marketDiv = document.getElementById('market-fluctuation');
  var overlay = document.getElementById('action-overlay');

  closeMarketButton.addEventListener('click', function () {
    marketDiv.style.display = 'none';
    overlay.style.display = 'none';
  });
});

function youAreDead() {
  console.log('You are dead function.');

  var deadDiv = document.getElementById('dead');
  var overlay = document.getElementById('action-overlay');
  overlay.style.display = 'block';
  console.log(overlay);
  deadDiv.style.display = 'block';
}

function gameOver() {
  console.log('Game over.');
  var caps = parseInt(document.getElementById('caps').textContent);
  var debt = parseInt(document.getElementById('debt').textContent);

  var fTotal = caps - debt;
  document.getElementById('total').textContent = fTotal;
  document.getElementById('total-caps').textContent = caps;
  document.getElementById('total-debt').textContent = debt;

  var gameOverDiv = document.getElementById('game-over');
  var overlay = document.getElementById('action-overlay');
  overlay.style.display = 'block';
  console.log(overlay);
  gameOverDiv.style.display = 'block';
}
document.getElementById('new-game-btn').addEventListener('click', playAgain);
document.getElementById('play-again-btn').addEventListener('click', playAgain);

function playAgain() {
  location.reload(); // Reload the page to start the game over
}

// event listener to pay debt
document.getElementById('paydebtbtn').addEventListener('click', payDebt);

function payDebt() {
  console.log('Pay Debt button clicked');
  var debtDiv = document.getElementById('debt-pannel');
  var overlay = document.getElementById('action-overlay');
  var currentCaps = parseInt(document.getElementById('caps').textContent);
  var debt = parseInt(document.getElementById('debt').textContent);
  var newCaps = currentCaps - debt;
  var debtMsg = document.getElementById('debt-msg');

  overlay.style.display = 'block';
  debtDiv.style.display = 'block';
  if (currentCaps >= debt) {
    document.getElementById('caps').textContent = newCaps;
    document.getElementById('debt').textContent = '0';
    debtMsg.textContent = 'Your debt of ' + debt + ' caps has been paid!';
  } else {
    debtMsg.textContent = 'You do not have enough caps to pay your debt!';
  }
}

// event listener to close debt panel
document.addEventListener('DOMContentLoaded', function () {
  var closedebtBtn = document.getElementById('close-debt');
  var debtDiv = document.getElementById('debt-pannel');
  var overlay = document.getElementById('action-overlay');

  closedebtBtn.addEventListener('click', function () {
    debtDiv.style.display = 'none';
    overlay.style.display = 'none';
  });
});

// event listener to open cure health pannel
document.getElementById('curebtn').addEventListener('click', cureHealth);

function cureHealth() {
  console.log('Cure Health button clicked');
  var healthDiv = document.getElementById('cure-health');
  var overlay = document.getElementById('action-overlay');

  document.getElementById('cure-health-msg').textContent =
    'Cure your helath for 250 caps!';

  overlay.style.display = 'block';
  healthDiv.style.display = 'block';
}

// event listener to cure health on click on curebtn
document.getElementById('curemebtn').addEventListener('click', cureMe);

function cureMe() {
  console.log('Cure Me button clicked');
  var healthDiv = document.getElementById('cure-health');
  var overlay = document.getElementById('action-overlay');
  var health = document.getElementById('health-bar');
  var currentCaps = parseInt(document.getElementById('caps').textContent);
  var currentHealth = parseInt(health.style.width);

  if (currentCaps >= 250) {
    var newCaps = currentCaps - 250;
    document.getElementById('caps').textContent = newCaps;
    var newHealth = '100%';
    health.style.width = newHealth;
    healthDiv.style.display = 'none';
    overlay.style.display = 'none';
  } else if (currentCaps < 250) {
    document.getElementById('cure-health-msg').textContent =
      'You do not have enough caps to cure yourself!';
  }
}

// event listener to close cure health panel
document.addEventListener('DOMContentLoaded', function () {
  var closeHealthBtn = document.getElementById('close-health');
  var healthDiv = document.getElementById('cure-health');
  var overlay = document.getElementById('action-overlay');

  closeHealthBtn.addEventListener('click', function () {
    healthDiv.style.display = 'none';
    overlay.style.display = 'none';
  });
});

// event listener to stash caps
document.getElementById('capstashbtn').addEventListener('click', stashCaps);

function stashCaps() {
  console.log('Stash Caps button clicked');
  var stashDiv = document.getElementById('cap-stash-panel');
  var overlay = document.getElementById('action-overlay');

  overlay.style.display = 'block';
  stashDiv.style.display = 'block';
}

// event listener to close cap stash panel
document
  .getElementById('close-cap-stash')
  .addEventListener('click', closeCapStash);

function closeCapStash() {
  console.log('Close Cap Stash button clicked');
  var stashDiv = document.getElementById('cap-stash-panel');
  var overlay = document.getElementById('action-overlay');

  stashDiv.style.display = 'none';
  overlay.style.display = 'none';
}

// event listener to open withdrawl caps panel
document
  .getElementById('withdrawlbtn')
  .addEventListener('click', withdrawlCaps);

function withdrawlCaps() {
  console.log('Stash Caps button clicked');
  var stashDiv = document.getElementById('cap-stash-panel');
  var withdrawlDiv = document.getElementById('withdrawl-panel');
  var overlay = document.getElementById('action-overlay');

  stashDiv.style.display = 'none';
  overlay.style.display = 'block';
  withdrawlDiv.style.display = 'block';
}

// event listener to close withdrawl panel
document
  .getElementById('close-withdrawl')
  .addEventListener('click', closeWithdrawl);

function closeWithdrawl() {
  console.log('Close Withdrawl button clicked');
  var withdrawlDiv = document.getElementById('withdrawl-panel');
  var overlay = document.getElementById('action-overlay');

  withdrawlDiv.style.display = 'none';
  overlay.style.display = 'none';
}

// event listener to open deposite caps panel
document.getElementById('depositebtn').addEventListener('click', depositeCaps);

function depositeCaps() {
  console.log('Deposite Caps button clicked');
  var stashDiv = document.getElementById('cap-stash-panel');
  var depositeDiv = document.getElementById('deposite-panel');
  var overlay = document.getElementById('action-overlay');

  var currentCaps = parseInt(document.getElementById('caps').textContent);
  console.log('Current caps ' + currentCaps);
  var slider = document.getElementById('depositeSlide');
  var sliderMax = slider.getAttribute('data-slider-max');
  slider.setAttribute('data-slider-max', currentCaps.toString());
  console.log('Slider value ' + sliderMax);

  stashDiv.style.display = 'none';
  overlay.style.display = 'block';
  depositeDiv.style.display = 'block';
}

// event listener to close deposite panel
document
  .getElementById('close-deposite')
  .addEventListener('click', closeDeposite);

function closeDeposite() {
  console.log('Close Deposite button clicked');
  var depositeDiv = document.getElementById('deposite-panel');
  var overlay = document.getElementById('action-overlay');

  depositeDiv.style.display = 'none';
  overlay.style.display = 'none';
}

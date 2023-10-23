// Function to add a new task to the to-do list
function addTask() {
  // Get the task input element
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim(); // Get the trimmed text from the input field

  if (taskText === '') {
      alert('Please enter a task.'); // Display an alert if the input is empty
      return;
  }

  // Get the task list and create a new task item
  const taskList = document.getElementById('task-list');
  const newTaskItem = document.createElement('li');
  newTaskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
      <button class="complete" onclick="completeTask(this)">Complete</button>
  `;

  // Append the new task item to the task list and clear the input field
  taskList.appendChild(newTaskItem);
  taskInput.value = '';
}

// Function to delete a task
function deleteTask(button) {
  const taskList = document.getElementById('task-list');
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem); // Remove the task item when the delete button is clicked
}

// Function to mark a task as complete
function completeTask(button) {
  const taskItem = button.parentElement;
  taskItem.classList.toggle('completed'); // Toggle the 'completed' class to mark/unmark a task as complete
}

let countdownInterval; // Variable to hold the interval ID

// Function to start the countdown timer
function startCountdown(duration, display) {
  let timer = duration;
  let minutes, seconds;

  // Update the countdown every 1 second
  countdownInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          clearInterval(countdownInterval);
          display.textContent = "00:00"; // Timer has ended
      }
  }, 1000);
  displayFeedback('Timer started.');
}

// Function to start the timer when the user clicks the "Start Timer" button
function startTimer() {
  const inputMinutes = parseInt(document.getElementById("input-minutes").value, 10);
  const display = document.getElementById("timer-display");
  if (!isNaN(inputMinutes)) {
      const duration = inputMinutes * 60;
      startCountdown(duration, display);
  }
}

// Function to stop the timer when the user clicks the "Stop Timer" button
function stopTimer() {
  clearInterval(countdownInterval);
  const display = document.getElementById("timer-display");
  display.textContent = "00:00"; // Reset the timer display
  displayFeedback('Timer stopped.');
}

// Function to display feedback messages
function displayFeedback(message) {
  const feedbackDiv = document.getElementById('timer-feedback');
  feedbackDiv.textContent = message;
  feedbackDiv.style.display = 'block';

  // Hide the message after a few seconds (optional)
  setTimeout(() => {
      feedbackDiv.style.display = 'none';
  }, 3000); // Hide after 3 seconds
}

// Add event listeners for the buttons when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start-button").addEventListener("click", startTimer);
  document.getElementById("stop-button").addEventListener("click", stopTimer);
});

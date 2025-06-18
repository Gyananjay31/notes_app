# 📝 Notes App with Undo Delete Feature

A simple and interactive Notes App built using **HTML, CSS, and JavaScript** that allows users to create notes, delete them using a close (×) button, and **undo** deleted notes with a single click!

---

## 🚀 Features

- ✅ Add new notes (pre-added sample notes included)
- ❌ Delete notes using a close (`×`) button
- 🔄 Undo deleted notes
- 💡 Simple, clean UI with smooth UX
- 🧠 Easy to understand code — great for beginners!

---

## 📂 Project Structure

📁 Notes-App/
│
├── index.html # Main HTML file
├── style.css # Styling (optional if inline used)
├── script.js # JavaScript logic
└── README.md # Project documentation


---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (No frameworks)

---

## 🔁 Undo Logic (How it Works)

- When a user clicks the close button (`×`), the note is:
  - Stored in an array called `deletedNotes`
  - Then removed from the DOM
- When "Undo" button is clicked:
  - The last deleted note is fetched from `deletedNotes` using `.pop()`
  - And appended back to the DOM

---

## 🧑‍💻 Author

**Gyananjay Dwivedi**

- Project Link: (https://notes-app-rosy-six.vercel.app/)

---


## 🙏 Support

If you like this project, don’t forget to ⭐️ the repo and share it!


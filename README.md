# Angul-It CAPTCHA App

Angul-It is an interactive multi-stage CAPTCHA web application built with Angular. It challenges users through a series of visual and logical tasks to verify that they are human.

The app focuses on combining user experience with strong validation and security mechanisms.

---

## 📌 Overview

This project simulates a modern CAPTCHA system where users must complete multiple stages such as:

- Selecting images  
- Solving small puzzles  

At the end, users receive a summary of their performance.

---

## ✨ Features

- Multi-stage CAPTCHA challenges  
- Form validation for each step  
- Progress tracking with state management  
- Resume progress after page refresh  
- Protected navigation between pages  
- Responsive design (mobile + desktop)  
- Results summary page  
- Restart challenge functionality  

---

## 🛠 Tech Stack

- Angular (latest version)  
- TypeScript  
- Tailwind CSS  
- Angular Reactive Forms  

---

## 🧱 Project Structure

- **HomeComponent** → Introduction and start page  
- **CaptchaComponent** → Main challenge logic and stages  
- **ResultComponent** → Final results and summary  

---

## ⚙️ How It Works

1. User starts from the Home page  
2. Completes multiple CAPTCHA stages  
3. Each stage must be validated before moving forward  
4. Progress is saved (even after refresh)  
5. After finishing all stages, results are displayed  

---

## 💾 State Management

The application stores user progress using:

- Angular services  
- Local storage  

This ensures:
- No data loss on refresh  
- Resume from last completed stage  

---

## 🔒 Validation & Security

- Users cannot skip stages  
- Invalid inputs are blocked  
- Direct access to the result page is restricted  
- Users are redirected if they try to bypass the flow  

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
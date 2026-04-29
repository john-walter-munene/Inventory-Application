# Gamies Inventory Application

A full-stack inventory management web application built with **Node.js**, **Express**, **PostgreSQL**, **EJS**, and custom middleware as part of **The Odin Project NodeJS Course**.

[Gamies is a game inventory system](https://inventory-application-bmrn.onrender.com/) where users can manage genres and games through complete CRUD functionality, including image uploads, filtering, search, validation, and responsive server-rendered views.

---

## Overview

This project was built to practice real backend architecture using a relational database and MVC structure.

Users can:

* Create, view, edit, and delete **genres**
* Create, view, edit, and delete **games**
* Upload custom game images
* Browse all games
* Filter games by multiple genres
* Sort games by title or price
* Search games by keyword
* View games by genre
* Use mobile-friendly responsive pages

---

## Tech Stack

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **EJS**
* **Express Validator**
* **Multer**
* **CSS (mobile-first Flexbox)**

---

## Key Concepts Demonstrated

## MVC Project Structure

Organized into:

* Routes
* Controllers
* Database query modules
* Middleware
* Views

---

## File Upload System

Used **multer** for game image uploads.

Features:

* local disk storage
* unique filenames
* image-only uploads
* file size limits
* old image cleanup on edit/delete

---

## Error Handling

Custom error classes used for missing records and invalid requests.

Examples:

* game not found
* genre not found
* failed operations

---

## Frontend Features

* Server-rendered EJS templates
* Reusable partials
* Responsive layouts
* Mobile-first design
* Flexbox product cards
* Search pages
* Filter forms
* Edit/Delete actions

---

## What I Learned

This project helped reinforce:

* Express route/controller design
* PostgreSQL schema planning
* SQL joins and filtering logic
* Middleware patterns
* File upload workflows
* Validation handling
* CRUD architecture
* Dynamic EJS rendering
* Debugging full-stack applications

---

## Run Locally

```bash
npm install // load all packages
node populatedb.js // Populate application with seed data: PostgreSQL must be installed!
node app.js // Run application
```

Create a PostgreSQL database and configure environment variables before running.

---

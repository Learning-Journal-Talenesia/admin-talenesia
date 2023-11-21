<h1 align="center">
  Admin Talenesia 
</h1>

<p align="center">
  Talenesia Admin is a web dashboard that manages questions, adds questions, edits questions and deletes questions that are on the talenesia learning journal web, and Talenesia Admin also has a tracking feature for lms users' answers that they have done.
</p>

## Table of Contents

- Admin Talenesia
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Technical Stack](#technical-stack)
    - [Frontend](#frontend-1)
    - [Backend](#backend-1)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [API](#api)
    - [Video API](#video-api)
    - [Product API](#product-api)
    - [Comment API](#comment-api)
    - [Submit Comment API](#submit-comment-api)
  - [Database Schema](#database-schema)

## Introduction

This project is designed to fulfill the needs of the talenesia team, where they need a tracking feature for user answers that have filled out the learning journal, and a CRUD feature for questions in the learning journal.

## Features

### Frontend

1. **Home Page:** This page is to display what features are available on the website and also navigation to the required feature page.
2. **Login page:** This page is for admin authentication to be able to enter the main page and also the features that have been created.
3. **Dashboard Question Page:** this page is for creating CRUD questions for web learning journal
4. **Dashboard User-Answer Page:** this page is for tracking user answers from the web learning journal

### Backend

1. **Auth API:** authentication to be able to access the talenesia admin web


### Frontend

- [![React.js](https://img.shields.io/badge/Code-React.js-informational?style=flat&logo=react&color=61DAFB)](https://reactjs.org/)
- [![HTML5](https://img.shields.io/badge/Language-HTML5-informational?style=flat&logo=html5&color=E34F26)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [![CSS3](https://img.shields.io/badge/Language-CSS3-informational?style=flat&logo=css3&color=1572B6)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![Next.js](https://img.shields.io/badge/Code-Next.js-informational?style=flat&logo=next.js&color=000000)](https://nextjs.org/)
- [![NextAuth](https://img.shields.io/badge/Library-NextAuth.js-informational?style=flat&logo=next-auth&color=000000)](https://next-auth.js.org/)
- [![Tailwind CSS](https://img.shields.io/badge/Tool-Tailwind%20CSS-informational?style=flat&logo=tailwind-css&color=38B2AC)](https://tailwindcss.com/)


### Backend

- ![](https://img.shields.io/badge/Runtime-Node.js-informational?style=flat&logo=node.js&color=339933)
- ![](https://img.shields.io/badge/Database-MongoDB-informational?style=flat&logo=mongodb&color=47A248)
- ![](https://img.shields.io/badge/Library-Mongoose-informational?style=flat&logo=mongoose&color=880000)

## Getting Started

### Prerequisites

- Node.js and pnpm installed on your machine.
- MongoDB database (local or MongoDB Atlas).

### Installation

1. Clone this repository to your local machine.
2. Navigate to the admin-talenesia folder and run `pnpm install`.

### Running the Application

1. Start the frontend application:

   - Navigate to the admin-talenesia folder.
   - Run `pnpm run dev`.

## API

The backend provides the following API endpoints:

### Auth API

- `/api/auth`: authentication admin.

## Database Schema

The MongoDB database used for this project has collections for account admin 
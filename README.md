# GitHub Profile App

![GitHub Profile App](app-screenshot.png)

## Overview

The GitHub Profile App is a web application that allows users to fetch and display GitHub user profiles and repositories using GitHub's GraphQL API. It's built using React, a popular JavaScript library for building user interfaces. This app provides an intuitive way to explore GitHub user profiles and their repositories.

## Features

- **GitHub User Profile:** View detailed information about a GitHub user, including their name, username, bio, followers, and following counts.

- **User Repositories:** Browse through a list of a user's repositories with details like repository name, description, and the number of stars and forks.

- **GraphQL API:** The app leverages GitHub's GraphQL API for efficient and customizable data retrieval.

- **Responsive Design:** The app is designed to work seamlessly on both desktop and mobile devices.

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

1. **Clone the repository** to your local machine using this command:

   ```shell
   git clone https://github.com/your-username/github-profile-app.git
   ```

2. **Navigate** to the project directory:

   ```shell
   cd github-profile-app
   ```

3. **Install** the required dependencies:

   ```shell
   npm install
   ```

4. **Start** the development server:

   ```shell
   npm start
   ```

The app should now be running on http://localhost:3000/. Open this URL in your web browser to explore the app.

## Configuration

To make the GitHub Profile App work, you will need to set up a GitHub Personal Access Token. You can follow these steps:

1. **Create a Personal Access** Token in your GitHub account with read:user and user:email scopes.

2. **Add the Token** to the `.env` file in the root directory:

```shell
   REACT_APP_GITHUB_API_TOKEN=YOUR_ACCESS_TOKEN
```

Make sure to keep your token secure and do not share it publicly.

## Technologies Used

- React
- GraphQL
- CSS

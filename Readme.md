
# Interview Preparation App

## Overview

The **Interview Preparation App** is designed to help students prepare for technical interviews. It allows users to search for LeetCode questions categorized by company names and provides resources to solve these problems. The app is built with React and supports smooth pagination and search functionality.

## Features

- **LeetCode Problem List**: Browse LeetCode problems categorized by company.
- **Resources**: Explore helpful resources for solving the problems.
- **Pagination**: Navigate through problems and resources with easy-to-use pagination.
- **Search**: Filter questions based on company names to find the most relevant problems.

## Technologies

- **Frontend**: ReactJS for the user interface.
- **Backend**: Uses data fetched from GitHub repositories to display interview questions and resources.
- **Data Format**: JSON for storing and managing question data.

## Data Sources

1. **LeetCode Questions**: The questions are sourced from the GitHub repository [LeetCode Questions CompanyWise](https://github.com/krishnadey30/LeetCode-Questions-CompanyWise).
2. **CSV to JSON Conversion**: The raw CSV data is converted into JSON format using this [CSV to JSON converter](https://github.com/Piyuzh77/Leetcode-companyWise-json/tree/master/csvToJson).

## How It Works

1. **Data Fetching**: The app loads interview questions from the GitHub repository.
2. **Pagination**: Questions and resources are split into pages for easy navigation.
3. **Search**: Users can filter questions by company name for quick access to relevant problems.

## Setup & Installation

### Clone the repository

```bash
git clone https://github.com/Piyuzh77/Interview-Preparation-App.git
cd Interview-Preparation-App
```

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

---

Made with 💙 by [Piyuzh77](https://github.com/Piyuzh77)

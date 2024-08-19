# Project Title

## Overview

This project is a moders solution for admin or sales dashboard for e-commerce websites. It is developed using React, Tailwind CSS, and other technologies. The application includes features such as comparison of sales data between two dates, sorting, filtering, and pagination.

## Project Structure

- **`/public`**: Contains the static assets and HTML template.
- **`/src`**: Contains the main codebase, including components, pages, and styles.
- **`db.json`**: Mock database for testing purposes.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS.
- **`package.json`**: Lists the project dependencies and scripts.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Manish-Rao-Kolte/Sales-Dashboard-Infytrix
   ```

2. Navigate to the project directory:

```bash
   cd Sales-Dashboard-Infytrix
```

3. Install the dependencies:

```bash
   npm install
```

### Running the Databse

To start the db server:

```bash
npx json-server --watch db.json --port 3001
```

### Running the Application

To start the development server:

```bash
npm start
```

The application will run at `http://localhost:3000`

### Building the Application

To build the project for production:

```bash
npm run build
```

The output will be in the `build/` directory.

### Configuration

- **`Tailwind CSS`**: Tailwind CSS is configured in `tailwind.config.js.` Customize it as needed.
- **`Mock API`**: The project uses db.json for mocking API responses. You can run a local server using `json-server`:

```bash
   npx json-server --watch db.json --port 3001
```

### Author

- Manish Rao Kolte

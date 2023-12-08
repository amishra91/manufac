# Data Visualization

This project includes utility functions written in TypeScript to perform various analyses on a dataset of wines. It calculates class-wise statistics for the "Flavanoids" property and introduces a new property called "Gamma" for each data point. Additionally, the data is displayed as a React component.

## Features

- **Class-wise Statistics for Flavanoids:**

  - Created a utility function to calculate the class-wise mean, median, and mode of `Flavanoids` for the entire dataset.

- **Gamma Calculation and Statistics:**

  - Implemented a function to calculate the "Gamma" property for each data point using the formula: `Gamma = (Ash * Hue) / Magnesium`.
  - Calculated class-wise mean, median, and mode of `Gamma` for the entire dataset.

- **React Component for Data Display:**

  - Utilized React to display the dataset as a component.

- **TypeScript Usage:**
  - The entire project is written in TypeScript for enhanced type safety and code readability.

## Screenshot

![Screenshot of the Tables](https://github.com/amishra91/manufac/blob/main/public/images/screenshot.png)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/amishra91/manufac.git
   cd manufac
   run yarn install
   run yarn start
   ```

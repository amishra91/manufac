import { WineData } from '../types';

// Function to calculate classwise statistics

export const getClassWiseStatistics = (
  dataset: WineData[],
  property: keyof WineData | ((item: WineData) => number)
) => {
  // Group data by class
  const groupedData: Record<string, number[]> = dataset.reduce((acc, item) => {
    const alcoholClass = item.Alcohol.toString();
    if (!acc[alcoholClass]) {
      acc[alcoholClass] = [];
    }

    // Extract the property value using the provided property argument
    acc[alcoholClass].push(
      typeof property === 'function' ? property(item) : +item[property]
    );
    return acc;
  }, {} as Record<string, number[]>);

  // Calculate statistics for each class (mean, median, mode)
  const classWiseStatistics: {
    class: string;
    mean: number;
    median: number;
    mode: number;
  }[] = [];
  for (const alcoholClass in groupedData) {
    const values = groupedData[alcoholClass];
    classWiseStatistics.push({
      class: alcoholClass,
      mean: calculateMean(values),
      median: calculateMedian(values),
      mode: calculateMode(values),
    });
  }
  return classWiseStatistics;
};

// Function to calculate the mean array

const calculateMean = (values: number[]) => {
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
};

// Function to calculate the median array

const calculateMedian = (values: number[]) => {
  const sortedValues = values.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedValues.length / 2);
  if (sortedValues.length % 2 === 0) {
    return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
  } else {
    return sortedValues[middle];
  }
};

// Function to calculate the mode of array

const calculateMode = (values: number[]) => {
  const valueCounts: Record<string, number> = values.reduce(
    (acc: any, value) => {
      acc[value.toString()] = (acc[value.toString()] || 0) + 1;
      return acc;
    },
    {}
  );

  let mode: number = 0;
  let maxCount = 0;
  for (const value in valueCounts) {
    if (valueCounts[value] > maxCount) {
      mode = parseFloat(value);
      maxCount = valueCounts[value];
    }
  }

  return mode;
};

// Function to Calculate Gamma

export const calculateGamma = (item: WineData) => {
  return (+item.Ash * +item.Hue) / +item.Magnesium;
};

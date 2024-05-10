# Belly Button Biome Explorer

## Description

This project is an interactive web visualization dashboard designed to explore biological data from microbial samples. It presents bar and bubble charts that dynamically update based on user-selected subjects.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/interactive-web-visualizations.git
   ```

2. Navigate to the project directory:
   ```
   cd interactive-web-visualizations
   ```

3. Open the `index.html` file in your web browser.

## Usage

1. Upon opening the `index.html` file in your web browser, you will see a dropdown menu labeled "Select Subject ID".
2. Use the dropdown menu to select a subject ID.
3. The dashboard will update to display:
   - A bar chart showing the top 10 Operational Taxonomic Units (OTUs) for the selected subject ID.
   - A bubble chart illustrating the distribution of OTUs for the selected subject ID.
   - Sample metadata including demographic information and other details about the selected subject.
4. Hover over the charts to view additional information.

## Code Overview

The code consists of several JavaScript functions:

- `fetchData()`: Fetches data from a JSON file using D3.
- `initDropdown(data)`: Initializes the dropdown menu with subject IDs.
- `updateBarChart(subjectID, data)`: Updates the bar chart based on the selected subject ID.
- `updateBubbleChart(subjectID, data)`: Updates the bubble chart based on the selected subject ID.
- `updateMetadata(subjectID, data)`: Updates the sample metadata panel based on the selected subject ID.
- `updatePlots(selectedSubjectID, data)`: Updates all plots when a new sample is selected.
- `init()`: Initializes the dashboard upon page load.
- `optionChanged(selectedSubjectID)`: Handles dropdown selection events.

## Dependencies

- Plotly.js: A JavaScript graphing library.
- D3.js: A JavaScript library for data visualization.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Author

[Bukola Fatile](https://github.com/Bukme)

## Acknowledgements

- This project was developed as part of the University of Minnesota Bootcamp course requirement.


### References
DevDocs. (n.d.-a). https://devdocs.io/d3~5/d3-selection#selectAll 

DevDocs. (n.d.-b). https://devdocs.io/d3~5/d3-request#json 

Function. Function reference in JavaScript. (n.d.). https://plotly.com/javascript/plotlyjs-function-reference/#plotlyrestyle 

JavaScript (JS) cheat sheet online. JavaScript (JS) Cheat Sheet Online. (n.d.). https://htmlcheatsheet.com/js/ 

Object.keys, values, entries. The Modern JavaScript Tutorial. (2021, June 27). https://javascript.info/keys-values-entries 

YouTube. (2019, July 1). Data visualization with d3.js - full tutorial course. YouTube. https://www.youtube.com/watch?v=_8V5o2UHG0E&t=379s 

Other resourceful insights and ideas were gotten from class, tutor and other students. 

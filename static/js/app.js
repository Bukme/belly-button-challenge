// URL to the samples.json file
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Function to fetch data using D3
function fetchData() {
    return d3.json(url).then(data => {
        console.log(data); 
        return data;
    });
}

// Function to initialize the dropdown menu
function initDropdown(data) {
    const dropdown = d3.select("#selDataset");
    data.names.forEach(subjectID => {
        dropdown.append("option").text(subjectID).property("value", subjectID);
    });
}

// Function to update the bar chart
function updateBarChart(subjectID, data) {
    const selectedSubject = data.samples.find(sample => sample.id === subjectID);

    const top10OTUs = selectedSubject.sample_values.slice(0, 10).reverse();
    const top10OTUIds = selectedSubject.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
    const top10OTULabels = selectedSubject.otu_labels.slice(0, 10).reverse();

    const barTrace = {
        x: top10OTUs,
        y: top10OTUIds,
        text: top10OTULabels,
        type: "bar",
        orientation: "h"
    };

    const barLayout = {
        title: `Top 10 OTUs for Subject ID ${subjectID}`,
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU IDs" }
    };

    Plotly.newPlot("bar", [barTrace], barLayout);
}

// Function to update the bubble chart
function updateBubbleChart(subjectID, data) {
    const selectedSubject = data.samples.find(sample => sample.id === subjectID);

    const bubbleTrace = {
        x: selectedSubject.otu_ids,
        y: selectedSubject.sample_values,
        text: selectedSubject.otu_labels,
        mode: 'markers',
        marker: {
            size: selectedSubject.sample_values,
            color: selectedSubject.otu_ids,
            colorscale: 'Viridis'
        }
    };

    const bubbleLayout = {
        title: `Bubble Chart for Subject ID ${subjectID}`,
        xaxis: {
            title: "OTU IDs",
            range: [0, Math.max(...selectedSubject.otu_ids) + 100]
        },
        yaxis: { title: "Sample Values" },
        margin: { t: 50, b: 50, l: 100, r: 50 },
        hovermode: 'closest'
    };

    Plotly.newPlot("bubble", [bubbleTrace], bubbleLayout);
}

// Function to update the sample metadata
function updateMetadata(subjectID, data) {
    const selectedMetadata = data.metadata.find(metadata => metadata.id === parseInt(subjectID));
    const metadataPanel = d3.select("#sample-metadata");
    metadataPanel.html("");

    Object.entries(selectedMetadata).forEach(([key, value]) => {
        metadataPanel.append("p").text(`${key}: ${value}`);
    });
}

// Function to update all plots when a new sample is selected
function updatePlots(selectedSubjectID, data) {
    updateBarChart(selectedSubjectID, data);
    updateBubbleChart(selectedSubjectID, data);
    updateMetadata(selectedSubjectID, data);
}

// Function to initialize the dashboard
function init() {
    fetchData().then(data => {
        initDropdown(data);
        updatePlots(data.names[0], data); // Initialize with the first subject ID
    });
}

// Function to handle dropdown selection
function optionChanged(selectedSubjectID) {
    fetchData().then(data => {
        updatePlots(selectedSubjectID, data);
    });
}

// Initialize the dashboard
init();

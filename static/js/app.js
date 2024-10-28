// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let info = metadata.filter(x => x.id.ToString() === sample) [0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (const [key, value] of Object.entries(info)){
      let upperkey =  key.toUpperCase();
      panel.append("h6").text(`${upperkey}: ${value}`);
    }

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let sample_data = data.samples;

    // Filter the samples for the object with the desired sample number
    let info = sample_data.filter(x => x.id === sample)[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = info.otu_ids;
    let otu_labels = onfo.otu_labels;
    let sample_values = info.sample_values;

    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset")

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i <names.length; i++) {
      let name = names[i];
      dropdown.append("option").text(name).property("value", name);
    }

    // Get the first sample from the list
    let default_name = names[0];


    // Build charts and metadata panel with the first sample
    buildCharts(default_name)
    buildMetadata(default_name)

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample)
  buildMetadata(newSample)

}

// Initialize the dashboard
init();

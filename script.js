import MindElixir from "https://cdn.jsdelivr.net/npm/mind-elixir@latest/dist/MindElixir.js";
import example from "https://cdn.jsdelivr.net/npm/mind-elixir@latest/dist/example.js";

import nodeMenu from "https://cdn.jsdelivr.net/npm/@mind-elixir/node-menu@1.0.3/dist/node-menu.js";
// import 'https://cdn.jsdelivr.net/npm/@mind-elixir/node-menu/dist/style.css'

let mind = new MindElixir({
  el: "#map",
});
mind.install(nodeMenu);
mind.init(example);
console.log(mind);

// Export button functionality
document.getElementById("exportBtn").addEventListener("click", () => {
  const mindMapData = mind.getData(); // Export the current mind map as JSON
  const blob = new Blob([JSON.stringify(mindMapData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor tag to trigger the download
  const link = document.createElement("a");
  link.href = url;
  link.download = "mindmap.json"; // The file name for the exported JSON
  link.click();
  URL.revokeObjectURL(url); // Clean up the URL object
});

// Import button functionality
document.getElementById("importBtn").addEventListener("click", () => {
  document.getElementById("importFile").click(); // Trigger the file input click
});

// Handle file selection and import
document.getElementById("importFile").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file && file.type === "application/json") {
    const reader = new FileReader();
    reader.onload = function (e) {
      const importedData = JSON.parse(e.target.result); // Parse the JSON content
      mind.init(importedData); // Initialize the mind map with the imported data
    };
    reader.readAsText(file);
  } else {
    alert("Please select a valid JSON file.");
  }
});

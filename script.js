/*
Cross layer/page functions defined below
*/

//layer navigation
function navigateToLayer(layer) {
  const layerFrame = document.querySelector("#layerContainer iframe");
  layerFrame.src = `layers/${layer}.html`;
}

//Function to handle Iframe paging
function createLayerIframe(layerID) {
  var iframe = document.createElement('iframe');
  iframe.src = 'layers/' + layerID + '.html'; // Adjust the path to your layer files
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';

  return iframe;
}

//Funciton to create a transition between layers
function transitionToLayer(layer) {
  var iframe = document.getElementById('layer-frame');
  iframe.style.opacity = 0; // Fade out the iframe

  setTimeout(function() {
    // Load the new layer content
    iframe.src = layer;

    setTimeout(function() {
      iframe.style.opacity = 1; // Fade in the iframe
    }, 100); // Add a slight delay before fading in to ensure smooth transition
  }, 300); // Wait for the fade-out transition duration
}
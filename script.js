function navigateToLayer(layerID) {
  var layerContainer = document.getElementById('layerContainer');

  // Clear the container and add the new iframe
  layerContainer.innerHTML = '';
  layerContainer.appendChild(createLayerIframe(layerID));
}

  function createLayerIframe(layerID) {
    var iframe = document.createElement('iframe');
    iframe.src = 'layers/' + layerID + '.html'; // Adjust the path to your layer files
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
  
    return iframe;
  }

  //button function for layer1
  function grantAccess() {
    var status = document.getElementById('status');
    status.textContent = 'Access granted, welcome home DD';

    setTimeout(function(){
      window.location.href = 'layer2.html';
    },2000) //time delay before
  }
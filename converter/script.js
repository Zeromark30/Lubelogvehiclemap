/**
 * Extracts and transforms multiple <area> tags from an HTML string
 * into a JSON object with a "Map" key containing a list of objects.
 *
 * @param {string} htmlInput The HTML string containing one or more <area> tags.
 * @returns {object | null} A JSON object conforming to the specified structure, or null if no area tags are found.
 */
function processAreaTags(htmlInput) {
  const areaTags = htmlInput.match(/<area[^>]*>/g);
  const mapItems = [];

  if (!areaTags || areaTags.length === 0) {
    return null; // Indicate no tags found
  }

  for (const areaTag of areaTags) {
    const titleMatch = areaTag.match(/title="([^"]*)"/);
    const coordsMatch = areaTag.match(/coords="([^"]*)"/);
    const shapeMatch = areaTag.match(/shape="([^"]*)"/);

    const tags = titleMatch ? titleMatch[1] : '';
    const coordinates = coordsMatch ? coordsMatch[1] : '';
    const shape = shapeMatch ? shapeMatch[1] : '';

    const itemData = {
      Tags: tags,
      Coordinates: coordinates,
      Color: '#7B89C7', // Default color
      Shape: shape,
      Opacity: 0.5, // Default opacity
    };
    mapItems.push(itemData);
  }

  return {
    Map: mapItems
  };
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = ''; // Clear previous classes
    messageDiv.classList.add('message-' + type);
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000); // Hide after 5 seconds
}


function convertHtmlToJson() {
    const htmlInput = document.getElementById('htmlInput').value;
    const jsonOutputElement = document.getElementById('jsonOutput');

    if (!htmlInput.trim()) {
        jsonOutputElement.value = '';
        showMessage('Please paste some HTML content into the input box.', 'error');
        return;
    }

    try {
        const result = processAreaTags(htmlInput);

        if (result) {
            jsonOutputElement.value = JSON.stringify(result, null, 4);
            showMessage('Conversion successful!', 'success');
        } else {
            jsonOutputElement.value = '';
            showMessage('No <area> tags found in the provided HTML.', 'error');
        }
    } catch (e) {
        console.error("Conversion error:", e);
        jsonOutputElement.value = 'Error during conversion. Check console for details.';
        showMessage('An error occurred during conversion. Please check your HTML format.', 'error');
    }
}

function copyToClipboard() {
    const jsonOutputElement = document.getElementById('jsonOutput');
    if (!jsonOutputElement.value) {
        showMessage('Nothing to copy. Convert some HTML first!', 'error');
        return;
    }
    jsonOutputElement.select();
    jsonOutputElement.setSelectionRange(0, 99999); // For mobile devices

    try {
        navigator.clipboard.writeText(jsonOutputElement.value).then(() => {
            showMessage('JSON copied to clipboard!', 'success');
        }, (err) => {
            console.error('Could not copy text: ', err);
            // Fallback for older browsers or if permission is denied
            document.execCommand('copy');
            showMessage('JSON copied to clipboard (fallback)!', 'success');
        });
    } catch (err) {
        console.error('Could not copy text: ', err);
        // Fallback for older browsers
        document.execCommand('copy');
        showMessage('JSON copied to clipboard (fallback)!', 'success');
    }
}
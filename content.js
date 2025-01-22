// Function to unlink Twitter and X links 
function unlinkSocialLinks() {
    const links = document.querySelectorAll('a[href*="twitter.com"], a[href*="x.com"]');
    links.forEach(link => {
      // Create a text node with the same text content as the link
      const textNode = document.createTextNode(link.textContent);
  
      // Replace the link with the plain text node
      link.parentNode.replaceChild(textNode, link);
    });
  }
  
  // Function to replace embedded Twitter and X content with a placeholder to preserve layout
  function replaceSocialEmbeds() {
    // Replace iframes that embed Twitter or X
    const socialIframes = document.querySelectorAll('iframe[src*="twitter.com"], iframe[src*="x.com"]');
    socialIframes.forEach(iframe => {
      const placeholder = createPlaceholder();
      iframe.parentNode.replaceChild(placeholder, iframe);
    });
  
    // Replace blockquotes for embedded tweets or posts
    const socialBlockquotes = document.querySelectorAll('blockquote.twitter-tweet, blockquote[data-x-tweet]');
    socialBlockquotes.forEach(blockquote => {
      const placeholder = createPlaceholder();
      blockquote.parentNode.replaceChild(placeholder, blockquote);
    });
  }
  
  // Function to create a placeholder element
  function createPlaceholder() {
    const placeholder = document.createElement('div');
    placeholder.textContent = "Blocked by NoXious";
    placeholder.style.fontSize = "18px";
    placeholder.style.color = "red";
    placeholder.style.textAlign = "center";
    placeholder.style.margin = "10px 0";
    placeholder.style.border = "1px dashed #ccc";
    placeholder.style.padding = "10px";
    placeholder.style.backgroundColor = "#f9f9f9";
    return placeholder;
  }
  
  // Execute both functions
  unlinkSocialLinks();
  replaceSocialEmbeds();
  
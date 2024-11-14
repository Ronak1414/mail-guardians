// document.getElementById('checkPhishing').addEventListener('click', () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     if (chrome.runtime.lastError || !tabs.length) {
//       console.error(chrome.runtime.lastError || "No active tab found.");
//       return;
//     }

//     const tab = tabs[0];
//     const emailDomains = ['mail.google.com', 'outlook.live.com', 'mail.yahoo.com'];

//     if (emailDomains.some(domain => tab.url.includes(domain))) {
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: detectPhishing
//       }).then((results) => {
//         const resultElement = document.getElementById('result');
//         if (results && results[0] && results[0].result) {
//           const isPhishing = results[0].result.includes("phishing");
//           resultElement.textContent = results[0].result;
//           if (isPhishing) {
//             resultElement.style.backgroundColor = 'red';
//             resultElement.style.color = 'white';
//           } else if (results[0].result === "This is not an email page.") {
//             resultElement.style.backgroundColor = '';
//             resultElement.style.color = '';
//           } else {
//             resultElement.style.backgroundColor = 'green';
//             resultElement.style.color = 'white';
//           }
//         } else {
//           resultElement.textContent = 'Unable to determine phishing status.';
//         }
//       }).catch((err) => {
//         console.error('Error executing script:', err);
//       });
//     } else {
//       document.getElementById('result').textContent = 'This is not an email page.';
//     }
//   });
// });

// function detectPhishing() {
//   const emailSelectors = ['.a3s', '.ii.gt']; // Specific selectors used in Gmail for email content
//   let emailText = '';
//   let isEmailPage = false;

//   emailSelectors.forEach(selector => {
//     const elements = document.querySelectorAll(selector);
//     if (elements.length > 0) {
//       isEmailPage = true;
//       elements.forEach(element => {
//         emailText += element.innerText + ' ';
//       });
//     }
//   });

//   if (!isEmailPage) {
//     return "This is not an email page.";
//   }

//   const phishingWords = [
//     'win', 'free', 'prize', 'click here', 'urgent', 'congratulations',
//     'lottery', 'cash', 'winner', 'exclusive', 'offer', 'buy now',
//     'limited time', 'act now', 'discount', 'no cost', 'risk-free',
//     'promise', 'guarantee', 'trial', 'investment', 'urgent'
//   ];

//   let phishingScore = 0;

//   phishingWords.forEach(word => {
//     const regex = new RegExp(`\\b${word}\\b`, 'i');
//     if (regex.test(emailText)) {
//       phishingScore += 1;
//     }
//   });

//   // Set a threshold for phishing determination
//   const phishingThreshold = 3;

//   if (phishingScore >= phishingThreshold) {
//     return "This email might be phishing!";
//   } else {
//     return "This email looks safe.";
//   }
// }

// document.getElementById('checkPhishing').addEventListener('click', () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     if (chrome.runtime.lastError || !tabs.length) {
//       console.error(chrome.runtime.lastError || "No active tab found.");
//       return;
//     }

//     const tab = tabs[0];
//     const emailDomains = ['mail.google.com', 'outlook.live.com', 'mail.yahoo.com'];

//     if (emailDomains.some(domain => tab.url.includes(domain))) {
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: detectPhishing
//       }).then((results) => {
//         const resultElement = document.getElementById('result');
//         const chatbotButton = document.getElementById('chatbot');
//         if (results && results[0] && results[0].result) {
//           const isPhishing = results[0].result.includes("phishing");
//           resultElement.textContent = results[0].result;
//           if (isPhishing) {
//             resultElement.style.backgroundColor = 'red';
//             resultElement.style.color = 'white';
//           } else if (results[0].result === "This is not an email page.") {
//             resultElement.style.backgroundColor = '';
//             resultElement.style.color = '';
//           } else {
//             resultElement.style.backgroundColor = 'green';
//             resultElement.style.color = 'white';
//           }
//         } else {
//           resultElement.textContent = 'Unable to determine phishing status.';
//         }
//         chatbotButton.style.display = 'block'; // Show chatbot button
//       }).catch((err) => {
//         console.error('Error executing script:', err);
//       });
//     } else {
//       document.getElementById('result').textContent = 'This is not an email page.';
//     }
//   });
// });

// function detectPhishing() {
//   const emailSelectors = ['.a3s', '.ii.gt']; // Specific selectors used in Gmail for email content
//   let emailText = '';
//   let isEmailPage = false;

//   emailSelectors.forEach(selector => {
//     const elements = document.querySelectorAll(selector);
//     if (elements.length > 0) {
//       isEmailPage = true;
//       elements.forEach(element => {
//         emailText += element.innerText + ' ';
//       });
//     }
//   });

//   if (!isEmailPage) {
//     return "This is not an email page.";
//   }

//   const phishingWords = [
//     'win', 'free', 'prize', 'click here', 'urgent', 'congratulations',
//     'lottery', 'cash', 'winner', 'exclusive', 'offer', 'buy now',
//     'limited time', 'act now', 'discount', 'no cost', 'risk-free',
//     'promise', 'guarantee', 'trial', 'investment', 'urgent'
//   ];

//   let phishingScore = 0;

//   phishingWords.forEach(word => {
//     const regex = new RegExp(`\\b${word}\\b`, 'i');
//     if (regex.test(emailText)) {
//       phishingScore += 1;
//     }
//   });

//   // Set a threshold for phishing determination
//   const phishingThreshold = 3;

//   if (phishingScore >= phishingThreshold) {
//     return "This email might be phishing!";
//   } else {
//     return "This email looks safe.";
//   }
// }


document.getElementById('checkPhishing').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (chrome.runtime.lastError || !tabs.length) {
      console.error(chrome.runtime.lastError || "No active tab found.");
      return;
    }

    const tab = tabs[0];
    const emailDomains = ['mail.google.com', 'outlook.live.com', 'mail.yahoo.com'];

    if (emailDomains.some(domain => tab.url.includes(domain))) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: detectPhishing
      }).then((results) => {
        const resultElement = document.getElementById('result');
        const chatbotButton = document.getElementById('chatbot');
        if (results && results[0] && results[0].result) {
          const isPhishing = results[0].result.includes("phishing");
          resultElement.textContent = results[0].result;
          if (isPhishing) {
            resultElement.style.backgroundColor = 'red';
            resultElement.style.color = 'white';
          } else if (results[0].result === "This is not an email page.") {
            resultElement.style.backgroundColor = '';
            resultElement.style.color = '';
          } else {
            resultElement.style.backgroundColor = 'green';
            resultElement.style.color = 'white';
          }
        } else {
          resultElement.textContent = 'Unable to determine phishing status.';
        }
        chatbotButton.hidden = false; // Show chatbot button
        chatbotButton.style.display = 'flex'; // Ensure it's displayed as a flex item

        // Automatically read out the result
        const resultText = resultElement.textContent;
        const utterance = new SpeechSynthesisUtterance(resultText);
        speechSynthesis.speak(utterance);
      }).catch((err) => {
        console.error('Error executing script:', err);
      });
    } else {
      document.getElementById('result').textContent = 'This is not an email page.';
    }
  });
});

document.getElementById('chatbot').addEventListener('click', () => {
  const resultText = document.getElementById('result').textContent;
  const utterance = new SpeechSynthesisUtterance(resultText);
  speechSynthesis.speak(utterance);
});

function detectPhishing() {
  const emailSelectors = ['.a3s', '.ii.gt']; // Specific selectors used in Gmail for email content
  let emailText = '';
  let isEmailPage = false;

  emailSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      isEmailPage = true;
      elements.forEach(element => {
        emailText += element.innerText + ' ';
      });
    }
  });

  if (!isEmailPage) {
    return "This is not an email page.";
  }

  const phishingWords = [
    'win', 'free', 'prize', 'click here', 'urgent', 'congratulations',
    'lottery', 'cash', 'winner', 'exclusive', 'offer', 'buy now',
    'limited time', 'act now', 'discount', 'no cost', 'risk-free',
    'promise', 'guarantee', 'trial', 'investment', 'urgent'
  ];

  let phishingScore = 0;

  phishingWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(emailText)) {
      phishingScore += 1;
    }
  });

  // Set a threshold for phishing determination
  const phishingThreshold = 3;

  if (phishingScore >= phishingThreshold) {
    return "This email might be phishing!";
  } else {
    return "This email looks safe.";
  }
}

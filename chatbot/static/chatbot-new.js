// // // // const responses = {
// // // //     "what is phishing": "Phishing is a fraudulent attempt to obtain sensitive information by pretending to be a trustworthy source.",
// // // //     "signs of phishing email": "Phishing emails may have urgent messages, unknown sender addresses, or links that don't match legitimate URLs.",
// // // //     "types of phishing": "Common types include email phishing, spear phishing (targeted attacks), smishing (SMS phishing), and vishing (voice phishing).",
// // // //     "how to avoid phishing": "Avoid clicking on suspicious links, verify the sender, use strong passwords, and enable two-factor authentication.",
// // // //     "phishing vs spam": "Spam is unsolicited bulk email, while phishing is a targeted attempt to steal personal information.",
// // // //     "phishing examples": "Examples include fake emails from banks, tech support scams, or links claiming 'you've won a prize.'",
// // // //     "report phishing": "Report phishing emails to your email provider, or forward them to reportphishing@apwg.org or your country’s cybersecurity agency.",
// // // //     "what to do if i clicked a phishing link": "Disconnect from the internet, update your passwords, run a security scan, and monitor your accounts closely.",
// // // //     "phishing attacks on social media": "Be cautious of fake accounts, links in messages, and suspicious friend requests on social media platforms.",
// // // //     "multi-factor authentication and phishing": "Multi-factor authentication (MFA) adds a layer of security to prevent phishing attacks from succeeding even if a password is compromised."
// // // //   };
  
// // // //   document.getElementById("send-btn").addEventListener("click", sendMessage);
  
// // // //   function sendMessage() {
// // // //     const userInput = document.getElementById("user-input").value.trim();
// // // //     if (userInput) {
// // // //       addMessage("user", userInput);
// // // //       document.getElementById("user-input").value = "";
// // // //       generateBotResponse(userInput.toLowerCase());
// // // //     }
// // // //   }
  
// // // //   function addMessage(sender, message) {
// // // //     const chatOutput = document.getElementById("chat-output");
// // // //     const messageElement = document.createElement("div");
// // // //     messageElement.classList.add(`message-${sender}`);
// // // //     messageElement.textContent = message;
// // // //     chatOutput.appendChild(messageElement);
// // // //     chatOutput.scrollTop = chatOutput.scrollHeight;
// // // //   }
  
// // // //   function generateBotResponse(userInput) {
// // // //     let response = responses[userInput] || "I'm here to help with phishing-related queries. Could you please clarify your question?";
// // // //     setTimeout(() => addMessage("bot", response), 500);
// // // //   }
  

// // // const geminiApiKey = "AIzaSyBrumxq3mX0bb_iN_5-esZ2ryodVWYb734"; // Store this securely




// // // document.getElementById("send-btn").addEventListener("click", sendMessage);

// // // function sendMessage() {
// // //     const userInput = document.getElementById("user-input").value.trim();
// // //     if (userInput) {
// // //         addMessage("user", userInput);
// // //         document.getElementById("user-input").value = "";
// // //         generateBotResponse(userInput);
// // //     }
// // // }

// // // function addMessage(sender, message) {
// // //     const chatOutput = document.getElementById("chat-output");
// // //     const messageElement = document.createElement("div");
// // //     messageElement.classList.add(`message-${sender}`);
// // //     messageElement.textContent = message;
// // //     chatOutput.appendChild(messageElement);
// // //     chatOutput.scrollTop = chatOutput.scrollHeight;
// // // }

// // // async function generateBotResponse(userInput) {
// // //     const requestPayload = {
// // //         contents: [
// // //             {
// // //                 parts: [
// // //                     {
// // //                         text: userInput
// // //                     }
// // //                 ]
// // //             }
// // //         ]
// // //     };

// // //     try {
// // //         const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`, {
// // //             method: "POST",
// // //             headers: {
// // //                 "Content-Type": "application/json",
// // //             },
// // //             body: JSON.stringify(requestPayload),
// // //         });

// // //         if (response.ok) {
// // //             const data = await response.json();
// // //             console.log("API Response:", data); // Debugging log
            
// // //             // Check if the expected data structure exists
// // //             if (data.contents && data.contents.length > 0 && data.contents[0].parts && data.contents[0].parts.length > 0) {
// // //                 const botResponse = data.contents[0].parts[0].text;
// // //                 addMessage("bot", botResponse);
// // //             } else {
// // //                 addMessage("bot", "Sorry, I couldn't understand that. Can you rephrase your question?");
// // //             }
// // //         } else {
// // //             const errorData = await response.json();
// // //             console.error("API Error:", errorData); // Debugging log
// // //             addMessage("bot", `Error: ${errorData.error.message || 'Unknown error occurred.'}`);
// // //         }
// // //     } catch (error) {
// // //         console.error("Error fetching response from Gemini API:", error);
// // //         addMessage("bot", "Sorry, I'm having trouble retrieving information at the moment. Please try again later.");
// // //     }
// // // }




// // document.getElementById("send-btn").addEventListener("click", sendMessage);

// // function sendMessage() {
// //     const userInput = document.getElementById("user-input").value.trim();
// //     if (userInput) {
// //         addMessage("user", userInput);
// //         document.getElementById("user-input").value = "";
// //         generateBotResponse(userInput);
// //     }
// // }

// // function addMessage(sender, message) {
// //     const chatOutput = document.getElementById("chat-output");
// //     const messageElement = document.createElement("div");
// //     messageElement.classList.add(`message-${sender}`);
// //     messageElement.textContent = message;
// //     chatOutput.appendChild(messageElement);
// //     chatOutput.scrollTop = chatOutput.scrollHeight;
// // }

// // async function generateBotResponse(userInput) {
// //     try {
// //         const response = await fetch("http://127.0.0.1:5000/chat", {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({ message: userInput }),
// //         });

// //         if (response.ok) {
// //             const data = await response.json();
// //             addMessage("bot", data.response);
// //         } else {
// //             addMessage("bot", "Sorry, I couldn't understand that. Can you rephrase your question?");
// //         }
// //     } catch (error) {
// //         console.error("Error:", error);
// //         addMessage("bot", "Sorry, there was an error with the server.");
// //     }
// // }
// document.getElementById("send-btn").addEventListener("click", sendMessage);

// function sendMessage() {
//     const userInput = document.getElementById("user-input").value.trim();
//     if (userInput) {
//         addMessage("user", userInput);
//         document.getElementById("user-input").value = "";
//         generateBotResponse(userInput);
//     }
// }

// function addMessage(sender, message) {
//     const chatOutput = document.getElementById("chat-output");
//     const messageElement = document.createElement("div");
//     messageElement.classList.add(`message-${sender}`);
//     messageElement.textContent = message;
//     chatOutput.appendChild(messageElement);
//     chatOutput.scrollTop = chatOutput.scrollHeight;
// }

// async function generateBotResponse(userInput) {
//     try {
//         const response = await fetch("http://127.0.0.1:5000/chat", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ message: userInput }),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             addMessage("bot", data.response);
//         } else {
//             addMessage("bot", "Sorry, I couldn't understand that. Can you rephrase your question?");
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         addMessage("bot", "Sorry, there was an error with the server.");
//     }
// }


document.addEventListener("DOMContentLoaded", () => {
    addMessage("bot", "Welcome! 😊 I'm here to help you with any questions you have about phishing and phishing emails. Please enter your question below, and I'll be happy to assist you!");
});

document.getElementById("send-btn").addEventListener("click", sendMessage);

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput) {
        addMessage("user", userInput);
        document.getElementById("user-input").value = "";
        generateBotResponse(userInput);
    }
}

function addMessage(sender, message) {
    const chatOutput = document.getElementById("chat-output");
    const messageElement = document.createElement("div");
    messageElement.classList.add(`message-${sender}`);
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

async function generateBotResponse(userInput) {
    try {
        const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: userInput }),
        });

        if (response.ok) {
            const data = await response.json();
            addMessage("bot", data.response);
        } else {
            addMessage("bot", "Sorry, I couldn't understand that. Can you rephrase your question?");
        }
    } catch (error) {
        console.error("Error:", error);
        addMessage("bot", "Sorry, there was an error with the server.");
    }
}

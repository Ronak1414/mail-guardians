
# Mail Guardian


![Static SVG Preview](./assets/MAIL.gif)

View [animated version here](./assets/MAIL.gif).


**Mail Guardian** is an advanced phishing detection tool designed as a browser extension to proactively analyze email content, links, attachments, and sender reputation. By leveraging machine learning, content analysis, and API integrations, Mail Guardian empowers users to detect and avoid phishing emails before they compromise sensitive information. The tool uses multiple detection layers to identify phishing tactics, including suspicious URLs, malicious keywords, and fake SSL certificates. Additionally, Mail Guardian stores analysis data securely on the blockchain, providing transparent and tamper-proof reports.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Integration](#api-integration)
- [Data Storage](#data-storage)
- [Security](#security)
- [Video Explanation](#video-explanation)
- [Output](#output)
- [Contributing](#contributing)


## Overview

Phishing attacks account for 94% of cyber incidents, often through malicious emails targeting individual and organizational security. **Mail Guardian** offers a proactive solution to detect such emails, flag suspicious links and content, and validate the reputation of email senders. The tool aims to help users secure their email communications by:
- Analyzing email content for phishing indicators.
- Checking sender reputation using VirusTotal.
- Verifying SSL certificates to confirm website legitimacy.
- Storing data on the blockchain for transparency and integrity.

## Features

### 1. HTML Tag Analysis
- Inspects URLs for IP addresses and domain misspellings.
- Flags URLs in HTML tags that appear suspicious.
- **Example**: Detects `<a href="http://192.168.1.1">Click here</a>` as potentially harmful.

### 2. Content Analysis
- Identifies keywords and phrases commonly used in phishing scams.
- Alerts users to suspicious content patterns.
- **Example**: Flags "Your account has been blocked. Click here to update your password" as a phishing attempt.

### 3. Sender Reputation Check
- Integrates with VirusTotal API to assess sender domain and IP reputation.
- Warns users if an email is from a sender with a low reputation score.
- **Example**: Checks the sender’s reputation and displays a warning if the score is low.

### 4. SSL Certificate Authentication
- Verifies SSL certificates to ensure the legitimacy of URLs.
- Flags expired or suspicious certificates to prevent interactions with unsecured websites.
- **Example**: Warns users if an SSL certificate is expired or not valid.

### 5. Blockchain-Based Data Storage
- Securely stores phishing detection data on the blockchain.
- Enables transparent, immutable reporting.
- Provides user-authenticated reports to analyze phishing patterns and protection status.

### 6. Chatbot Support
- Provides an interactive chatbot to answer user questions about phishing and help troubleshoot basic support queries.
- Educates users on identifying phishing tactics and understanding safe browsing practices.

## Tech Stack

### Framework and Language
- **Python** (backend development, content analysis, and detection algorithms)

### Libraries
- **Pandas** (data handling and analysis)
- **Sklearn** (machine learning for pattern recognition)
- **Requests** (API integration and data fetching)
- **BeautifulSoup** (HTML parsing for URL and content inspection)

### API Integration
- **VirusTotal API** (for sender reputation checks)

### Security Features
- **SSL Certificate Authentication** (validates websites for safe browsing)

### Web Frameworks
- **React** (frontend interface for user interactions)
- **Django** (backend for API endpoints and server-side processing)

## Project Structure


## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MFC-Tessara/mail-guardian.git
   cd mail-guardian
   ```

2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure API keys** (see [Configuration](#configuration) section).

4. **Start the Django server**:
   ```bash
   python manage.py runserver
   ```

5. **Install the browser extension**:
   - Instructions for adding the React-based extension to your browser.

## Usage

1. **Email Analysis**: When an email is received, Mail Guardian analyzes it in real-time for any indicators of phishing.
2. **Detailed Report**: After analysis, a report is generated and accessible via the extension interface.
3. **User Alerts**: Alerts are displayed for any flagged content, URLs, or sender reputations.

## Configuration

- Obtain an API key from [VirusTotal](https://www.virustotal.com/).
- Configure the API key in the project’s environment file:
   ```bash
   VIRUSTOTAL_API_KEY=your_api_key_here
   ```
- Set up SSL validation rules and blockchain credentials as per security requirements.

## API Integration

- **VirusTotal**: Used to check domain/IP reputation. Mail Guardian sends sender information to VirusTotal and retrieves reputation scores to assess the risk level of email sources.

## Data Storage

- **Blockchain Storage**: Email analysis data is securely stored on the blockchain, providing a tamper-proof record of all phishing detection results.
- Users can log in to view phishing analysis reports, protected by user authentication for secure access.

## Security

- **SSL Certificate Validation**: Ensures that Mail Guardian only interacts with secure websites by validating SSL certificates.
- **Blockchain Integrity**: All stored phishing data is immutable, ensuring trustworthiness of the reports.

## Video Explanation
[![Video Title](https://img.youtube.com/vi/<video-id>/0.jpg)](https://www.youtube.com/watch?v=Dm18O416UV0)

## Output

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.



# QR Code Generator with User Input

This project uses Node.js to prompt users for a URL, generates a QR code based on the URL, and saves both the URL and the QR code image to files.

## Requirements

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Required Packages

Install the following packages by running the command below:

- `inquirer`: For getting user input
- `qr-image`: For generating QR codes
- `fs` (File System): A built-in Node.js module used to work with files

bash
npm install inquirer qr-image

## How to Run

1. Clone the repository or download the project files.

```bash
git clone https://github.com/your-username/qr-code-generator.git
```

2. Navigate to the project directory:

```bash
cd qr-code-generator
```

3. Install dependencies:

```bash
npm install
```

4. Run the program:

```bash
node index.js
```

5. Enter the URL when prompted. The program will generate a QR code image (`qr_image.png`) and save the URL you entered in a text file (`user_input.txt`).

## Output

- **qr_image.png**: A QR code image based on the URL you entered.
- **user_input.txt**: A text file that stores the URL you provided.

## Troubleshooting

If the prompt doesn't appear or you encounter an error, ensure you are running Node.js in a terminal that supports interactive prompts.
```

This `README.md` provides clear instructions on how to install and run the program. You can replace `your-username` with your GitHub username when setting up the repository link.

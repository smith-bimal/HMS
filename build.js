const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Directory paths
const viewsDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'output');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

// Function to render EJS files
const renderEjsFiles = () => {
    fs.readdir(viewsDir, (err, files) => {
        if (err) {
            console.error('Error reading views directory:', err);
            return;
        }
        // Filter for .ejs files
        files.filter(file => file.endsWith('.ejs')).forEach(file => {
            const filePath = path.join(viewsDir, file);
            const outputPath = path.join(outputDir, file.replace('.ejs', '.html'));

            ejs.renderFile(filePath, {}, (err, str) => {
                if (err) {
                    console.error(`Error rendering ${file}:`, err);
                    return;
                }
                fs.writeFileSync(outputPath, str);
                console.log(`Compiled ${file} to ${outputPath}`);
            });
        });
    });
};

// Call the function to render all EJS files
renderEjsFiles();

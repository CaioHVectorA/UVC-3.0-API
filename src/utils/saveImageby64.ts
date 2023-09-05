import fs from 'fs'
import path from 'path'
export function saveBase64AsPNG(base64String: string, outputPath: string) {
  // Remove the data:image/png;base64 prefix if it exists
  const base64Data = base64String.replace(/^data:image\/png;base64,/, '');

  // Create a buffer from the base64 data
  const buffer = Buffer.from(base64Data, 'base64');

  // Write the buffer to a file at the specified output path
  fs.writeFile(outputPath, buffer, (err) => {
    if (err) {
      console.error('Error saving PNG image:', err);
    } else {
      console.log(`PNG image saved to ${outputPath}`);
    }
  });
}
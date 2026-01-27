import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image sources - Unsplash (all free for commercial use under Unsplash License)
// See IMAGE_SOURCES.md for full license details
const imageSources = [
  {
    filename: 'pakistan-business-summit-davos-2025.jpg',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=85&fit=crop',
    license: 'Unsplash License - Free for commercial use, no attribution required',
    licenseUrl: 'https://unsplash.com/license',
    source: 'Unsplash',
    description: 'Professional business conference/summit setting'
  },
  {
    filename: 'uk-pakistan-business-summit-2025.jpg',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=85&fit=crop',
    license: 'Unsplash License - Free for commercial use, no attribution required',
    licenseUrl: 'https://unsplash.com/license',
    source: 'Unsplash',
    description: 'Modern business meeting/conference room'
  },
  {
    filename: 'dha-peshawar-uk-roadshow-2025.jpg',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=85&fit=crop',
    license: 'Unsplash License - Free for commercial use, no attribution required',
    licenseUrl: 'https://unsplash.com/license',
    source: 'Unsplash',
    description: 'Business presentation and networking event'
  }
];

// Target directory
const targetDir = path.join(__dirname, '..', 'public', 'image', 'events');

// Ensure directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
}

// Download and process function
async function downloadAndProcessImage(source) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(targetDir, source.filename);
    
    console.log(`\nDownloading: ${source.filename}`);
    console.log(`Source: ${source.url}`);
    console.log(`License: ${source.license}`);
    
    https.get(source.url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        try {
          const buffer = Buffer.concat(chunks);
          
          // Try to use sharp if available, otherwise save directly
          let processed = false;
          try {
            const sharp = (await import('sharp')).default;
            await sharp(buffer)
              .resize(1600, null, {
                withoutEnlargement: true,
                fit: 'inside'
              })
              .jpeg({ 
                quality: 85,
                mozjpeg: true
              })
              .toFile(filePath);
            processed = true;
          } catch (sharpError) {
            // Sharp not available, save directly (Unsplash URLs already provide 1600px width)
            console.log('  Note: sharp not available, saving original image');
            fs.writeFileSync(filePath, buffer);
          }
          
          const stats = fs.statSync(filePath);
          console.log(`✓ Saved: ${filePath}`);
          console.log(`  Size: ${(stats.size / 1024).toFixed(2)} KB`);
          if (processed) {
            console.log(`  Processed: Resized to 1600px wide, converted to JPG`);
          } else {
            console.log(`  Note: Image saved directly (Unsplash provides 1600px width)`);
          }
          console.log(`  License: ${source.license}`);
          console.log(`  License URL: ${source.licenseUrl}`);
          
          resolve(filePath);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// Main execution
async function main() {
  console.log('Starting image download and processing...');
  console.log(`Target directory: ${targetDir}\n`);
  
  const results = [];
  
  for (const source of imageSources) {
    try {
      const filePath = await downloadAndProcessImage(source);
      results.push({
        filename: source.filename,
        path: filePath,
        license: source.license,
        status: 'success'
      });
    } catch (error) {
      console.error(`✗ Error processing ${source.filename}:`, error.message);
      results.push({
        filename: source.filename,
        status: 'error',
        error: error.message
      });
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('Download Summary:');
  console.log('='.repeat(60));
  
  results.forEach((result) => {
    if (result.status === 'success') {
      console.log(`✓ ${result.filename}`);
      console.log(`  License: ${result.license}`);
    } else {
      console.log(`✗ ${result.filename} - ${result.error}`);
    }
  });
  
  const successCount = results.filter(r => r.status === 'success').length;
  console.log(`\nCompleted: ${successCount}/${imageSources.length} images downloaded`);
}

main().catch(console.error);

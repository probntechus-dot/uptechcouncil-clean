import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicImage = path.resolve(__dirname, '..', 'public', 'image');

async function compressImage(inputPath, outputPath, options = {}) {
  const { maxWidth = 1600, quality = 80, format = 'jpeg' } = options;
  try {
    const metadata = await sharp(inputPath).metadata();
    let pipeline = sharp(inputPath);

    // Resize if wider than maxWidth
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }

    if (format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
    } else if (format === 'png') {
      pipeline = pipeline.png({ quality, compressionLevel: 9 });
    } else if (format === 'webp') {
      pipeline = pipeline.webp({ quality });
    }

    await pipeline.toFile(outputPath);
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
    console.log(`  ${path.basename(inputPath)}: ${(inputSize/1024).toFixed(0)}KB -> ${(outputSize/1024).toFixed(0)}KB (${savings}% smaller)`);
  } catch (err) {
    console.error(`  ERROR processing ${inputPath}: ${err.message}`);
  }
}

async function main() {
  console.log('\n=== UPTECH Image Optimization ===\n');

  // 1. Leadership images (PNG -> JPEG, compressed)
  console.log('1. Compressing leadership images...');
  const leadershipDir = path.join(publicImage, 'leadership');
  const leadershipFiles = [
    'Advisory Council.png',
    'Board of Directors.png',
    'Executive Leadership.png',
    'Governance Structure.png',
  ];
  for (const file of leadershipFiles) {
    const inputPath = path.join(leadershipDir, file);
    const outputName = file.replace('.png', '.jpg');
    const outputPath = path.join(leadershipDir, outputName);
    await compressImage(inputPath, outputPath, { maxWidth: 1600, quality: 82, format: 'jpeg' });
  }

  // Convert leader1.jfif to jpeg
  const jfifInput = path.join(leadershipDir, 'leader1.jfif');
  if (fs.existsSync(jfifInput)) {
    const jfifOutput = path.join(leadershipDir, 'leader1.jpg');
    await compressImage(jfifInput, jfifOutput, { maxWidth: 1200, quality: 80, format: 'jpeg' });
  }

  // 2. About image - convert GIF to static JPEG (first frame)
  console.log('\n2. Converting about1.gif to JPEG...');
  const aboutDir = path.join(publicImage, 'about');
  const aboutGif = path.join(aboutDir, 'about1.gif');
  if (fs.existsSync(aboutGif)) {
    const aboutJpg = path.join(aboutDir, 'about1.jpg');
    await compressImage(aboutGif, aboutJpg, { maxWidth: 1600, quality: 82, format: 'jpeg' });
  }

  // 3. Initiative images (PNG -> compressed PNG or JPEG)
  console.log('\n3. Compressing initiative images...');
  const initDir = path.join(publicImage, 'Initiatives');
  const initFiles = [
    'ai-tech-programs.png',
    'people-ai-platform.png',
    'techmart-global.png',
    'uk-pakistan-tech-excellence-awards.png',
  ];
  for (const file of initFiles) {
    const inputPath = path.join(initDir, file);
    const outputName = file.replace('.png', '.jpg');
    const outputPath = path.join(initDir, outputName);
    await compressImage(inputPath, outputPath, { maxWidth: 1200, quality: 80, format: 'jpeg' });
  }

  // 4. Governance background
  console.log('\n4. Compressing governance background...');
  const govInput = path.join(publicImage, 'governance', 'governance-bg.png');
  if (fs.existsSync(govInput)) {
    const govOutput = path.join(publicImage, 'governance', 'governance-bg.jpg');
    await compressImage(govInput, govOutput, { maxWidth: 1920, quality: 80, format: 'jpeg' });
  }

  // 5. Event gallery images
  console.log('\n5. Compressing event gallery images...');
  const galleryDir = path.join(publicImage, 'eventgallery');
  const galleryFiles = fs.readdirSync(galleryDir).filter(f => f.endsWith('.jpg'));
  for (const file of galleryFiles) {
    const inputPath = path.join(galleryDir, file);
    const tempPath = path.join(galleryDir, `temp-${file}`);
    await compressImage(inputPath, tempPath, { maxWidth: 1200, quality: 80, format: 'jpeg' });
    // Replace original with compressed
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
  }

  console.log('\n=== Optimization Complete ===\n');
}

main().catch(console.error);

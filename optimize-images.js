import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = './public/images';
const outputDir = './public/images-optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  'impacto-1.jpg',
  'impacto-2.jpg',
  'impacto-3.jpg',
  'impacto-4.jpg'
];

async function optimizeImages() {
  for (const image of images) {
    const inputPath = path.join(imageDir, image);
    const outputPath = path.join(outputDir, image.replace('.jpg', '.webp'));
    const jpegPath = path.join(outputDir, image);

    try {
      // Create WebP version (most optimized)
      await sharp(inputPath)
        .resize(1200, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      // Create optimized JPEG fallback
      await sharp(inputPath)
        .resize(1200, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ quality: 75, progressive: true })
        .toFile(jpegPath);

      const originalSize = fs.statSync(inputPath).size;
      const webpSize = fs.statSync(outputPath).size;
      const jpegSize = fs.statSync(jpegPath).size;
      const savings = (100 - (webpSize / originalSize) * 100).toFixed(1);

      console.log(`✓ ${image}`);
      console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
      console.log(`  WebP: ${(webpSize / 1024).toFixed(2)} KB (${savings}% smaller)`);
      console.log(`  JPEG: ${(jpegSize / 1024).toFixed(2)} KB`);
    } catch (error) {
      console.error(`✗ Error optimizing ${image}:`, error.message);
    }
  }

  console.log('\n✅ Image optimization complete!');
}

optimizeImages();

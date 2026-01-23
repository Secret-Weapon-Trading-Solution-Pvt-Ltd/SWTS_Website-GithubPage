const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const TARGET_SIZE = 400; // 400x400 for 2x retina
const QUALITY = 80; // Good balance between quality and size
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const BACKUP_DIR = path.join(__dirname, '..', 'public', 'backup-original');

// Images to resize (from ServicesScroller)
const imagesToResize = [
  'strategy_automation.jpg',
  'python.jpg',
  'Trading service.jpg',
  'execution.jpg',
  'strategy validation.jpg',
  'risk.jpg',
  'custom_platform.jpg',
  'analyze.jpg',
  'build.jpg',
  'Design.jpg',
];

async function resizeImages() {
  console.log('🖼️  Image Resize Script');
  console.log('========================\n');

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log('📁 Created backup directory: public/backup-original\n');
  }

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const imageName of imagesToResize) {
    const imagePath = path.join(PUBLIC_DIR, imageName);
    const backupPath = path.join(BACKUP_DIR, imageName);

    // Check if image exists
    if (!fs.existsSync(imagePath)) {
      console.log(`⚠️  Skipping ${imageName} - file not found`);
      continue;
    }

    try {
      // Get original file size
      const originalStats = fs.statSync(imagePath);
      const originalSizeKB = (originalStats.size / 1024).toFixed(1);
      totalOriginalSize += originalStats.size;

      // Backup original if not already backed up
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(imagePath, backupPath);
        console.log(`💾 Backed up: ${imageName}`);
      }

      // Resize image
      await sharp(imagePath)
        .resize(TARGET_SIZE, TARGET_SIZE, {
          fit: 'cover',
          position: 'center',
        })
        .jpeg({
          quality: QUALITY,
          mozjpeg: true, // Better compression
        })
        .toFile(imagePath + '.tmp');

      // Replace original with resized
      fs.unlinkSync(imagePath);
      fs.renameSync(imagePath + '.tmp', imagePath);

      // Get new file size
      const newStats = fs.statSync(imagePath);
      const newSizeKB = (newStats.size / 1024).toFixed(1);
      totalNewSize += newStats.size;

      const savings = (((originalStats.size - newStats.size) / originalStats.size) * 100).toFixed(1);

      console.log(`✅ ${imageName}`);
      console.log(`   ${originalSizeKB} KB → ${newSizeKB} KB (${savings}% smaller)\n`);

    } catch (error) {
      console.error(`❌ Error processing ${imageName}:`, error.message);
    }
  }

  // Summary
  const totalOriginalMB = (totalOriginalSize / (1024 * 1024)).toFixed(2);
  const totalNewMB = (totalNewSize / (1024 * 1024)).toFixed(2);
  const totalSavings = (((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100).toFixed(1);

  console.log('\n========================');
  console.log('📊 Summary');
  console.log('========================');
  console.log(`Original total: ${totalOriginalMB} MB`);
  console.log(`New total: ${totalNewMB} MB`);
  console.log(`Total savings: ${totalSavings}%`);
  console.log(`\n✨ Done! Original images backed up to public/backup-original/`);
}

resizeImages().catch(console.error);

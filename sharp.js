const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/hero');
const destinstion = path.resolve(__dirname, 'src/public/hero');

if (!fs.existsSync(destinstion)) {
  fs.mkdirSync(destinstion);
}

fs.readdirSync(target)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(1000)
      .toFile(path.resolve(
        __dirname,
        `${destinstion}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -medium.jpg
    sharp(`${target}/${image}`)
      .resize(700)
      .toFile(path.resolve(
        __dirname,
        `${destinstion}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`,
      ));

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(500)
      .toFile(path.resolve(
        __dirname,
        `${destinstion}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });

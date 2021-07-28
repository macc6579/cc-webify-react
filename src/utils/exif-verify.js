import ExifReader from 'exifreader';

// 校验Exif中是否有地理信息
const verifyKey = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const tags = ExifReader.load(reader.result);
      if ('GPSLatitude' in tags && 'GPSLongitude' in tags) {
        resolve();
      } else {
        reject(new Error('缺少地理信息'));
      }
    };
  });
};

export default verifyKey;

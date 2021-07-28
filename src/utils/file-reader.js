const toText = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

const fileReadAsText = async e => {
  const fileList = (e.dataTransfer && e.dataTransfer.files) || e.target.files;
  if (fileList.length === 0) {
    return false;
  }

  const files = await Promise.all(
    Array.from(fileList).map(async file => {
      const { name, type, size, lastModified } = file;
      const text = await toText(file);
      return {
        name,
        size,
        type,
        lastModified,
        text
      };
    })
  );
  return files;
};

const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

const fileReadAsDataURL = async fileList => {
  if (fileList.length === 0) {
    return false;
  }

  const files = await Promise.all(
    Array.from(fileList).map(async file => {
      const { name, type, size, lastModified } = file;
      const base64 = await toBase64(file);
      return {
        name,
        size,
        type,
        lastModified,
        base64
      };
    })
  );
  return files;
};

export { fileReadAsText, fileReadAsDataURL };

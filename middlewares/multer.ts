// middlewares/multerMiddleware.ts
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default upload.single('image');

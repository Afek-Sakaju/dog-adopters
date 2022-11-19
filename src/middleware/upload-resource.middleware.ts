import multer from 'multer';
import path from 'path';
import { UPLOAD_DOG_PROFILES_PATH } from '../utils/paths';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_DOG_PROFILES_PATH);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    },
});

const upload = multer({ storage: storage });

export default upload.single('profile');

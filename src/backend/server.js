
// const express = require('express');
// const app = express();
// const port = 8090;


// const mysql = require('mysql2');

// //tao connect
// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123456',
//     database: 'manager',
// });


// // connect
// connection.connect((err) => {
//     if (err) {
//         console.error('Lỗi kết nối cơ sở dữ liệu:', err);
//     }
//     else {
//         console.log('Kết nối cơ sở dữ liệu MySQL thành công!');
//         const query = 'SELECT * FROM user';
//         connection.query(query, (err, results, fields) => {
//             if (err) {
//                 console.error('Lỗi truy vấn:', err);
//             } else {
//                 console.log('Dữ liệu từ bảng user:', results);
//                 // Xử lý dữ liệu thu được ở đây, bạn có thể in ra console hoặc sử dụng dữ liệu trong React
//             }
//         });
//     }

// });


// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });


// // cấu hình expres.js
// app.post('/login', function (req, res) {
//     const { email, mat_khau } = req.body;
//     // Kiểm tra trong database
//     const query = 'SELECT * FROM user WHERE email = ?';
//     connection.query(query, [email], async function (error, results) {
//         if (error) {
//             console.error('Lỗi truy vấn:', error);
//             return res.status(500).json({ success: false, message: 'Lỗi truy vấn cơ sở dữ liệu' });
//         }
//         // Nếu tìm thấy người dùng
//         if (results.length > 0) {
//             const user = results[0];
//             // So sánh mật khẩu
//             const match = await bcrypt.compare(mat_khau, user.mat_khau);
//             if (match) {
//                 // Tạo token cho phiên đăng nhập
//                 const token = jwt.sign({ userId: user.id }, SECRET_KEY);
//                 res.json({ success: true, token: token });
//             } else {
//                 res.status(401).json({ success: false, message: 'Mật khẩu không đúng' });
//             }
//         } else {
//             res.status(404).json({ success: false, message: 'Email không tồn tại' });
//         }
//     });
// });



// app.listen(port, () => {
//     console.log(`Cổng Server tại http://localhost:${port}`);
// });









const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const session = require('express-session');
const mysql = require('mysql2/promise');  // Sử dụng mysql2 với Promise API

const app = express();

// CORS cho phép tất cả các nguồn
app.use(cors());


// Cấu hình express để xử lý JSON và session
app.use(express.json());
app.use(session({
    secret: 'your_secret_key_here', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Tạo kết nối cơ sở dữ liệu MySQL
const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'manager',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



// show table
const query = 'SELECT * FROM user';
connection.query(query)
    .then(([results, fields]) => {
        console.log('Dữ liệu từ bảng user:');
        console.log(JSON.stringify(results, null, 2)); 
    })
    .catch(err => {
        console.error('Lỗi truy vấn:', err);
    });


app.get('/', (req, res) => {
    res.send('Hello, Express!');
});


// Xử lý yêu cầu đăng ký
app.post('/register', async (req, res) => {
    const { ho_va_ten, ten_dang_nhap, email, so_dien_thoai, mat_khau, can_cuoc } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!ho_va_ten || !ten_dang_nhap || !email || !so_dien_thoai || !mat_khau || !can_cuoc) {
        return res.status(400).json({ error: 'Thông tin đăng ký không đầy đủ.' });
    }

    try {
        // Kiểm tra xem user trùng
        const [rows] = await connection.query('SELECT * FROM user WHERE ten_dang_nhap = ? OR email = ?', [ten_dang_nhap, email]);

        if (rows.length > 0) {
            return res.status(409).json({ error: 'Tên đăng nhập hoặc email đã được sử dụng.' });
        }

        // mh
        const hashedPassword = await bcrypt.hash(mat_khau, 10);

        // Thêm người dùng mới vào csdl
        const result = await connection.query('INSERT INTO user (ho_va_ten, ten_dang_nhap, email, so_dien_thoai, mat_khau, can_cuoc) VALUES (?, ?, ?, ?, ?, ?)', [ho_va_ten, ten_dang_nhap, email, so_dien_thoai, hashedPassword, can_cuoc]);

        // Kiểm tra xem thêm
        if (result[0].affectedRows > 0) {
            return res.status(201).json({ success: true, message: 'Đăng ký thành công!' });
        } else {
            return res.status(500).json({ error: 'Không thể đăng ký tài khoản.' });
        }
    } catch (error) {
        console.error('Lỗi server:', error);
        return res.status(500).json({ error: 'Lỗi server.' });
    }
}); 




// Xử lý yêu cầu đăng nhập
app.post('/login', async (req, res) => {
    const { ten_dang_nhap, mat_khau } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!ten_dang_nhap || !mat_khau) {
        return res.status(400).json({ error: 'Thông tin đăng nhập không đầy đủ.' });
    }

    try {
        // Tìm người dùng trong cơ sở dữ liệu
        const [rows] = await connection.query('SELECT * FROM user WHERE ten_dang_nhap = ?', [ten_dang_nhap]);

        if (rows.length === 0) {
            // Không tìm thấy người dùng
            return res.status(401).json({ error: 'Tên đăng nhập hoặc mật khẩu không đúng 2.' });
        }

        const user = rows[0];

        // So sánh mật khẩu 
        const match = await bcrypt.compare(mat_khau, user.mat_khau);

        if (match) {
            // Đăng nhập thành công
            req.session.userId = user.id;
            return res.status(200).json({ success: true, message: 'Đăng nhập thành công!' });
        } else {
            return res.status(200).json({ success: true, message: 'Đăng nhập thành công!' });
        }
    } catch (error) {
        console.error('Lỗi server:', error);
        return res.status(500).json({ error: 'Lỗi server.' });
    }
});






// test cổng
app.listen(8080, () => {
    console.log('Server đang chạy tại cổng 8080');
});











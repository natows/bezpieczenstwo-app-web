const app = require('express')();
const basicAuth = require('express-basic-auth');

app.use(basicAuth({
    users:{ 'admin': 'pickle' },
    unauthorizedResponse:{"message": "Zły user lub hasło"}
}));

const PORT = 3000;

app.get("/secure-data", (req, res) => {
    res.status(200).json({ message: "Dostęp przyznany", user: req.auth.user });
});

app.listen(PORT, () => {
    console.log(`Serwer działa na http://127.0.0.1:${PORT}`);
});

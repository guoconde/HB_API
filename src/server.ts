import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listenning on port ${PORT}.`));
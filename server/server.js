import express from 'express';
import nodeRoutes from './src/routes/nodeRoutes.js';

const app = express();

//app.use is used to mount the specified middleware function(s) at the path which is being
app.use('/api/nodes', nodeRoutes);

app.get('/', (req, res) => {
    res.status(200).send('Defualt API Endpoint');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


// eRi7lAjAIP17pWMr

// mongodb+srv://smabrarhasan26_db_user:eRi7lAjAIP17pWMr@cluster0.wyn1c6j.mongodb.net/?appName=Cluster0
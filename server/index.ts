import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.static('../build'));

app.get('/', (request: express.Request, response: express.Response) => {
    response.send(`<div style="color: red"> Hello client. </div>`)
});

app.get('/api', (request: express.Request, response: express.Response) => {
    const username: string = request.query.username as string;
    const password: string = request.query.password as string;

    console.log(username, password)

    response.status(200).json({
        'response': `thanks for calling the API with username ${username}, password ${password}`
    });
})

app.listen(8000, () => {
    console.log('Server is running.')
});
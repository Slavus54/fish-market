const app = require('express')();
const server = require('http').Server(app);
const next = require('next');
const bodyParser = require('body-parser');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();
const PORT = 4000 || process.env.PORT;

nextApp.prepare().then(() => {
    app.get('*', (req,res) => {
        return handle(req,res)
    })
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())   
    app.use(cors())

    app.listen(PORT, console.log(`Server have started at ${PORT} port`))
    app.get('/api', (req, res) => {
        const data = {
            name: 'Slava',
            age: 15
        }
        console.log('Great GET request')
        res.json()
    })
    app.post('/api', (req, res) => {
        console.log('Great POST request', req.body.data)
        res.send()
    })
})


//const server = http.createServer(app);

// const transporter = nodemailer.createTransport(sendgrid({
//         auth: {
//             api_key: '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'
//         }
// }))

// const io = socketio(server);

// app.get('/', (req, res) => {
//     res.send('API running');
// })

// io
//     .of('/contacts')
//     .on('connection', function (socket) {
//     console.log('New WS connection...')
//     socket.on('email', async (data) => {
//         console.log(data)
//         try {
// 			await transporter.sendMail(mail(data))
// 		} catch (e) {
// 			console.log(e)
// 		}
//     })
//     socket.on('disconnect', () => {
// 		console.log('User has left')
// 	})
// })

// const PORT = 6000 || process.env.PORT;

// server.listen(PORT, console.log(`Server have started at ${PORT} port`));
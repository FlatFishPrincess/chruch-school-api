import cors from 'cors';
import bodyParser from 'body-parser';
import { getApiConfig } from '../configs/configs';

export default ({ app }) => {

    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());

    // Middleware goes here
    app.use(bodyParser.json());

      // Load API routes
    app.use(getApiConfig().prefix, routes());
    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });
    
    /// error handlers
    app.use((err, req, res, next) => {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === 'UnauthorizedError') {
        return res
            .status(err.status)
            .send({ message: err.message })
            .end();
        }
        return next(err);
    });
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
        errors: {
            message: err.message,
        },
        });
    });
}

import ApplicationError from './application-error';

export default class BadRequestError extends ApplicationError {
  constructor(message = 'Bad request') {
    super(message, 'Bad request', 400);
  }
}

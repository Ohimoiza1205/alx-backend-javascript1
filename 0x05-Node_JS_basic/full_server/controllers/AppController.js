/**
 * Contains the miscellaneous route handlers.
 * @author Ohinoyi Moiza <https://github.com/Ohimoiza1205>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

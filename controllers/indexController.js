const getHomePage = (request, response) => {
    response.render("home");
}

module.exports = { getHomePage };
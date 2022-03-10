(function (nunjucks) {

    var env = new nunjucks.Environment(new nunjucks.WebLoader('modules'));

    env.addGlobal("getVars", function () {
        return this.getVariables();
    });

    env.render('page.njk.html', { varA: "alpha", varB: "beta" }, function (err, html) {
        if (err) { console.log('render error', err); }
        document.body.innerHTML += html;
    });

}(window.nunjucks));
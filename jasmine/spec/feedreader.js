/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('all have an URL', function() {
            // For each feed, we will check if the URL is not none, undefined,
            // or empty.
            for (var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].url).toBeTruthy();
            }
        });

        it('all have a name', function() {
            // For each feed, we will check if the name is not none, undefined,
            // or empty.
            for (var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].name).toBeTruthy();
            }
        });
    });


    // The menu is hidden/displayed using the presence/absense of the
    // menu-hidden class on the body.
    describe('The menu', function() {
        var body = $('body');
        var menuIcon = $('.menu-icon-link');

        it('is hidden by default', function() {
            // Without clicking the menu icon, the menu should be hidden.
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        it('can be toggled with the menu icon', function() {
            // Clicking the menu icon toggles the visibility.
            expect(body.hasClass('menu-hidden')).toBe(true);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial entries', function() {
        beforeEach(function(done) {
            // We load the default feed (the first feed).
            loadFeed(0, done);
        });

        it('are set', function() {
            // Loading the feed should add some entries to the DOM.
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New feed selection', function() {
        beforeEach(function(done) {
            // We load the default feed (the first feed).
            loadFeed(0, done);
        });

        it('changes the content', function(done) {
            // Loading a different feed should result in changes in the HTML.
            var oldContent = $('.feed').html();
            loadFeed(1, function() {
                expect($('.feed').html()).not.toEqual(oldContent);
                done();
            });
        });
    });
}());

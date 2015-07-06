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
            for (var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].url).toBeTruthy();
            }
        });

        it('all have a name', function() {
            for (var i = 0; i < allFeeds.length; ++i) {
                expect(allFeeds[i].name).toBeTruthy();
            }
        });
    });


    describe('The menu', function() {
        var body = $('body');
        var menuIcon = $('.menu-icon-link');

        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        it('can be toggled with the menu icon', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('are set', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New feed selection', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('changes the content', function(done) {
            var oldContent = $('.feed').html();
            loadFeed(1, function() {
                expect($('.feed').html()).not.toEqual(oldContent);
                done();
            });
        });
    });
}());
